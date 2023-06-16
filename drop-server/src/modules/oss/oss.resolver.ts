import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { OSSService } from './oss.service';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { createWriteStream, readFile } from 'fs';
import { join } from 'path';

@Resolver()
export class OSSResolver {
  constructor(private readonly ossService: OSSService) {}

  // https://stackoverflow.com/questions/75744174/how-to-upload-images-in-nestjs-with-graphql
  @Mutation(() => Boolean)
  async singleUpload(
    @Args({ name: 'file', type: () => GraphQLUpload })
    { createReadStream, filename }: FileUpload,
    @Args('name') name: string,
  ): Promise<boolean> {
    // TODO: use it later on
    console.log('name: ', name);
    const filePath = `uploads/${filename}`;
    return new Promise(async (resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(join(process.cwd(), filePath)))
        .on('finish', async () => {
          const buffer = (await convert(filePath)) as Buffer;
          if (!buffer) reject(false);
          await this.ossService.save(filePath, buffer, [{ mediaId: name }]);
          resolve(true);
        })
        .on('error', () => reject(false)),
    );
  }
}

const convert = (imgPath) => {
  return new Promise((resolve, reject) => {
    // read image file
    readFile(imgPath, (err, data) => {
      // error handle
      if (err) {
        reject(err);
        return;
      }
      // convert image file to base64-encoded string
      const base64Image = Buffer.from(data);
      resolve(base64Image);
    });
  });
};

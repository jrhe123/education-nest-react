import { Module, ConsoleLogger } from '@nestjs/common';
import { OSSService } from './oss.service';
import { OSSResolver } from './oss.resolver';

@Module({
  imports: [],
  providers: [ConsoleLogger, OSSService, OSSResolver],
  exports: [OSSService],
})
export class OSSModule {}

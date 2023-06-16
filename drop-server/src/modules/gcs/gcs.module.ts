import { Module, ConsoleLogger } from '@nestjs/common';
import { GCSService } from './gcs.service';
import { GCSResolver } from './gcs.resolver';

@Module({
  imports: [],
  providers: [ConsoleLogger, GCSService, GCSResolver],
  exports: [GCSService],
})
export class GCSModule {}

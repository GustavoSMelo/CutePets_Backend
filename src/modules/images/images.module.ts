import { Module } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';

@Module({
    imports: [ConfigModule],
    controllers: [ImagesController],
    providers: [ImagesService],
})
export class ImagesModule {}

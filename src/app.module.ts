import { Module } from '@nestjs/common';
import { ConfigModule as NestJsConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { ConfigModule } from './modules/config/config.module';
import { ImagesModule } from './modules/images/images.module';

@Module({
    imports: [
        NestJsConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '../.env',
        }),
        ConfigModule,
        ImagesModule,
    ],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}

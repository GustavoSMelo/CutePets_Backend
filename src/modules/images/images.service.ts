import { Injectable } from '@nestjs/common';
import { ConfigService } from '../config/config.service';

@Injectable()
export class ImagesService {
    public constructor(private configService: ConfigService) {}

    public async getImages() {
        const photo = await this.configService.returnPhotoAPI().get('/random', {
            params: {
                query: 'cute animals',
            },
        });

        return photo.data;
    }
}

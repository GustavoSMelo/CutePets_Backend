import { Injectable } from '@nestjs/common';
import { ConfigService } from '../config/config.service';

@Injectable()
export class ImagesService {
    public constructor(private configService: ConfigService) {}

    public async getImages(animals = 'animals') {
        const { data } = await this.configService
            .returnPhotoAPI()
            .get('/random', {
                params: {
                    query: `cute ${animals}`,
                },
            });

        return data;
    }
}

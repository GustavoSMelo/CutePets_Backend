import { Controller, Get } from '@nestjs/common';
import { ImagesService } from './images.service';

@Controller('image')
export class ImagesController {
    public constructor(private readonly imagesServices: ImagesService) {}

    @Get()
    public image() {
        return this.imagesServices.getImages();
    }
}

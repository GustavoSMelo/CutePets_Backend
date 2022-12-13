import { Body, Controller, Post } from '@nestjs/common';
import { ImagesService } from './images.service';

@Controller('image')
export class ImagesController {
    public constructor(private readonly imagesServices: ImagesService) {}

    @Post()
    public image(@Body('animals') animals = 'animals') {
        return this.imagesServices.getImages(animals);
    }
}

import { Controller, Get } from '@nestjs/common';
import api from '../config/api';

@Controller('image')
export class ImagesController {
    @Get('')
    public image() {
    }
}

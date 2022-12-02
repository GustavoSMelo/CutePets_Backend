import { Controller, Get } from '@nestjs/common';
import { response } from 'express';

@Controller()
export class AppController {
    @Get()
    public health() {
        return response.status(200);
    }
}

import { FastifyAdapter } from '@nestjs/platform-fastify';
import { Controller, Get, Res } from '@nestjs/common';
import { response } from 'express';

@Controller()
export class AppController {
    @Get()
    public health(@Res() res) {
        const adapter = new FastifyAdapter();
        adapter.status(res, 200);
    }
}

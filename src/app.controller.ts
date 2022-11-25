/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, HttpCode, Ip, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
@Controller('why')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('k')
  getHello(@Req() request: Request): string {
    // return this.appService.getHello();
    return request.body;
  }
  @Get('df')
  geDf(@Ip() ip: string): string {
    console.log(ip);
    return ip;
  }

  @Post('w')
  @HttpCode(204)
  create() {
    return 'This action adds a new cat';
  }
}

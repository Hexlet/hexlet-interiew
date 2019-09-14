import { Controller, Get, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async getHello(@Res() res: Response) {
    const locale = res.getLocale();
    return {
      comingInterviews: [{
        interviewer: 'Kirill Mokevnin',
        interviewee: 'Eugene Sinitsyn',
        videoLink: 'https://youtube.com',
      }],
      message: this.appService.getHello(locale),
    };
  }
}

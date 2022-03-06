import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/albums')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getOne(@Param('id') id:string){
    return this.appService.findOne(Number(id));

  }
  @Get('/')
  getAll(){
    return this.appService.findAll();
  }


}



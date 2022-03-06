import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private albums : any =[
    {id:1, name:'metalica', genre:'rock'},
    {id:2, name:'acdc' , genre: 'we will rock you'}
  ];


  findAll() : any {
    return this.albums;
  }
  findOne(id: number): any{
    return this.albums.find( (album) => album.id == id);
  }
  getHello(): string {
    return 'Hello USA';
  }
  getOne(id:string): string {
    return `your number is ${id}`;
  }


}

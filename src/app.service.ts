import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): {name: string} {
    let a: string = 'Hello World!';
    console.log(a);
    return {
      name: a
    }
  }
}

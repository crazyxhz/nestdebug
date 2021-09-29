import { HttpAdapterHost, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private adapterHost: HttpAdapterHost){}

  getHello(): string {
    // console.log(this.adapterHost)
    return 'Hello World!';
  }
}

import { Controller, Get } from '@nestjs/common';

type AliveCheck = {
  isAlive: true;
};

@Controller()
export class AppController {
  private status: AliveCheck = { isAlive: true };

  @Get('/health')
  healthCheck(): AliveCheck {
    return this.status;
  }
}

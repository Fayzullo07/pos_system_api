import { Body, Controller, Post } from '@nestjs/common';
import { MenuService } from './menu.service';

@Controller('/menu')
export class MenuController {
    constructor(private menuService: MenuService) { }
    @Post()
    async createOrder(
        @Body()
        data
    ): Promise<any> {
        return this.menuService.create(data);
    }
}

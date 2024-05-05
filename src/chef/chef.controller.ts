import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ChefService } from './chef.service';
import { Chef } from './schemas/chef.schema';

@Controller('/chef')
export class ChefController {
    constructor(private chefService: ChefService) { }

    @Get()
    async getAllChef(): Promise<Chef[]> {
        return this.chefService.findAll();
    }

    @Get(':id')
    async getChef(
        @Param('id')
        id: string
    ): Promise<Chef> {
        return this.chefService.findById(id);
    }

    @Patch(':id')
    async updateChef(
        @Param('id')
        id: string,

        @Body()
        chef
    ): Promise<any> {
        return this.chefService.updateById(id, chef);
    }

}

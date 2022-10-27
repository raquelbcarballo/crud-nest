import { Body, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { BaseService } from "./service.commons"

export abstract class BaseController<T> {

    abstract getService(): BaseService<T>;

    @Get('all')
    async findAll(): Promise<T[]> {
        return await this.getService().findAll();
    }

    @Get('find/:id')
    async findOne(id: any): Promise<T> {
        return await this.getService().findOne(id);
    }

    @Post('save')
    @HttpCode(HttpStatus.CREATED)
    async save(entity: T): Promise<T> {
        return await this.getService().save(entity);
    }

    @Post('save/many')
    @HttpCode(HttpStatus.CREATED)
    async saveMany(@Body() entities: T[]): Promise<T[]> {
        return await this.getService().saveMany(entities);
    }

    @Post('delete/:id')
    @HttpCode(HttpStatus.OK)
    async delete(@Param() id: any) {
        return this.getService().delete(id);
    }

    @Get('count')
    async count(): Promise<number> {
        return this.getService().count();
    }
}
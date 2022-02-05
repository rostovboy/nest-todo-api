import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('todos')
export class TodosController {
  @Get()
  findAll(): string {
    return 'findAll';
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return 'findOne ' + id;
  }
  @Post()
  create(): string {
    return 'create';
  }
  @Put()
  update(): string {
    return 'update';
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return 'delete ' + id;
  }
}

import { Controller, Delete, Get, Param, Post, Put, Body } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './todo.entity';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll() {
    return this.todosService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todosService.findOne(id);
  }
  @Post()
  create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todosService.create(createTodoDto);
  }
  @Put()
  update(): string {
    return 'update';
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'delete ' + id;
  }
}

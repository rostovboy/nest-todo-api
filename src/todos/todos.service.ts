import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todosRepository.find();
  }

  findOne(id: string): Promise<Todo> {
    return this.todosRepository.findOne(id);
  }

  async create(todoDto: CreateTodoDto): Promise<Todo> {
    console.log(todoDto);

    let todo = new Todo();
    todo.title = todoDto.title;
    todo.isCompleted = todoDto.isCompleted;

    const newTodo = await this.todosRepository.save(todo);
    return newTodo;
  }

  async remove(id: string): Promise<void> {
    await this.todosRepository.delete(id);
  }
}

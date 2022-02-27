import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosController } from 'src/todos/todos.controller';
import { Todo } from './todo.entity';
import { TodosService } from './todos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}

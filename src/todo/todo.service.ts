import { Injectable } from '@nestjs/common';
import { TodoEntity } from './todo.entity';
import {TodoCreateDto } from './todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(TodoEntity)
        private TodoEntitysRepository: Repository<TodoEntity>,
      ) {}
    
      async findAll(): Promise<TodoEntity[]> {
        return await this.TodoEntitysRepository.find();
      }
    
      findOne(id: string): Promise<TodoEntity> {
        return this.TodoEntitysRepository.findOne(id);
      }

      async create(todo: TodoCreateDto):Promise<TodoEntity>{
         return await this.TodoEntitysRepository.save(todo)
      }

      async update(todo: TodoEntity):Promise<TodoEntity>{
        todo.id = Number(todo.id)
        return await this.TodoEntitysRepository.save(todo)
     }
    
      async delete(id: string): Promise<void> {
        await this.TodoEntitysRepository.delete(id);
      }
    }


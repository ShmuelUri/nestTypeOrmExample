import { Controller, Get, Param, Body, Post, Put, Delete, Logger } from '@nestjs/common';
import { TodoListDto, TodoDto, TodoCreateDto } from './todo.dto';
import { TodoService } from './todo.service';
import { TodoEntity } from './todo.entity';
// import { toPromise } from 'src/shared/utils';

@Controller("api/todos")export class TodoController {  
    constructor(private readonly todoService: TodoService) {}

  @Get() 
  async findAll(): Promise<TodoEntity[]> { 
        return await this.todoService.findAll()
    }

  @Get(":id") 
   async findOne(@Param("id") id: string): Promise<TodoDto> {  
             return await this.todoService.findOne(id); 
    }

  @Post()
   async create(@Body() todo: TodoCreateDto): Promise<TodoEntity> { 
      
          return await this.todoService.create(todo);  }

  @Put(":id")  
  async update(@Param("id") id: string,  @Body() todo: TodoEntity): Promise<TodoDto> { 
         return await this.todoService.update(todo);  }

  @Delete(":id") 
   async destory(@Param("id") id: string): Promise<void> {   
       return await this.todoService.delete(id);  }

}

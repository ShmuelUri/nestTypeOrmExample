import { Controller, Get, Param, Body, Post, Put, Delete, Logger } from '@nestjs/common';
import { TodoListDto, TodoDto, TodoCreateDto } from './todo.dto';
import { TodoService } from './todo.service';
// import { toPromise } from 'src/shared/utils';

@Controller("api/todos")export class TodoController {  
    constructor(private readonly todoService: TodoService) {}

  @Get() 
  async findAll(): Promise<TodoListDto> { 
      return await this.todoService.getAllTodo();}

            

   
  @Get(":id") 
   async findOne(@Param("id") id: string): Promise<TodoDto> {  
             return await this.todoService.getOneTodo(id); 
             }
  @Post()
   async create(@Body() todoCreateDto: TodoCreateDto): Promise<TodoDto> { 
       Logger.log(todoCreateDto)
          return await this.todoService.createTodo(todoCreateDto);  }

  @Put(":id")  
  async update(@Param("id") id: string,  @Body() todoDto: TodoDto  ): Promise<TodoDto> { 
         return await this.todoService.updateTodo(todoDto);  }

  @Delete(":id") 
   async destory(@Param("id") id: string): Promise<TodoDto> {   
       return await this.todoService.destoryTodo(id);  }}

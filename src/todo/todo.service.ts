import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { todos } from 'src/data/todos';
import { v4 as uuid } from 'uuid';
import { TodoEntity } from './todo.entity';
import { TodoDto, TodoCreateDto, TodoListDto } from './todo.dto';
import { toPromise } from 'src/shared/utils';
import { toTodoDto, toTodoListDto } from 'src/shared/mapper';

@Injectable()export class TodoService {

    todos:TodoEntity[] = todos;

    updateTodo(todoDto: TodoDto): Promise<TodoDto> {
        Logger.log(todoDto)
        const id = todoDto.id;
        const index = this.todos.map(e => e.id).indexOf(id);
        this.todos[index] =  todoDto
        const todo = this.todos[index]
        return toPromise(todo)
        
    }

    destoryTodo(id: string): Promise<TodoDto> {
        const todo = this.todos.find(todo => todo.id === id);
        if (!todo) {   
            throw new HttpException(`Todo item doesn't exist`,HttpStatus.BAD_REQUEST);  
          }

          this.todos = this.todos.filter(todo =>{
              return todo.id !== id 
          })

          return toPromise(todo)  
    }

    getAllTodo():Promise<TodoListDto>{      
        return toPromise(toTodoListDto(this.todos))
    } 

  async getOneTodo(id: string): Promise<TodoDto> {   
      const todo = this.todos.find(todo => todo.id === id);
            if (!todo) {   throw new HttpException(`Todo item doesn't exist`,HttpStatus.BAD_REQUEST);  
          }
        return toPromise(toTodoDto(todo));  }

  async createTodo(todoDto: TodoCreateDto): Promise<TodoDto>{   
        const todo: TodoEntity = { id: uuid(), ...todoDto };
        this.todos.push(todo);
        return toPromise(toTodoDto(todo));  }   
}
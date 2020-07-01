import { TodoEntity } from "src/todo/todo.entity";
import { TodoDto, TodoListDto } from "src/todo/todo.dto";


export const toTodoDto = (data: TodoEntity): TodoDto => {  
        const { id, name, description } = data;
        const todoDto: TodoDto = {    id,    name,    description,  };
        return todoDto;};

export const toTodoListDto = (data:TodoEntity[]):TodoListDto=> {
    const todos: TodoDto[] = [];
    data.forEach(todo => {
        todos.push(toTodoDto(todo))
    })
    
    const todosListDto:TodoListDto = {todos} 
    return todosListDto;

}
  
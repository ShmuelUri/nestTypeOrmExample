export class TodoDto 
{  
    id: number; 
    name: string; 
    description?: string;
}

export class TodoCreateDto 
    { 
     name: string; 
     description?: string;
    }

export class TodoListDto { 
     todos: TodoDto[];
    }
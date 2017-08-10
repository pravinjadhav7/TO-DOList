export class Todo {
    
    

    id: number;  // it give  unique ID id the todo application
    title: string = '';  //title of the todo  application
    complete: boolean = false; // to check the todo complete or not

    constructor(values: Object = {}) {
        
         Object.assign(this, values);
    }

    
}

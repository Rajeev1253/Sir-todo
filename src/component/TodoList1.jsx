import React from 'react'

const TodoList1 = (todos,setTodos,seteditTodo) => {
    const handleEdit=(id)=>{
        const findTodo = todos.find((todo)=>todo.id===id);
        seteditTodo(findTodo)

    }
    const handleComplete=(todo)=>{
        setTodos(
            todos.map((item)=>{
               if(item.id===todo.id){
                return{...item,completed:!item.completed}
               }
               return item;
            })
        )
    }
    const handleDelete=(id)=>{
        setTodos(todos.filter((todo)=>todo.id !==id))

    };
  return (
    <div>
        {
            todos.map((todo)=>(
                  <li className='todo-list' key={todo.id}>
                    <input type="checkbox" onClick={()=>handleComplete(todo)}></input>
                  <input type="text" name="" id="" value={todo.title}
                  className='list' onChange={(event)=> event.preventDefault()}/>
                  <div>
                    <button onClick={()=>handleEdit(todo)}>
                        edit
                    </button>
                    <button onClick={()=>handleDelete(todo)}>
                        delete
                    </button>
                  </div>
                  </li>
            ))
                

            
            }

    </div>
  )
}

export default TodoList1
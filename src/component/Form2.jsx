import React, { useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'


const Form2 = ({input,setInput,todos,setTodos,editTodo,seteditTodo}) => {

    const updateTodo=(title,id,completed)=>{
        const newTodos = todos.map((todo)=> todo.id===id?{title,id,completed}:todo);
        setTodos(newTodos);
        seteditTodo("");
    }
    useEffect(()=>{
        if(editTodo){
            setInput(editTodo.title);
        
        }
        else{
            setInput("")
        }
    },[setInput,editTodo])

    const onInputChange =(event)=>{
        setInput(event.target.value);

    }
    const onFormSubmit =(event)=>{
        event.prevent.Default();
        if(!editTodo){
            setTodos([...todos,{id:uuidv4,title:input,completed:false}]);
            setInput('')

        }else{
            updateTodo(input,editTodo.id,editTodo.completed)
        }

        setTodos([...todos,{id:uuidv4,title:input,completed:false}]);
        setInput('')
    }
  return (
    <div>
        <form onSubmit={onFormSubmit}>
        <input type="text" name="" className='taskInput' value={input} onChange={onInputChange}/>
            <button>{editTodo?"Ok":"ADD"}</button>
        </form>
    </div>
  )
}

export default Form2
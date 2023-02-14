// require('dotenv').config()
const baseURl=`{process.env.REACT_APP_API_URL}/todo`;

export const loadTodos=()=>{
    return fetch(baseURl).then((res)=> res.json())
}

export const getTodos=(id)=>{
    return fetch(`${baseURl}/${id}`).then((res)=> res.json())
}

export const createTodo = (todo) =>{
    return fetch(`${baseURl}`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            title:todo.title,
            completed:todo.completed,
        }),
    }).then((res)=>res.json())
} 


export const updateTodo = (todo) =>{
    return fetch(`${baseURl}/${todo.id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            id:todo.id,
            title:todo.title,
            completed:todo.completed,
        }),
    }).then((res)=>res.json())
} 

export const deleteTodo = (id) =>{
    return fetch(`${baseURl}/${id}`,{
        method:"DELETE"
    }).then((res)=>res.json())
} 
import { useState,useEffect } from "react";
import { ListGroup, Button, Form } from 'react-bootstrap'
import {nanoid} from 'nanoid'

const TodoList = () => {
    const [todos,setTodos] = useState([])
    const [todo,setTodo] = useState('')
    const addTodo = (newTodo) => {
        setTodos(prev => [...prev,
        {name:newTodo,
        id:nanoid()}])
    }
    const deleteTodo = (toDelete) => {
        setTodos(prev => prev.filter(el => el.id !== toDelete.id))
    }
    useEffect(() => {
        setTodo('')
    },[todos])
    return (
        <>
            <Form>
                <Form.Control 
                type='text'
                placeholder='Todo'
                onChange={(e) => setTodo(e.target.value)}
                value={todo}/>
                <Button onClick={() => addTodo(todo)}>Add</Button>
            </Form>
            <ListGroup>
                {todos.map(el => {
                    return <ListGroup.Item key={el.id}>{el.name}
                    <Button onClick={() => deleteTodo(el)}>X</Button>
                    </ListGroup.Item>
                })}
            </ListGroup>
        </>
    )
}

export default TodoList
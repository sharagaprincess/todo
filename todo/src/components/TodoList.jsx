import { useState } from "react";
import { ListGroup, Button, Form, Container, Row } from 'react-bootstrap'
import {nanoid} from 'nanoid'
import TodoItem from "./TodoItem";
import { observer } from "mobx-react-lite";
import TodoStore from "../store/TodoStore";
import add from '../assets/add.svg'
import show from '../assets/show.svg'
import hide from '../assets/hide.svg'

const TodoList = observer(() => {
    const [newTodo,setNewTodo] = useState('')
    const addTodo = () => {
        TodoStore.addTodo({title:newTodo,id:nanoid(),completed:false})
        setNewTodo('')
    }
    const getList = () => {
        switch(TodoStore.toShow){
            case 'all': return TodoStore.todos
            case 'completed': return TodoStore.completedTodos
            default: return TodoStore.incompletedTodos
        }
    }
    const [hideList,setHideList] = useState(false)
    return (
        <Container style={{backgroundColor:'white'}}>
            <Row className='TaskInputContainer'>
                <Button className='control' onClick={() => setHideList(prev => !prev)}>
                    <img src={hideList ? hide : show} width='30px' className='img' alt='hide list'/>
                </Button>
                <Form.Control 
                    placeholder='New Task'
                    type='text'
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    className='TaskInput'
                />
                <Button className='control' onClick={addTodo}>
                    <img src={add} width='20px' alt='add'/>
                </Button>
            </Row>
            {!hideList && <ListGroup>
                {getList().map(el => {
                    return <TodoItem 
                    key ={el.id} 
                    todo={el} 
                    deleteTodo={() => TodoStore.deleteTodo(el.id)}
                    completeTodo={() => TodoStore.completeTodo(el)}/>
                    })
                }
            </ListGroup>}
            <Row className='list-bottom'>
                <div>
                    Progress: {TodoStore.completedTodosCount}/{TodoStore.todos.length}
                </div>
                <div className='buttons'>
                    <Button className='filter-button control' onClick={() => TodoStore.setToShow('all')}>All</Button>
                    <Button className='filter-button control' onClick={() => TodoStore.setToShow('completed')}>Completed</Button>
                    <Button className='filter-button control' onClick={() => TodoStore.setToShow('active')}>Active</Button>
                </div>
            </Row>
        </Container>
    )
        
})

export default TodoList
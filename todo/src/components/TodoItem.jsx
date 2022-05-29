import { Button, Row } from 'react-bootstrap'
import { observer } from "mobx-react-lite";
import cross from '../assets/cross.svg'
import CompleteButton from './CompleteButton';

const TodoItem = observer(({todo,deleteTodo,completeTodo}) => {
    return (
        <Row className='TodoItemContainer'>
            <div className='TodoItem'>
                <CompleteButton checked={todo.completed} check={completeTodo}/>
                <span style={todo.completed ? {textDecoration:'line-through'}:{}}>{todo.title}</span>
            </div>
            <Button onClick={deleteTodo} className='control hidden-button'>
                <img src={cross} width='20px' className='img' alt='delete'/>
            </Button>
        </Row>
    )
})

export default TodoItem
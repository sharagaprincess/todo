import { Button } from "react-bootstrap"
import done from '../assets/done.svg'
import circle from '../assets/circle.svg'

const CompleteButton = ({checked, check}) => {
    return (
        <Button onClick={check} className=' control hidden-button'>
            <img src={checked ? done : circle} className='img' width='30px' alt='complete'/>
        </Button>
    )
}

export default CompleteButton
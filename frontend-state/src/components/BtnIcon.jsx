import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(far, fas)

const BtnIcon = props => (
    <button type="button"
        className={
            `btn btn-${props.type || 'primary'}
            ${props.size ? ` btn-${props.size}` : ''}
            ${props.styleClass ? ` ${props.styleClass}` : ''}`
        }
        onClick={props.click}>
            <FontAwesomeIcon icon={props.icon}/>
        </button>
)

export default BtnIcon
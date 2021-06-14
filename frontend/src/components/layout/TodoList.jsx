import BtnIcon from '../BtnIcon'

import './TodoList.scss'

const TodoList = props => {
    function showList() {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={
                    `align-middle
                    ${todo.done ? ` text-decoration-line-through text-muted` : ``}
                    `}>
                        {todo.description}
                </td>
                <td>
                    {todo.done ?
                    <>
                        <BtnIcon icon="redo" click={e => props.taskRedo(todo._id)} type="warning" styleClass="me-2"/>
                        <BtnIcon icon="trash" click={e => props.taskDelete(todo._id)} type="danger"/>
                    </>
                    :
                    <BtnIcon icon="check" click={e => props.taskFinish(todo._id)} type="success"/>
                    }
                </td>
            </tr>
        ))
    }
    
    return (
        <table className="table mt-5 todo-list">
            <thead>
                <tr>
                    <th scope="col">Descrição</th>
                    <th scope="col" width="120">Ações</th>
                </tr>
            </thead>
            <tbody>
                {showList()}
            </tbody>
        </table>
    )
}

export default TodoList
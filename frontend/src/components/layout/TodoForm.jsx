import Grid from '../Grid'
import BtnIcon from '../BtnIcon'

const TodoForm = props => {
    const keyHandler = e => {
        if(e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.clearInput()
        }
    }

    return (
        <div className="row mt-4 g-0">
            <Grid cols="12 8 9 10">
                <input type="text" id="description" className="form-control" placeholder="Adicione uma tarefa"
                    value={props.description}
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}/>
            </Grid>
            <Grid styleClass="d-flex justify-content-start mt-3 mt-sm-0 justify-content-sm-end">
                <BtnIcon icon="plus" styleClass="me-2"
                    click={props.handleAdd}/>
                <BtnIcon icon="search" type="dark" styleClass="me-2"
                    click={props.handleSearch}/>
                <BtnIcon icon="times" type="danger" click={props.clearInput}/>
            </Grid>
        </div>
    )
}

export default TodoForm
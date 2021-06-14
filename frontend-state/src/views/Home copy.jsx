import Text from '../components/Text'

import TodoForm from '../components/layout/TodoForm'
import TodoList from '../components/layout/TodoList'
import { useContext, useEffect, useState } from 'react'

import AppContext from '../data/AppContext'

const todoApi = 'http://localhost:3003/api/todos'

const Home = props => {
    const [state, setState] = useState({description: '', list: []}),
        { description, list } = useContext(AppContext)

    useEffect(function() {
        refresh()
        console.log(description)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    function refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        fetch(`${todoApi}?sort=-createdAt${search}`)
            .then(resp => resp.json())
            .then(json => setState({...state, description, list: json}))
    }

    function handleSearch() {
        refresh(state.description)
    }

    function clearInput() {
        setState({...state, description: ''})
        refresh()
    }

    function handleChange(e) {
        setState({...state, description: e.target.value})
    }

    function handleAdd() {
        const { description } = state

        fetch(todoApi, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({description})
        }).then(resp => refresh())
    }

    function taskFinish(id) {
        fetch(todoApi+'/'+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({done: true})
        }).then(resp => refresh(state.description))
    }

    function taskRedo(id) {
        fetch(todoApi+'/'+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({done: false})
        }).then(resp => refresh(state.description))
    }

    function taskDelete(id) {
        fetch(todoApi+'/'+id, { method: 'DELETE' }).then(resp => refresh(state.description))
    }

    return (
        <div className="container-fluid mt-5">
            <Text as="header" styleClass="display-5 border-bottom pb-4">
                Tarefas
                <small className="ms-4 text-muted h4">Cadastro</small>
            </Text>
            <TodoForm description={state.description}
                handleAdd={handleAdd}
                handleChange={handleChange}
                handleSearch={handleSearch}
                clearInput={clearInput}
            />
            <TodoList
                taskFinish={taskFinish}
                taskRedo={taskRedo}
                taskDelete={taskDelete}
                list={state.list}/>
        </div>
    )
}

export default Home
import Text from '../components/Text'

import TodoForm from '../components/layout/TodoForm'
import TodoList from '../components/layout/TodoList'
import { useContext, useEffect } from 'react'

import AppContext from '../data/AppContext'

const todoApi = 'http://localhost:3003/api/todos'

const Home = props => {
    const { description, list, setDescription, setList } = useContext(AppContext)

    useEffect(function() {
        refresh()
    }, [description]) // eslint-disable-line react-hooks/exhaustive-deps

    function refresh(desc = '') {
        const search = desc ? `&description__regex=/${desc}/` : ''

        fetch(`${todoApi}?sort=-createdAt${search}`)
            .then(resp => resp.json())
            .then(json => setList(json))
    }

    function handleSearch() {
        refresh(description)
    }

    function clearInput() {
        setDescription('')
    }

    function handleChange(e) {
        setDescription(e.target.value)
    }

    function handleAdd() {
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
        }).then(resp => refresh(description))
    }

    function taskRedo(id) {
        fetch(todoApi+'/'+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({done: false})
        }).then(resp => refresh(description))
    }

    function taskDelete(id) {
        fetch(todoApi+'/'+id, { method: 'DELETE' }).then(resp => refresh(description))
    }

    return (
        <div className="container-fluid mt-5">
            <Text as="header" styleClass="display-5 border-bottom pb-4">
                Tarefas
                <small className="ms-4 text-muted h4">Cadastro</small>
            </Text>
            <TodoForm description={description}
                handleAdd={handleAdd}
                handleChange={handleChange}
                handleSearch={handleSearch}
                clearInput={clearInput}
            />
            <TodoList
                taskFinish={taskFinish}
                taskRedo={taskRedo}
                taskDelete={taskDelete}
                list={list}/>
        </div>
    )
}

export default Home
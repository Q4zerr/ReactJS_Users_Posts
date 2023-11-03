import styled from '@emotion/styled'
import {Button} from './Button'
import TextFill from './Textfield'
import { createFakeUsers } from '../services/createFakeUsers'
import ListItem from './ListItem'
import { useState, useMemo } from 'react'

import { useUsers } from '../hooks/useUsers'

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

const FieldContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`

function IUser(){
    const { users, loading, setUsers, deleteUser } = useUsers();
    const [search, setSearch] = useState('');

    const handleCreate = () => {
        // Choix 2
        // const nextUsers = createFakeUsers(1)

        // Choix 1
        setUsers([...users, ...createFakeUsers(1)])

        // Choix 2
        // setUsers((prev) => [...prev, ...nextUsers])
    }

    
    
    const filtered = useMemo(() => {
        if(!search) return users;

        return users.filter((user) => 
            user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
        )
    }, [users, search])

    if(loading){
        return(
            <div>Loading...</div>
        )
    }

    return(
        <div>
            <h1>Test</h1>
            <ListContainer>
                {filtered.map(({id, name, avatar}) => (
                    <ListItem key={id} name={name} avatar={avatar} onClick={() => deleteUser(id)}/>
                ))}
            </ListContainer>
            <FieldContainer>
                <Button onClick={handleCreate}>Create User</Button>
                <TextFill placeholder={'Chercher une valeur'} onChange={(e) => setSearch(e.target.value)} />
            </FieldContainer>
        </div>
    )
}

export default IUser
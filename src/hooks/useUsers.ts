import { useEffect, useState } from "react";
import {User} from '../models/User'
import { fetchUsers } from '../services/users/api'
import { transformUser } from '../services/users/utils'

export const useUsers = () => {
    const [users, setUsers] = useState<User []>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleFetchUsers = async () => {
            const result = await fetchUsers();
            const transformed = result.users.map(transformUser);
            setUsers(transformed);
            setLoading(false);
        }

        handleFetchUsers();
        // setTimeout(() => {
        //     const nextUsers = createFakeUsers(5);
        //     setUsers(nextUsers)
        //     setLoading(false)
        // }, 750)
    }, [])

    const deleteUser = (id: number) => {
        const nextUsers = users.filter((user) => user.id !== id)
        setUsers(nextUsers)
    }

    return {users, loading, setUsers, deleteUser};
}
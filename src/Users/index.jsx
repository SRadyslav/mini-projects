import React from 'react';
import './index.scss';
import { Success } from './Success';
import { UsersBlock } from './UsersBlock';

// Тут список пользователей: https://reqres.in/api/users

function Users() {
    const [users, setUsers] = React.useState([])
    const [invites, setInvites] = React.useState([])
    const [isLoading, SetLoading] = React.useState(true)
    const [success, setSuccess] = React.useState(false)
    const [search, setSearch] = React.useState('')

    React.useEffect(() => {
        fetch('https://reqres.in/api/users').then((res) => res.json()).then((json) => {
            json.data ? setUsers(json.data) : setUsers([])
        }).catch((error) => {
            console.log(error)
            alert("пользователи не получены.")
        }).finally(
            SetLoading(false)
        )
    }, [])

    const onChangeSearchValue = (text) => {
        setSearch(text)
    }

    const onClickInvite = (id) => {
        if (invites.includes(id)) {
            setInvites(prev => prev.filter(_id => _id !== id))
        } else {
            setInvites(prev => [...prev, id])
        }
    }
    const onBack = () => {
        setInvites([])
        setSuccess(false)
    }

    return (
        <div className="App">
            {!success
                ? <UsersBlock isLoading={isLoading} items={users} search={search} onSearch={onChangeSearchValue}
                    onClickInvite={onClickInvite} invites={invites} setSuccess={setSuccess} />
                : <Success count={invites.length} onBack={onBack} />}
        </div>
    );
}

export default Users;
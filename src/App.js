import {useEffect, useState} from "react";

import './App.css';
import Form from "./components/Form/Form";
import Users from "./components/Users/Users";
import {userService} from "./services/user.service";

function App() {

    const [form, setForm] = useState({name: '', username: '', email: ''})

    const [users, setUsers] = useState([]);

    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => {
                setUsers([...value])
                setFilteredUsers([...value])
            })
    }, [])

    const sendForm = (form) => {
        let filterArr = [...users]
        if (form.name) {
            filterArr =  filterArr.filter(user => user.name.toLowerCase().includes(form.name.toLowerCase()));
        }
        if (form.username) {
            filterArr = filterArr.filter(user => user.username.toLowerCase().includes(form.username.toLowerCase()));
        }
        if (form.email) {
            filterArr =  filterArr.filter(user => user.email.toLowerCase().includes(form.email.toLowerCase()));
        }
        setFilteredUsers(filterArr)
    }

    return (
        <>
            <Form sendForm={sendForm} form={form} setForm={setForm}/>
            <Users users={filteredUsers}/>
        </>
    );
}

export default App;

import React from 'react';

const Form = ({sendForm,form,setForm}) => {

    const send = (e) => {
        e.preventDefault()
        sendForm(form)
    }

    const formHandler = (e) => {
        const name = e.target.name;
        setForm({...form, [name]: e.target.value})
    }

    return (
        <>
            <form onSubmit={send}>
                <div className={'form'}>
                    <div>
                        <label>Name:<input type="text" name={'name'} value={form.name} onChange={formHandler}/></label>
                    </div>
                    <div>
                        <label>Username:<input type="text" name={'username'} value={form.username} onChange={formHandler}/></label>
                    </div>
                    <div>
                        <label>Email:<input type="text" name={'email'} value={form.email} onChange={formHandler}/></label>
                    </div>
                    <button>Send</button>
                </div>
            </form>
        </>
    );
};

export default Form;
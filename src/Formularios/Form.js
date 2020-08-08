import React, { useState, useEffect, useRef } from 'react';

const Form = () => {
    let [title, setTitle] = useState('');
    let [description, setDescription] = useState('');

    let firstInput = useRef();

    useEffect(() => {
        console.log(firstInput);
        console.log(firstInput.current.focus())
    },[]);

    const sendForm = (ev) => {
        ev.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: description,
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => {
            setTitle('');
            setDescription('');
            console.log(json)
        });
    }

    return (
        <div>
            <form onSubmit={ ev => sendForm(ev) }>
                <label htmlFor="title">Título: </label>&nbsp;&nbsp;
                <input type="text" name="title" placeholder="Introducir título" onChange={ (ev) => setTitle(ev.target.value) } value={ title } ref={ firstInput }></input>
                <br />
                <label htmlFor="description">Descripción</label>&nbsp;&nbsp;
                <input type="text" name="description" placeholder="Introducir descripción" onChange={ (ev) => setDescription(ev.target.value) } value={ description }></input>
                <br />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

const Manager = () => {
    let [showForm, setShowForm] = useState(true);

    return (
        <div>
            <button onClick={ () => setShowForm(!showForm) }>Alternar form</button>
            <br /><br />
            { showForm && <Form /> }
        </div>
    );
}

export default Manager;
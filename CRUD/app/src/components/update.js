import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Update() {
    let history = useNavigate();
    const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [Address, setAddress] = useState('');


    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setAddress(localStorage.getItem('Address'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://6503f867c8869921ae245316.mockapi.io/FakeData/${id}`, {
            firstName,
            lastName,
            Address
        }).then(() => {
            history('/read')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Address</label>
                    <input placeholder='Address' value={Address} onChange={(e) => setAddress(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
                </Form.Field>
               
            </Form>
        </div>
    )
}
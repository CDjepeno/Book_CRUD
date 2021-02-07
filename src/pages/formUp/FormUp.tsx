import React from 'react'
import { Button } from '../../components/button/Button';
import { Field } from '../../components/forms/field';
import {useState} from 'react';

type Props = {
    handleUpBook: any;
    title: string;
    author: string;
    nb: number;
    id: number;
    
}

export const FormUp: React.FC<Props> = ({  handleUpBook, title, author, nb, id }) => {
    const [form, setForm] = useState({
        title: title,
        author: author,
        nb: nb,
    })
    const [error, setError] = useState("");
    
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        setForm({...form, [name]: value});
    } 

    

    const handleFormValidation = () => {

        handleUpBook(form.title, form.author, form.nb, id); 
    }

    return (
        <>
            <td>
                <Field
                    name="title"
                    value={form.title}
                    onChange={handleChangeInput}
                    error={error}
                />
            </td>
            <td>
                <Field
                    name="author"
                    value={form.author}
                    onChange={handleChangeInput}
                    error={error}
                />
            </td>
            <td>
                <Field
                    name="nb"
                    value={form.nb}
                    onChange={handleChangeInput}
                    error={error}
                />
            </td>
            <td>
                <Button text="valider" btnCss="btn btn-primary mr-4" clic={handleFormValidation}/>
            </td>
        </>
        
        
    )
}



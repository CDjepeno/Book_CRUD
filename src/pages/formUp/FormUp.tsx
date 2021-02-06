import React from 'react'
import { Button } from '../../components/button/Button';
import { Field } from '../../components/forms/field';
import {useState} from 'react';

// type Props = {
//     books: Object
//     handleUpBook: any
// }

export const FormUp: React.FC = () => {
    const [form, setForm] = useState({
        title:"",
        author:"",
        nb:"",
    })
    const [error, setError] = useState("");
    
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        setForm({...form, [name]: value});
    } 

    const handleFormValidation = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log(form);

        // handleUpBook(form.title, form.author, form.nb);
        
    }

    return (
        <div>
            <p>livre</p>
            {/* <td>
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
                    value={form.title}
                    onChange={handleChangeInput}
                    error={error}
                />
            </td>
            <td>
                <Field
                    name="nb"
                    value={form.title}
                    onChange={handleChangeInput}
                    error={error}
                />
            </td>


            <td>
                <Button text="valider" btnCss="btn btn-primary mr-4" clic={handleFormValidation}/>
            </td> */}
        </div>
    )
}



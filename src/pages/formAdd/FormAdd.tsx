import React from 'react';
import classes from './formAdd.module.css'
import {useState} from 'react';
import { Button } from '../../components/button/Button';
import { Field } from '../../components/forms/field';

// type Field = {
//     value?: any;
//     error?: string;
// }

// type Form = {
//     title: Field;
//     author: Field;
//     pages: Field;

// }

type Props = {
    books: Object
    handleAddBook: any
}

export const FormAdd: React.FC<Props> = ({ books, handleAddBook }) => {
    // console.log(books);
    
    const cl = `${classes.policeTitle} text-center`;
    const [error, setError] = useState("");
    const [form, setForm] = useState({
        title:"",
        author:"",
        nb:""
    })
    const [book, setBook] = useState(books)
    // console.log(book);
    

    const handleChangeInput = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        const name: string = e.currentTarget.name;
        const value: any = e.currentTarget.value;
        const newField = { [name]: value }
        // console.log(value);
        setForm({ ...form, ...newField})
    }

    const handleFormValidation = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log(form);

        handleAddBook(form.title, form.author, form.nb);
        
    }

    


    
    return ( <>
            <h2 className={cl}>Affichage du formulaire d'ajout</h2>
            <form onSubmit={handleAddBook}>
               <Field
                    label="Titre du livre"
                    name="title"
                    value={form.title}
                    onChange={handleChangeInput}
                    error={error}
                />
               <Field
                    label="Auteur"
                    name="author"
                    value={form.author}
                    onChange={handleChangeInput}
                    error={error}
                />
               <Field
                    label="Nombre de pages"
                    name="nb"
                    value={form.nb}
                    onChange={handleChangeInput}
                    error={error}
                    type= "number"
                />

                <Button text="valider" btnCss="btn btn-info mb-3" clic={handleFormValidation} />


            </form>
        </>
    )
}
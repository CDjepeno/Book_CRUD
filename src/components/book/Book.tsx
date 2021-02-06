import React from 'react';
import { Button } from '../button/Button';
import { Field } from '../forms/field';

type Props = {
    book: any;
    handleSupBook?: any;
    update?: any;
}

export const Book: React.FC<Props> = ({ book, handleSupBook, update }) => {   
    return (
        <>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.nb}</td>
            <td>
                <Button text="modification" btnCss="btn btn-warning mr-4" clic={update}/>
                <Button text="suppression" btnCss="btn btn-danger" clic={handleSupBook}/>
            </td>
        </>
      
    )
}


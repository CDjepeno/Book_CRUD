import React from 'react';
import { Button } from '../button/Button';

type Props = {
    book: any;
    handleSup?: any;
    handleUp?: any;
}

export const Book: React.FC<Props> = ({ book, handleSup, handleUp }) => {   
    return (
        <>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.nb}</td>
            <td>
                <Button text="modification" btnCss="btn btn-warning mr-4" clic={handleUp}/>
                <Button text="suppression" btnCss="btn btn-danger" clic={handleSup}/>
            </td>
        </>
      
    )
}
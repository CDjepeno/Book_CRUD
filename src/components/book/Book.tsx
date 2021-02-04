import React from 'react';
import { Button } from '../button/Button';

type Props = {
    book: any;
}

export const Book: React.FC<Props> = ({ book }) => {   
    return (
        <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.nb}</td>
            <td>
                <Button text="modification" btnCss="btn btn-warning mr-4" clic={() => console.log('modification')}/>
                <Button text="suppression" btnCss="btn btn-danger" clic={() => console.log('suppression')}/>
            </td>
        </tr>
    )
}
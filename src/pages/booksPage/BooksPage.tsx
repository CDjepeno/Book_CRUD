import { Button } from '../../components/button/Button'
import { Title } from '../../components/title/Title'
import React, {useState} from 'react';
import { Book } from '../../components/book/Book';

type Props = {

}

const BooksPage: React.FC<Props> = () => {
    const [books, setBooks] = useState([
        {id:1, title:"l'algorithmique selon djepeno", author:"djepeno", nb:200},
        {id:2, title:"le france du 19 ème", author:"Albert Patrick", nb:500},
        {id:3, title: "le monde des animaux", author: "Marc Merlin", nb: 250},
        {id:4, title: "le virus d'asie", author: "tya Milo", nb: 120}
    ])

    return (  
        <>
        <Title title="Pages listant les livres"/>
        <table className="table text-center">
            <thead>
                <tr className="table-dark">
                    <th>Titre</th>
                    <th>Auteur</th>
                    <th>Nombre de pages</th>
                    <th className="cols-2">Action</th>
                </tr>
            </thead>
            <tbody>
                {books.map(book => {
                    return (
                        <Book book={book}/>
                    )
                })}
            </tbody>
        </table>
        <Button text="ajouter" btnCss="btn btn-success" propscss="w-100" clic={() => console.log('ajouter')}/>
    
        </>
    );
}
 
export default BooksPage;
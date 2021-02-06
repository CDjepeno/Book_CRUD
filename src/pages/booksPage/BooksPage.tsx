import { Button } from '../../components/button/Button'
import { Title } from '../../components/title/Title'
import React, {useState} from 'react';
import { Book } from '../../components/book/Book';
import { FormAdd } from '../formAdd/FormAdd';
import { FormUp } from '../formUp/FormUp';



const BooksPage: React.FC = () => {
    const [books, setBooks] = useState([
        {id:1, title:"l'algorithmique selon djepeno", author:"djepeno", nb:200},
        {id:2, title:"le france du 19 ème", author:"Albert Patrick", nb:500},
        {id:3, title: "le monde des animaux", author: "Marc Merlin", nb: 250},
        {id:4, title: "le virus d'asie", author: "tya Milo", nb: 120}
    ])
    const [lastIdBook, setLastIdBook] = useState(4)
    const [isAdd, setIsAdd] = useState<boolean>(false);
    const [idBookUpdate, setIdBookUpdate] = useState(0)

    const handleDelete = (id: number) => {
        const newBooks = [...books];
        // console.log('je vais te sup');
        
        setBooks(newBooks.filter(book => book.id !== id))        
    }

    const handleChange = () => {
        setIsAdd(isAdd => !isAdd)
        
    }

    const handleAddBook = ( title: any , author: any ) => {

        setLastIdBook(lastIdBook => lastIdBook++)
        const id = lastIdBook + 1;
        const nBook = {id:id, title: title, author: author, nb: 120}

        const newBook = {...nBook};
     
        books.push(newBook)
        console.log(books);  
        
        setIsAdd(false)
    }


    return (  
    <>
        {!isAdd ?
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
                        if(book.id !== idBookUpdate){
                            return (
                                <tr key={book.id}>
                                    <Book book={book} handleSupBook={() => handleDelete(book.id)} update={() => setIdBookUpdate(book.id)}  />
                                </tr>
                            )
                        } else {
                            return (
                                <FormUp/>
                            )
                        }
                    })}
                </tbody>
            </table>
        </>
        :
        <FormAdd books={books} handleAddBook={handleAddBook}/>
        }

        <Button text={!isAdd ? "ajouter" : "fermet l'ajout"} btnCss="btn btn-success" propscss="w-100" clic={handleChange}/>
    </>
    
    );
}
 
export default BooksPage;
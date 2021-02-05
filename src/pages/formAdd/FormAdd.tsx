import React from 'react';
import classes from './formAdd.module.css'


export const FormAdd: React.FC = () => {
    const cl = `${classes.policeTitle} text-center`
    return (
        <>
            <h2 className={cl}>Affichage du formulaire d'ajout</h2>
        </>
    )
}
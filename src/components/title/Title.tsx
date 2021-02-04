import React from 'react'
import classes from './title.module.css'

type Props = {
    title: string
}
export const Title: React.FC<Props> = ({ title }) => {

    const myCss = `${classes.policeTitle} border border-dark p-2 mt-2 text-white text-center bg-primary rounded`
    return (
        <div>
            <h1 className={myCss}>{title}</h1>
        </div>
    )
}


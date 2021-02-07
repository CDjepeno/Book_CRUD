import React from 'react';

type Props = {
    text: string
}

export const Alert: React.FC<Props> = ( { text } ) => {
    return (
        <div className="alert alert-success">{text}</div>
    )
}
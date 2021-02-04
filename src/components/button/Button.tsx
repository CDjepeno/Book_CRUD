import React from 'react'

type Props = {
    text: string;
    btnCss: string;
    clic: any;
    propscss?: string;
}

export const Button: React.FC<Props> = ( { text, btnCss, clic, propscss } ) => {
    const btn = `${btnCss} ${propscss}`;
    return (
        <button className={btn} onClick={clic}>{text}</button>
    )
}

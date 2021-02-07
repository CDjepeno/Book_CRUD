import React from 'react'

type Props = {
    text: string;
    btnCss: string;
    clic?: any;
    propscss?: string;
    disabled?: any;
}

export const Button: React.FC<Props> = ( { text, btnCss, clic, propscss, disabled } ) => {
    const btn = `${btnCss} ${propscss}`;
    return (
        <button className={btn} onClick={clic} disabled={disabled}>{text}</button>
    )
}

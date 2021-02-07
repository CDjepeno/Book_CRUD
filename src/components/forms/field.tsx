import React from 'react'

type Props = {
    name: string;
    label?: string;
    value: any;
    onChange: any;
    type?: string;
    error?: any;
    onBlur?: any;
}

export const Field: React.FC<Props> = ({ name, label, value, onBlur, onChange, type, error="" }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
                name={name}
                type={type}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                className={"form-control" + (error && " is-invalid")}
                id={name}
            />
            { error && <p className="invalid-feedback">{error}</p> }
            
        </div>
    )
}

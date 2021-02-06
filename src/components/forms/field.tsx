import React from 'react'

type Props = {
    name: string;
    label?: string;
    value: any;
    onChange: any;
    type?: string;
    error: any;
}

export const Field: React.FC<Props> = ({ name, label, value, onChange, type, error="" }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
                name={name}
                type={type}
                onChange={onChange}
                value={value}
                className={"form-control" + (error && " is-invalid")}
                id={name}
            />
            { error && <p className="invalid-feedback">{error}</p> }
            
        </div>
    )
}

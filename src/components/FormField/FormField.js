import React from 'react';

function FormField({ label, valor, onChange, type, nome }) {
    return (
        <div>
            <label>
                {label}
            </label>
            <input
                type={type}
                name={nome}
                value={valor}
                onChange={onChange}
            />
        </div>
    );
}

export default FormField;
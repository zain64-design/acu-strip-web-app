import React from 'react'

const Input = ({
    label,
    type = "text",
    name,
    value='',
    onChange,
    placeholder = "",
    required = false,
    wrapperClassName = "",
    labelClassName = "",
    inputClassName = "",
    iconToggler=null,
}) => {
    return (
        <>
        <div className={`flex flex-col ${wrapperClassName}`}>
                        {label && (
                <label htmlFor={name} value={label} className={`${labelClassName}`}>{label}</label>
            )}

            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className={inputClassName}
            />
            {iconToggler && (
                    <>
                    {iconToggler}
                    </>
                )}
        </div>
        </>
    )
}

export default Input
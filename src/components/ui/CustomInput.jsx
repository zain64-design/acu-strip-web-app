import React from 'react'
import { twMerge } from 'tailwind-merge'

const CustomInput = ({
    label,
    type = "text",
    name,
    value,
    onChange,
    defaultValue,
    placeholder = "",
    required = false,
    wrapperClassName = "",
    labelClassName = "",
    inputClassName = "",
    iconToggler = null,
}) => {
    return (
        <>
            <div className={`flex flex-col ${wrapperClassName}`}>
                {label && (
                    <label htmlFor={name} value={label} className={twMerge(labelClassName)}>{label}</label>
                )}

                <input
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    defaultValue={defaultValue}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    className={twMerge(inputClassName)}
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

export default CustomInput
import React from 'react'
import { twMerge } from 'tailwind-merge'

const CustomInput = ({
    label,
    type = "text",
    name,
    value,
    onChange,
    defaultValue,
    autoComplete,
    placeholder = "",
    required = false,
    wrapperClassName = "",
    labelClassName = "",
    inputClassName = "",
    iconToggler = null,
    allowNegative = false,
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
                    className={twMerge('no-spinner',inputClassName)}
                    autoComplete={autoComplete}
                    {...(type === "number" && !allowNegative ? { min: 0 } : {})}
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
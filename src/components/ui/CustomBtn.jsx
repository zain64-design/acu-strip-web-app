import React from 'react'
import { Button,Spinner } from 'flowbite-react'
import PropTypes from 'prop-types';

const CustomBtn = (
    {
        type = 'button',
        onClick = undefined,
        disabled = false,
        label,
        icon = null,
        buttonClass = '',
        isLoading = false,
        size = ''
    }
) => {
    return (
        <Button
            type={type}
            onClick={onClick}
            disabled={disabled || isLoading}
            className={`${buttonClass}`}
            size={size}>
            {isLoading ? (
                <>
                    <Spinner aria-label="Default status example" />
                </>
            ) : (
                <>
                    {icon && React.isValidElement(icon) ? icon : icon && <icon />}
                    {label && (icon ? <span>{label}</span> : label)}
                </>
            )}
        </Button>
    )
}

CustomBtn.PropTypes = {
    type: PropTypes.string,
    variant: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    label: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    className: PropTypes.string,
    isLoading: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'md', 'lg'])
};

export default CustomBtn
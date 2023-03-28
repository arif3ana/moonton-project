import React, {useEffect, useRef} from "react";
import PropTypes from "prop-types";

InputError.propTypes = {
    type: PropTypes.oneOf(["text","number", "email", "file", "password"]),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primery", "error", "primary-outline"]),
    autoComplate: PropTypes.string,
    required: PropTypes.bool,
    isFocused: PropTypes.bool,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    isError: PropTypes.bool,


}

export default function InputError({ 
    type = 'text',
    name,
    value,
    message, 
    defaultValue,
    className,
    variant = 'primary',
    autoComplate,
    required,
    isFocused,
    handleChange,
    placeholder,
    isError,
    ...props 
}) {
    const input =useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input 
            type={type} 
            name={name}
            valu={value}
            defaultValue={defaultValue}
            className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${isError && "input-error"} input-${variant} ${className}`}
            ref={input}
            autoComplete={autoComplate}
            required={required}
            onChange={(e) => handleChange(e)}
            placeholder={placeholder}
            />
        </div>
    );
    // return message ? (
    //     <p {...props} className={'text-sm text-red-600 ' + className}>
    //         {message}
    //     </p>
    // ) : null;
}

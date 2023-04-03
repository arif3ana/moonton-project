import PropTypes from "prop-types";

SecondaryButton.propTypes = {
    type: PropTypes.oneOf(['submit', 'button', 'reset']),
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "danger", "warning", "light-outline", "white-outline"]),
    processing: PropTypes.bool,
    children: PropTypes.node
}

export default function SecondaryButton({ type = 'submit', className = '', processing, children, variant="primary", ...props }) {
    return (
        <button
            {...props}
            type={type}
            className={`rounded-2xl bg-alerange py-[13px] text-center w-full ${processing && "opacity-30"} btn-${variant} ${className}`
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}

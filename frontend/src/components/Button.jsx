const Button = props => (
    <button type="button"
        className={
            `btn btn-${props.type || 'primary'}
            ${props.size ? ` btn-${props.size}` : ''}
            ${props.style ? ` ${props.style}` : ''}`
        }>
            {props.children}
        </button>
)

export default Button
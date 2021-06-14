const Text = props => (
    <props.as className={props.styleClass}>
        {props.children}
    </props.as>
)

export default Text
export function Button(props) {
    const { children, className, checked, disabled } = props;
    return (
        <button className={`btn ${className}`} disabled={disabled} style={{textDecoration: checked ? 'line-through' : 'initial'}}>
            {children}
        </button>
    )
}
export default function (props) {
    const { onClick, children } = props
    return (
        <button onClick={onClick}>{children}</button>
    )
}
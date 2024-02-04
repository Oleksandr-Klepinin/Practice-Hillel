export function ListItem(props) {
    const name = `checked_${Math.random()}`;
    const { children } = props;
    return (
        <li className="list_component">
            <label
                htmlFor={name}
                className="list_component_text"
            >
                {children}
            </label>
        </li>
    )
}
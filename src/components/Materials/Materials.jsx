export const Materials = ({ items, onDelete }) => {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    <p><b>Name:</b> {item.title}</p>
                    <p><b>Link:</b> {item.link}</p>
                    <button type="button" onClick={() => onDelete(item.id)}>Delete</button>
                    <hr/>
                </li>
            ))}
        </ul>
    )
}
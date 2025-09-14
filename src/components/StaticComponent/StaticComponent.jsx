const StaticComponent = () => {
    const items = ['alemans', 'nazi', 'franco', 'mussolini']
    return (
        <div>
            <h1 className="text-xl font-bold underline">Static Component</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default StaticComponent

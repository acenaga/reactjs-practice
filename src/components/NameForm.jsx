import { useState } from 'react';

const NameForm = () => {
    const [name, setName] = useState("")

    return (
        <div>
            <h2>Formulario de prueba de nombre</h2>
            <input
                type="text"
                placeholder="Ingrese su nombre"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <p>Hola - {name || 'visitante'}</p>
        </div>
    );

}

export default NameForm;
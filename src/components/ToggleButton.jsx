import { useState } from "react";
import Counter from './Counter'
const ToggleButton = () => {
    const [isActive, setIsActive] = useState(false);
    return (
        <>
            <button onClick={() => setIsActive(!isActive)}>
                {isActive ? "Activo" : "Inactivo"}
            </button>
            { isActive ? <Counter /> : '' }
        </>
    );
}

export default ToggleButton;
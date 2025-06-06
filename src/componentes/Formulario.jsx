import Campo from "./Campo"

function Formulario() {
    return (
        <form id="form">
            <Campo name="Nombre" type="text"/>
            <Campo name="Apellido" type="text"/>
            <Campo name="Email" type="text"/>
            <Campo name="Teléfono" type="number"/>
            <Campo name="Contraseña" type="password"/>
            <Campo name="Confirmar contraseña" type="password"/>
            <input type="submit" value="Registrarse"/>
        </form>
    )
}

export default Formulario
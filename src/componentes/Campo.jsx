function Campo(props){
    return (
        <div className="campo">
            <label>{props.name}:</label>
            <input type={props.type} name={props.name}/>
        </div>
    )
}

export default Campo
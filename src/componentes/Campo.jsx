function Campo(props){
    return (
        <div className="campo">
            <label>{props.name}:</label>
            <input type={props.type}/>
        </div>
    )
}

export default Campo
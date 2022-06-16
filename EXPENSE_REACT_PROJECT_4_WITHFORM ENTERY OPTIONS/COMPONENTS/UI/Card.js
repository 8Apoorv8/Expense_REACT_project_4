import "./Card.css";

//function Card(props)

const Card=props=>                                        //converted to Arrow function 
{
    let cls="card " + props.className; 
    return (
        
        <div className={cls}>{props.children}</div>
    );
}

export default Card;
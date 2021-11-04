import "./Card.css"

const Card = (props) =>{
    return (
        <div className="col-xs-4">
            <div className="card">
                <div className="card__image">
                    <img className="image__item" src={props.image} alt=""/>
                </div>
                <div className="card__body">
                    <div className="card__content">
                        <h2 className="heading2">
                            {props.title}
                        </h2>
                        <h2 className="heading2">
                            ${props.price}
                        </h2>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
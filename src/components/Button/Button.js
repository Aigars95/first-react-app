import './Button.css'



const Button = (props) => {


    return(

        <button
            className="button"
            onClick={props.clickHundler}
        >
            {props.buttonName}
        </button>

    )
}

export default Button;
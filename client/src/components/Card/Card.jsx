import './Card.css';
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <div className="card">
            <Link to={`/post/${props.id}`}>
          <h3 className="card-title">{props.name}</h3>
          <h4 className="card-proposal">{props.proposal}</h4>
          <h4 className="card-software">{props.softwares}</h4>
            </Link>
        </div>
    )
}

export default Card
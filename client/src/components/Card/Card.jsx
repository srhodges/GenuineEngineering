import './Card.css';
import { Link } from 'react-router-dom'

const PostCard = (props) => {
    return (
        <div className="post-card">
            <Link className="card" to={`/portfolio/${props.id}`}>
          <h3 className="post-card-title">{props.title}</h3>
          <h4 className="post-card-author">{props.author}</h4>
            </Link>
        </div>
    )
}

export default PostCard
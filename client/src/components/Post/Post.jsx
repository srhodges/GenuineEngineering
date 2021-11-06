import './Post.css';
import { Link } from 'react-router-dom'

const Post = (props) => {
  console.log(props)
    return (
        <>
            <Link className="post" to={`/portfolio/${props.id}`}>
                <div className="post-title">{props.name}</div>
                <div className="post-author">{props.proposal}</div>
                <div className="post-content">{props.softwares}</div>
            </Link>
        </>
    )
}
export default Post
import './CardMap.css'
import { Link } from 'react-router-dom'

const CardMap = (props) => {
  const { handlePostDelete, currentUser, posts } = props

  const CARDS = posts
    .reverse()
    .map((post) => (
      <div className="card" key={post.id}>
        <Link to={`/post/${post.id}`}>
          <h1>{post.name}</h1>
          <h2>{post.proposal}</h2>
          {post.softwares?.map(software => (
            <p>{software.name}</p>
          ))}
        </Link>
        {currentUser && currentUser.id === post.user_id ?
          <>
            <Link to={`/post/${post.id}/edit`}>
              <button>edit</button>
            </Link>
            <button onClick={() => handlePostDelete(post.id)}>delete</button>
          </> : <></>
        }
      </div>
    ))
    
    return (
      <div className='post-card'>
      {CARDS}
    </div>
  )
}

export default CardMap
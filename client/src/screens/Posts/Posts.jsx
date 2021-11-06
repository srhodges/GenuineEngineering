import { Link } from 'react-router-dom';


export default function Posts(props) {
  const {posts} = props
  
  const { handlePostDelete, currentUser } = props
  
  return (
    <div className="post-card">   
        {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/post/${post.id}`}>
              <p>{post.name}</p>
              <p>{post.proposal}</p>
              {post.softwares?.map(software => (
                <p>{software.name}</p>
              ))}

            </Link>
            { currentUser && currentUser.id === post.user_id ? 
              <>
              <Link to={`/post/${post.id}/edit`}>
            <button>edit</button>
            </Link>
          <button onClick={() => handlePostDelete(post.id)}>delete</button>
        </> : <></>
        }
        </div>
      ))} 
      <Link to='/portfolio'>
      </Link> 
    </div>
  );
}

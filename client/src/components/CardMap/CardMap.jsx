import { useState, useEffect } from 'react'
import './CardMap.css'
import Card from '../Card/Card'
import { getAllPosts } from '../../services/posts'
import { Link } from 'react-router-dom'

const CardMap = (props) => {
  const [posts, setPosts] = useState([])
  const { handlePostDelete, currentUser } = props

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts();
      console.log("list",postList)
      setPosts(postList);
    };
    fetchPosts();
  }, []);

  const CARDS = posts
    .reverse()
    .map((post) => (
      <div key={post.id}>
        <Link to={`/post/${post.id}`}>
          <p>{post.name}</p>
          <p>{post.proposal}</p>
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
      <div className='post-cards'>
      <div className='cards'>{CARDS}</div>
    </div>
  )
}

export default CardMap
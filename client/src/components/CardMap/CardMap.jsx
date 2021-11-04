import { useState, useEffect } from 'react'
import './CardMap.css'
import Card from '../Card/Card'
import { getPosts } from '../../services/posts'

const CardMap = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts()
      setPosts(allPosts)
    }
    fetchPosts()
  }, [])

  const CARDS = posts
    .reverse()
    .map((post, index) =>
      index < 8 ? (
        <Card
        _id={post._id}
          title={post.title}
          author={post.author}
          key={index}
        />
      ) : null
    )

  return (
    <div className='post-cards'>
      <div className='cards'>{CARDS}</div>
    </div>
  )
}

export default CardMap
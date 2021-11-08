import './PostDetail.css'
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOnePost } from '../../services/posts';


export default function PostDetail(props) {
  const [postItem, setPostItem] = useState(null);
  const { id } = useParams();
  const {post, handlePostDelete, currentUser } = props;



  useEffect(() => {
    const fetchPostItem = async () => {
      const postData = await getOnePost(id);
      console.log(postData);
      setPostItem(postData);
    };
    fetchPostItem();
  }, [id]);

    return (
        <div className="details-container"> 
        <h1>
        {postItem?.name}
        </h1>
        {<br/>}
        
        <h2>
        {postItem?.proposal}
        </h2>
        <br/>
        
        {postItem?.softwares.map(software => (
          <p>
            {software.name}
          </p>
        ))}
        {currentUser && currentUser.id === post.user_id ?
          <>
            <Link to={`/post/${post.id}/edit`}>
              <button>edit</button>
            </Link>
            <button onClick={() => handlePostDelete(post.id)}>delete</button>
          </> : <></>
        }
            </div>
    
  )
}
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOnePost } from '../../services/posts';
// import { useHistory } from 'react-router-dom';

export default function PostDetail(props) {
  const [postItem, setPostItem] = useState(null);
  const [ setSoftware ] = useState('');
  const { id } = useParams();
  const {post, softwares, posts, handlePostDelete, currentUser } = props;



  useEffect(() => {
    const fetchPostItem = async () => {
      const postData = await getOnePost(id);
      console.log(postData);
      setPostItem(postData);
    };
    fetchPostItem();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSoftware(value);
  };

  // Our handle submit for adding the software to our post
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const postItem = await addSoftwareToPost(software, id);
  //   setPostItem(postItem);
  // };

    return (
      <div className='details-page'>
        <div className="details-container">
{console.log(postItem?.name)}
        <div className='details-name-container'>
          <div className='post-name'>{postItem?.name}</div>
          {/* <div className="outer-detail-container"><textarea className='detail-content'>{postItem?.proposal}</textarea></div> */}
            <div className='software-type'>
              
              {postItem?.softwares.map(software => (
                <p>
                  {software.name}
                </p>
              ) ) }</div>
          <div className='details-button-container'>
          { currentUser && currentUser.id === post.user_id ? 
              <>
              <Link to={`/post/${post.id}/edit`}>
            <button>edit</button>
            </Link>
          <button onClick={() => handlePostDelete(post.id)}>delete</button>
        </> : <></>
        }  
            </div>
          </div>
        </div>
      </div>
    
  )
}
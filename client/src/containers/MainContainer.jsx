// import { useState, useEffect } from 'react';
// import { Switch, Route, useHistory } from 'react-router-dom';

// import { deletePost, getAllPosts, postPost, putPost } from '../services/posts';
// import { getAllSoftware } from '../services/software';
// import Posts from '../screens/Posts/Posts';
// import PostCreate from '../screens/PostCreate/PostCreate';
// import PostEdit from '../screens/PostEdit/PostEdit';
// import Software from '../screens/Software/Software';
// import PostDetail from '../screens/PostDetail/PostDetail';

// export default function MainContainer() {
//   const [posts, setPosts] = useState([]);
//   const [software, setSoftware] = useState([]);
//   const history = useHistory();

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const postList = await getAllPosts();
//       setPosts(postList);
//     };
//     fetchPosts();
//   }, []);

//   useEffect(() => {
//     const fetchSoftware = async () => {
//       const softwareList = await getAllSoftware();
//       setSoftware(softwareList);
//     };
//     fetchSoftware();
//   }, []);

//   const handlePostCreate = async (formData) => {
//     const newPost = await postPost(formData);
//     setPosts((prevState) => [...prevState, newPost]);
//     history.push('/posts');
//   };

//   const handlePostUpdate = async (id, formData) => {
//     const newPost = await putPost(id, formData);
//     setPosts((prevState) =>
//       prevState.map((post) => {
//         return post.id === Number(id) ? newPost : post;
//       })
//     );
//     history.push('/posts');
//   };

//   const handlePostDelete = async (id) => {
//     await deletePost(id);
//     setPosts((prevState) => prevState.filter((post) => post.id !== id));
//   };

//   return (
//     <Switch>
//       <Route path='/posts/:id/edit'>
//         <PostEdit posts={posts} handlePostUpdate={handlePostUpdate} />
//       </Route>
//       <Route path='/posts/new'>
//         <PostCreate handlePostCreate={handlePostCreate} />
//       </Route>
//       <Route path='/posts/:id'>
//         <PostDetail software={software} />
//       </Route>
//       <Route >
//         <Posts posts={posts} handlePostDelete={handlePostDelete} />
//       </Route>
//       <Route path='/software'>
//         <Software software={software} />
//       </Route>
//     </Switch>
//   );
// }

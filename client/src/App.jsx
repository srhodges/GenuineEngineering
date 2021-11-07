
import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { deletePost, getAllPosts, postPost, putPost, addSoftwareToPost } from './services/posts';
import { getAllSoftware } from './services/software';
import PostEdit from './screens/PostEdit/PostEdit';
import PostDetail from './screens/PostDetail/PostDetail';
import PostCreate from './screens/PostCreate/PostCreate'
import Posts from './screens/Posts/Posts';
import Software from './screens/Software/Software';
// import Register from './screens/Register/Register';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import Login from './screens/Login/Login';
import Home from './screens/Home/Home';
import Layout from './layouts/Layout';

function App() {
  const [posts, setPosts] = useState([]);
  const [software, setSoftware] = useState([]);
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState(null);
  
  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts();
      setPosts(postList);
    };
    fetchPosts();
  }, []);
  
  useEffect(() => {
    const fetchSoftware = async () => {
      const softwareList = await getAllSoftware();
      setSoftware(softwareList);
    };
    fetchSoftware();
  }, []);

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/portfolio');
  };
  
  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    if (userData) {   
      history.push('/portfolio');
    }
  };
  
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  };
  
  const handlePostCreate = async (formData) => {
      console.log(formData)
      const newPost = await postPost(formData);
      console.log(newPost)
      setPosts((prevState) => [...prevState, newPost]);
      history.push('/portfolio');
    };
  
    const handlePostUpdate = async (id, formData) => {
      const newPost = await putPost(id, formData);
      setPosts((prevState) =>
        prevState.map((post) => {
          return post.id === Number(id) ? newPost : post;
        })
      );
      history.push('/portfolio');
    };
  
    const handlePostDelete = async (id) => {
      await deletePost(id);
      setPosts((prevState) => prevState.filter((post) => post.id !== id));
    };

  return (
    <div className='App'>
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
        <Route exact path="/">
          <Home handleRegister={handleRegister} currentUser={currentUser}/>
          </Route>
          <Route exact path="/register">
          <Home handleRegister={handleRegister} currentUser={currentUser}/>
        </Route>
        <Route exact path="/login">
          <Login handleLogin={handleLogin} />
          </Route>
          <Route path='/portfolio'>
        <Posts posts={posts} handlePostUpdate={handlePostUpdate} handlePostDelete={handlePostDelete} currentUser={currentUser}  />
      </Route>
      <Route path='/post/new'>
        <PostCreate handlePostCreate={handlePostCreate} software={software}/>
      </Route>
        <Route path='/post/:id/edit'>
        <PostEdit posts={posts} handlePostUpdate={handlePostUpdate} addSoftwareToPost={addSoftwareToPost} software={software} />
      </Route>
      <Route path='/post/:id'>
        <PostDetail software={software} />
      </Route>
      <Route  path='/post/:id' >
        <Posts posts={posts} handlePostDelete={handlePostDelete} />
      </Route>
      <Route path='/software'>
        <Software software={software} />
      </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
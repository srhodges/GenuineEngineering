
import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { deletePost, getAllPosts, postPost, putPost, addSoftwareToPost } from './services/posts';
import { getAllSoftware } from './services/software';
import PostEdit from './screens/PostEdit/PostEdit';
import PostDetail from './screens/PostDetail/PostDetail';
import PostCreate from './screens/PostCreate/PostCreate'
import Posts from './screens/Posts/Posts';
import Register from './screens/Register/Register';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth';
import Login from './screens/Login/Login';
import Layout from './layouts/Layout';
import SignOut from './screens/SignOut/SignOut';
import About from './screens/About/About';

function App() {
  const [posts, setPosts] = useState([]);
  const [software, setSoftware] = useState([]);
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState(null);
  const [toggle, setToggle] = useState(false);
  
  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts();
      setPosts(postList);
    };
    fetchPosts();
  }, [toggle]);
  
  useEffect(() => {
    const fetchSoftware = async () => {
      const softwareList = await getAllSoftware();
      setSoftware(softwareList);
    };
    fetchSoftware();
  }, [toggle]);

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
      setToggle(prevToggle => !prevToggle)
    };

  return (
    <div className='App'>
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
        <Route exact path="/">
          <Register handleRegister={handleRegister} currentUser={currentUser}/>
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
        <Posts toggle={toggle} posts={posts} handlePostDelete={handlePostDelete} />
      </Route>
      <Route path='/more'>
        <About />
          </Route>
          <Route path='/sign-out'>
            <SignOut setCurrentUser={setCurrentUser} handleLogout={handleLogout}/>
      </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
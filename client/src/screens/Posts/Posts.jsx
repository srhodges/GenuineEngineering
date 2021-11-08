import CardMap from '../../components/CardMap/CardMap';


export default function Posts(props) {
  const {posts} = props
  
  const { handlePostDelete, currentUser, toggle } = props
  
  return (
    <>
      <CardMap
      currentUser={currentUser}  
      id={posts.id}
      name={posts.name}
      proposal={posts.proposal}
        softwares={posts.softwares}
        handlePostDelete={handlePostDelete}
        toggle={toggle}
        posts={posts}
      />
    </>
  );
}

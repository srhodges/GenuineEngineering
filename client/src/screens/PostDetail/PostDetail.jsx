import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOnePost, addSoftwareToPost } from '../../services/posts';

export default function PostDetail(props) {
  const [postItem, setPostItem] = useState(null);
  const [software, setSoftware] = useState('');
  const { id } = useParams();
  const { softwares } = props;

  useEffect(() => {
    const fetchPostItem = async () => {
      const postData = await getOnePost(id);
      setPostItem(postData);
    };
    fetchPostItem();
  }, [id]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSoftware(value);
  };

  // Our handle submit for adding the flavor to our food
  const handleSubmit = async (e) => {
    e.preventDefault();
    const postItem = await addSoftwareToPost(software, id);
    setPostItem(postItem);
  };

  return (
    <div>
      <h3>{postItem?.name}</h3>
      {postItem?.software.map((software) => (
        <p key={software.id}>{software.name}</p>
      ))}
      {/* below is our for for the flavor drop down */}
      <form onSubmit={handleSubmit}>
        <select onChange={handleChange} defaultValue='default'>
          {/* we can set a default value to tell people to select a flavor*/}
          {/* the "defaultValue" on the <select> tag needs to match the "value" on our default <option> tag */}
          {/* we also add the "disabled" in the <option> to prevent users from selecting it*/}
          <option disabled value='default'>
            -- Software Type --
          </option>
          {/* now we loop over all flavors and return an <option> tag for each */}

          {softwares.map((software) => (
            // we track the flavor's id as the "value" which will get added to state onChange
            // the flavor's name goes between the open and close tag which is what the user sees
            <option value={software.id}>{software.name}</option>
          ))}
        </select>
        <button>Add</button>
      </form>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function PostEdit(props) {
  const [selectedSoftwares, setSelectedSoftwares] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    proposal: '',
  });
  const { name, proposal} = formData;
  const { id } = useParams();
  const { posts, handlePostUpdate, software } = props;

  useEffect(() => {
    const prefillFormData = () => {
      const postItem = posts.find(post => post.id === Number(id))
      setFormData({
        name: postItem.name
      })
    };
    if (posts.length) {
      prefillFormData();
    }
  }, [posts, id]);

  const handleChange = (e) => {
    const { name ,value } = e.target;
    setFormData({...formData,
     [name]: value,
  
    });
  };

  return (
    <div>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handlePostUpdate(id, formData);
      }}
      >
      <h1>Edit Proposal</h1>
      <label>
        Name:
        <input type='text' value={name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Proposal:
        <input type='text' value={proposal} onChange={handleChange} />
        </label>
        {software.map((software) => (
            <label>
              {software.name}
              <input onChange={ (e) => setSelectedSoftwares((prevSoftware) => [...prevSoftware, e.target.value])} type="checkbox" value={software.id} name={software.name}/>
            </label>
          ))}
      <button>Submit</button>
    </form>
      </div>
  );
}

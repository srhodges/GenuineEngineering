import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function PostEdit(props) {
  const [selectedSoftwares, setSelectedSoftwares] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    proposal: '',
    softwares: [],
  });
  const { name, proposal} = formData;
  const { id } = useParams();
  const { posts, handlePostUpdate, software } = props;

  useEffect(() => {
    const prefillFormData = () => {
      const postItem = posts.find(post => post.id === Number(id))
      setFormData({
        name: postItem.name,
        proposal: postItem.proposal
      })
    };
    if (posts.length) {
      prefillFormData();
    }
  }, [posts, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,
      [name]: value,
      softwares: [...selectedSoftwares, value]
    });
  };

  const handleCheck = (e) => {
    if (e.target.checked) {
      setSelectedSoftwares((prevSoftware) => [...prevSoftware, e.target.value])
    } else {
      const i = selectedSoftwares.indexOf(e.target.value)
      selectedSoftwares.splice(i, 1)
      setSelectedSoftwares([...selectedSoftwares])
    } 
  }

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
      </label>
        <input type='text' value={name} name="name" onChange={handleChange} />
      <br />
      <label>
        Proposal:
        </label>
        <input type='text' value={proposal} name="proposal" onChange={handleChange} />
        
        {software.map((software) => (
            <label>
              {software.name}
              <input onClick={handleCheck} onChange={handleChange}
                type="checkbox"
                value={software.id}
                name={software.name} />
              
            </label>
          ))}
      <button>Submit</button>
    </form>
      </div>
  );
}

import { useState } from 'react';

export default function PostCreate(props) {
  const [formData, setFormData] = useState({
    name: '',
    proposal: '',
  });
  const [selectedSoftwares, setSelectedSoftwares] = useState([])
  const { name } = formData;
  const { handlePostCreate, software, proposal } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,
      [name]: value,
    });
  };


  return (
    <div className="create-container">
      <div className="create-form-container">
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handlePostCreate(formData);
      }}
      >
      <h1>Create Proposal</h1>
      <label>
        Name:
            <input type='text' name="name" value={name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Proposal:
        <input type='text' name="proposal" value={proposal} onChange={handleChange} />
      </label>
      <br />

          {software.map((software) => (
            <label>
              {software.name}
              <input onChange={ (e) => setSelectedSoftwares((prevSoftware) => [...prevSoftware, e.target.value])} type="checkbox" value={software.id} name={software.name}/>
            </label>
          ))}
      <br />
      <button>Submit</button>
        </form>
        </div>
      </div>
  );
}

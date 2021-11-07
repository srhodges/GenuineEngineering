import { useState } from 'react';

export default function PostCreate(props) {
  const [selectedSoftwares, setSelectedSoftwares] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    proposal: '',
    softwares: [],
  });
  const { name, proposal, softwares } = formData;
  const { handlePostCreate, software } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,
      [name]: value,
      softwares: [...selectedSoftwares]
    });
  };

  const handleCheck = (e) => {
    // console.log(e.target.checked);
    if (e.target.checked) {
      setSelectedSoftwares((prevSoftware) => [...prevSoftware, e.target.value])
    } else {
      const i = selectedSoftwares.indexOf(e.target.value)
      selectedSoftwares.splice(i, 1)
      setSelectedSoftwares([...selectedSoftwares])
    } 
  }

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
        <textarea type='text' name="proposal" value={proposal} onChange={handleChange} />
      </label>
      <br />

          {software.map((software) => (
            <label>
              {software.name}
              {/* <input onChange={(e) => setSelectedSoftwares((prevSoftware) => [...prevSoftware, e.target.value])} */}
              <input onClick={handleCheck} onChange={handleChange}
              // (e) => handleChange(e)
              
                type="checkbox"
                value={software.id}
                name={software.name} />
              
            </label>
          ))}
      <br />
      <button>Submit</button>
        </form>
        </div>
      </div>
  );
}

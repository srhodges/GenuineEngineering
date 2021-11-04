import { useState } from 'react';

export default function FoodCreate(props) {
  const [formData, setFormData] = useState({
    name: '',
  });
  const { name } = formData;
  const { handlePostCreate } = props;

  const handleChange = (e) => {
    const { value } = e.target;
    setFormData({
      name: value,
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handlePostCreate(formData);
      }}
    >
      <h1>Create Proposal</h1>
      <label>
        Name:
        <input type='text' value={name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Proposal:
        <input type='text' value={name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Software Type:
        <input type='text' value={name} onChange={handleChange} />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
}

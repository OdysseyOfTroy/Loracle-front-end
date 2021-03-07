import React from 'react';
import UseUserForm  from './hooks/UseUserForm';

const UserForm = () => {
    const {inputs, handleInputChange, handleSubmit} = UseUserForm('');

  return (
    <form onSubmit={handleSubmit}>
      <label> Email: </label>
      <input type="text" name="Email" onChange={handleInputChange} value={inputs.Email} required />
      <label> Username: </label>
      <input type="text" name="DisplayName" onChange={handleInputChange} value={inputs.DisplayName} required />
      <label> Password: </label>
      <input type="password" name="Password" onChange={handleInputChange} value={inputs.Password} required />
      <input type="submit" value="Enter"></input>
    </form>
  );
}

export default UserForm;
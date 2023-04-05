import { useState } from 'react';
import useJsonServer from './useJsonServer';

const Users = () => {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
  });
  const { data, create, update, remove } = useJsonServer(
    'http://localhost:3000/users'
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    create(newUser);
    setNewUser({ name: '', email: '' });
  };

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <button onClick={() => remove(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newUser.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleInputChange}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default Users;

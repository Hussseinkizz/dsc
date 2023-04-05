import { useContext } from 'react';
import { AuthContext } from './AuthContext';

export default function Auth() {
  const { currentUser } = useContext(AuthContext);
  const username = currentUser?.username;
  return (
    <div className="body">
      <h1> Welcome , {username}!</h1>
    </div>
  );
}

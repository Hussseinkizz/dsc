let users = [
  { username: 'user1', password: 'password1', name: 'John Doe' },
  { username: 'user2', password: 'password2', name: 'Jane Smith' },
  { username: 'user3', password: 'password3', name: 'Bob Johnson' },
  { username: 'user4', password: 'password4', name: 'John Bang' },
  { username: 'user5', password: 'password5', name: 'Jonathan Smith' },
  { username: 'user6', password: 'password6', name: 'Bill Johnson' },
  { username: 'user7', password: 'password7', name: 'Ardi Mutesasira' },
  { username: 'user8', password: 'password8', name: 'Eidris Elba' },
  { username: 'user9', password: 'password9', name: 'Kilian Mbape' },
  { username: 'usere', password: 'password6', name: 'Emmily Wenene' },
  { username: 'user', password: 'pass', name: 'Bill Smith' },
  { username: '2100102394', password: '2100102394', name: 'Lyadda Jonathan' },
];

function setUsers(newUsers) {
  users = newUsers;
}

export default users;
export { users, setUsers };

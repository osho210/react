import Profile from './components/Profile'

const Example = () => {
  const users = [
    {name: 'Geo', age: '18', hobbies:['sports','music']},
    {name: 'Tom', age: '25', hobbies:['movie','music']},
    {name: 'Lisa', age: '21', hobbies:['sports','travel','game']}
  ]
  const newUsers = users.map((user) => (
    <li key={user.name}>
      <Profile {...user} />
    </li>
  ))
  return (
    <>
      <ul>
        {newUsers}
      </ul>
    </>
  );
};

export default Example;

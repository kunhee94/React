import React,{useRef, useState, useMemo, useCallback} from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';



function countActiveUsers(users) {
  console.log('사용자수 세는중');
  return users.filter(user => user.active).length;
}




function App() {

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
      id:1,
      username: 'asdf',
      email:'fsdfds',
      active:true
    },
    {
      id:2,
      username: 'ffsd',
      email:'fdsrwe',
      active:false
    },
    {
      id:3,
      username: 'fdsgsd',
      email:'fdsgdsg',
      active:false
    }
  ]);

  const nextId = useRef(4);

  const onCreate =useCallback(() => {
    const user = {
      id:nextId.current,
      username,
      email
    };
    // setUsers([...users, user]);
    setUsers(users.concat(user));

    setInputs({
      username:'',
      email: '',
    });
    nextId.current += 1;
  }, [users, username, email]);

  const onRemove = useCallback(id =>{
    setUsers(users.filter(user=>user.id !== id));
  },[users]);

  const onToggle = useCallback(id=> {
    setUsers(users.map(user=> user.id ===id ? {...user, active: !user.active } : user))
  }, [users]);


  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <Wrapper>
      <Hello name='react' color='red' isSpecial={true}/>
      <Hello color='pink'/>
      <Counter />
      <InputSample />
      <CreateUser
      username={username}
      email={email}
      onChange={onChange}
      onCreate={onCreate}
      />
      <UserList users={users}
      onRemove={onRemove}
      onToggle={onToggle}
      />
      <div>활성사용자 수: {count}</div>
    </Wrapper>
  );
}

export default App;

import React, { useEffect } from "react";




function User({ user,onRemove, onToggle }){
  useEffect(()=>{
    console.log('값결정')
    console.log(user);
    return () => {
      console.log('user아직 안바뀜');
      console.log(user);
    };
  },[user]);

  return (
    <div>
      <b
      style={{cursor:'pointer',
            color:user.active ? 'green': 'black'}}
            onClick={()=> onToggle(user.id)}
      >{user.username}</b> <span>({user.email})</span>
      <button onClick={()=> onRemove(user.id)}>삭제</button>
    </div>
  )
}



function UserList({ users, onRemove, onToggle }) {

  return (
    <div>
      { users.map(user => (
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
}

export default UserList;
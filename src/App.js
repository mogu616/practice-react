// import logo from './logo.svg';
// import './App.css';
import React, {useState, useRef} from "react";
import Hello from "./Hello";
import Wrapper from './Wrapper';
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";


function App() {

  // useState 사용 (동적렌더링을 하기 위해 사용)
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  // 비구조화 할당
  const {username, email} = inputs;

  // 이벤트 발생시 발동함수 (여기서는 등록버튼 클릭시 발동)
  const onChange = e => {
    // 이벤트 타겟 비구조화 할당
    const {name, value} = e.target;
    // inputs 값 할당
    setInputs({
      ...inputs,
      // ex) email(name): jtk6747@gmail.com(value) 
      [name]: value
    });
  }

  // useState 사용
  const [users, setUsers] = useState([
    // useState에 미리 할당된 값들
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);

  // useRef 사용 (값이 바로 렌더링 되지 않고 컴포넌트랑 같이 관리됨)
  const nextId = useRef(4);

  // user등록을 위한 폼함수
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    //users 값 할당
    setUsers(users.concat(user));
    // 값 할당후 인풋 창 초기화
    setInputs({
      username: '',
      email: ''
    });
    // id를 순차적으로 올리기위해 useRef 값 +1
    nextId.current += 1;
  };

  // user삭제를 위한 함수 파라미터id
  const onRemove = id => {
    // users 값 재설정
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} />
    </>
  );
}

export default App;

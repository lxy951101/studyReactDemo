import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import { FriendStatus, Example} from './components/friendStatus.tsx';
// import { LikeButton } from './components/LikeButton.tsx';
// import { UserList } from './components/UserList.tsx';
// import './style/comment.css';
// import { CommentApp } from './components/CommentApp.tsx';
// import { AutoFocusInput } from './components/AutoFocusInput.tsx';
// import { Card } from './components/Card.tsx';
// import InputWithUserName from './components/InputWithUserName.tsx';
// import { Index } from './components/Index.tsx';
import { Counter } from './components/Counter.tsx';

// function App() {
//     const [open, setOpen] = useState(true);

//     return (
//         <div>
//             {
//                 open ?
//                 <FriendStatus friend={{id: 1}}/> 
//                 : null
//             }
//             <Example onClick={() => setOpen(!open)}/>
//         </div>
//     );
// }
// const users = [
//   { username: 'Jerry', age: 21, gender: 'male' },
//   { username: 'Tomy', age: 22, gender: 'male' },
//   { username: 'Lily', age: 19, gender: 'female' },
//   { username: 'Lucy', age: 20, gender: 'female' }
// ];

// const element = <Card>
//   <h2>Hello World!</h2>
//   <div>开源、免费、专业、简单</div>
//   订阅：<input />
// </Card>;

// const element = <CommentApp />
// const element = <InputWithUserName />
// const element = <Index />;
const element = <Counter />;
ReactDOM.render(element, document.getElementById('app'));
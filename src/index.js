import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FriendStatus, Example} from './components/friendStatus.tsx';

function App() {
    const [open, setOpen] = useState(true);

    return (
        <div>
            {
                open ?
                <FriendStatus friend={{id: 1}}/> 
                : null
            }
            <Example onClick={() => setOpen(!open)}/>
        </div>
    );
}

const element = <App/>;
ReactDOM.render(element, document.getElementById('app'));


<<<<<<< HEAD
console.log(5);
=======
console.log(4);
>>>>>>> 2

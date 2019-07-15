import * as React from 'react';

const {useState, useEffect} = React;

interface exampleProps {
    onClick: () => void;
};

export function Example(props: exampleProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
        return function cleanup():void {
            document.title = ``;
        }
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => {setCount(count + 1);props.onClick()}}>
                Click me
            </button>
        </div>
    );
}

const ChatAPI = {
    list: {},
    subscribeToFriendStatus(id: number, callback: (status:boolean|null) => void) {
        this.list[id] = 1;
        callback(true);
    },
    unsubscribeFromFriendStatus(id: number, callback: (status:boolean|null) => void) {
        delete this.list[id];
        callback(false);
    }
};

interface Friend {
    id: number;
}

interface FriendStatusProps {
    friend: Friend;
};

export function FriendStatus(props: FriendStatusProps) {
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status: boolean|null):void {
            setIsOnline(status);
        }

        ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
        // Specify how to clean up after this effect:
        return function cleanup() {
            ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
        };
    });

    if (isOnline === null) {
        return 'Loading...';
    }
    return isOnline ? 'Online' : 'Offline';
}
console.log(6);
console.log(7);
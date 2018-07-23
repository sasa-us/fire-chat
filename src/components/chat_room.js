import React from 'react';
import db from '../hoc/db';

const ChatRoom = props => {
    console.log('chat room props', props);
    
    const messageElements = props.messages.map( msg => {
        return (
            <li key={msg.id} className="collection-item row">
                <div className='col s1'>
                    <b>{msg.name}: </b>
                </div>

                <div className='col s1'>
                    {msg.message}
                </div>

            </li>
        )
    });
    return (
        <div>
            <h1 className="center">Chat Room</h1>
            <ul className="collection"> 
                { messageElements}
            </ul>
        </div>
    )
}

export default db(ChatRoom);
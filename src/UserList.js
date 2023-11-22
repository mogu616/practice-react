import React from "react";

function User({user, onRemove, id}) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
            <span>({id})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )
}

function UserList({users, onRemove}) {

    return (
        <div>
            {users.map(user => 
                <User user={user} key={user.id} onRemove={onRemove} id={user.id}/>
            )}

        </div>
    );
}

export default UserList;
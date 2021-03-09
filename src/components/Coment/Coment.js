import React from 'react';

const Coment = (props) => {
    const {name,email}=props.comment
    return (
        <div>
            <h1>this is comment name:{name}</h1>
            <p>{email}</p>
        </div>
    );
};

export default Coment;
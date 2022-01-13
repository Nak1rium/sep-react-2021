import React from 'react';

const Btn = ({onClick, title, id}) => {
    return (
        <button onClick={() => onClick(id)}>{title}</button>
    );
};

export default Btn;
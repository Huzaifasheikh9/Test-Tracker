import React from 'react'

const Button = ({title, color,onAdd}) => {
    return (
        <div>
            <button style={{backgroundColor: color}} className="btn" onClick={onAdd}>{title} </button>
        </div>
    )
}

export default Button

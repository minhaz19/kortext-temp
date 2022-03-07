import React from 'react'
import checkmark from '../../../assets/svgs/checkmark.svg';
const ListItem = props => {
    return (
        <li className="flex mt-2">
            <img className="flex-none w-3.5" alt="" src={`${props.src ? props.src : checkmark}`} />
            <span className="ml-2 truncate font-open-sans" title="Test with a very really">
            {props.children} </span>
        </li>
    )
}

export default ListItem

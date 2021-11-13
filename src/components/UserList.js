import React, { useState } from 'react'
import './UserList.css';

import {ReactComponent as DownArrow} from '../assets/down-arrow.svg';
import {ReactComponent as Trash} from '../assets/trash.svg';

function UserList({id, data}) {

    const [listOpen, setListOpen] = useState('closed');

    const handleDropdown = (e) => {
            listOpen === 'open' ? setListOpen('closed') : setListOpen('open');
    }

    return (
        <div id={id} className="userlist">
            <div className="userlist__avatar">{`${data.name.charAt(0).toUpperCase()}${data.name.split(" ")[1].charAt(0).toUpperCase()}`}</div>
            <div className="userlist__content">
                <p><b>{data.name}</b></p>
                <span>{data.designation} &#9679; {data.email}</span>
            </div>
            <div className="userlist__dropdown" id={id} onClick={handleDropdown}>
                {data.access === "0" ? 'Admin Role': data.access === "1" ? 'Edit Access': 'View Access'}
                &nbsp;&nbsp;<DownArrow />
                <div className={`dropdown__container ${listOpen}`} id={id}>
                    <div className="dropdown__container__list" value="0">Admin Role</div>
                    <div className="dropdown__container__list" value="1">Edit Access</div>
                    <div className="dropdown__container__list" value="2">View Access</div>
                </div>
            </div>
            <div className="userlist__delete" id={id}><Trash/></div>
        </div>
    )
}

export default UserList

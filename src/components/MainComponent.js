import React, { useState, useEffect } from 'react';
import UserList from './UserList';

import './MainComponent.css';

import {ReactComponent as DownArrow} from '../assets/down-arrow.svg';

function MainComponent({list, testList}) {

    const [testData, setTestData] = useState();
    const [data, setData] = useState();
    const [inputData, setInputData] = useState('');
    const [typeaheadState, setTypeaheadState] = useState('close');
    const [dropdownState, setDropdownState] = useState(false);
    const [addData, setAddData] = useState();

    // Setting the props(data received) into the current component state(both for dropdown and the list)
    useEffect(() => {
        setData(list);
        setTestData(testList);
        setAddData(testList[0]);
    }, [])


    const onHandleDropdownClick = (event) => {
        let elem =  event.currentTarget;
        if(elem.className.includes('maincomponent__dropdown__container')){
            let value = event.target.getAttribute('value') || event.target.parentNode.getAttribute('value');
            setAddData({...addData, access: value});
        }
    }

    const onCloseDropdown = (event) => {
        if(event.currentTarget.className === 'maincomponent__dropdown'){
            setDropdownState(!dropdownState);
        }
    }

    const onAddPeopleHandler = () => {
        setData([...list, addData])
        setInputData('')
    }

    //Typeahead implementation for Input 
    const onHandleInputChange = (event) => {
        setTypeaheadState('open')
        setInputData(event.target.value)
        let tempDataTyped = testData.filter(e => {
            if(e.name.toLowerCase().includes(event.target.value.toLowerCase()) || e.email.toLowerCase().includes(event.target.value.toLowerCase())) 
                return true;
            return false;
        })
        event.target.value.length > 0 ? setTestData(tempDataTyped): setTestData(testList)
    }

    // On Clikcing the element from Typeahead this is getting executed
    const onHandleInputClick = (event) => {
        let elem = event.target;
        let tempDataOnClickDropdown = testData.filter(e => {
            if(e.id === elem.id){
                return e;
            }
            return false;
        });
        setInputData(tempDataOnClickDropdown[0].name);
        setAddData(tempDataOnClickDropdown[0]);
        setTypeaheadState('close');
    }

    // Operations related to the rendered list
    const handleClick = (event) => {

        let elem = event.target;
        let targetId = '';

        // Delete Action
        if(elem.tagName === 'svg' || elem.tagName === 'path'){
            targetId = elem.tagName === 'svg'? event.target.parentNode.id : event.target.parentNode.parentNode.id;
            let tempDataAfterDeletion = data.filter(e => {
                if(e.id !== targetId) return true;
                return false;
            });
            setData(tempDataAfterDeletion);
        }

        // Dropdown Action: Setting Access
        if(elem.className === 'dropdown__container__list' && elem.getAttribute('value') != 'undefined'){
            let tempDataAfterAccessChange = data.map(e => {
                if(e.id === elem.parentNode.id) 
                    e.access = elem.getAttribute('value')
                return e;
            })
            setData(tempDataAfterAccessChange)
        }
    }

    return (
        <div className="maincomponent">
    
            <div className="maincomponent__header">
                <input 
                    placeholder="Add by Name or email" 
                    value={inputData} 
                    onChange={(e) => onHandleInputChange(e)}>
                </input>
                <div className="maincomponent__dropdown" onClick={onCloseDropdown}>
                    {addData?.access === "0" ? 'Admin Role': addData?.access === "1" ? 'Edit Access': 'View Access'}
                    &nbsp;&nbsp;<DownArrow />
                    <div className={`maincomponent__dropdown__container ${dropdownState ? 'd_open':'d_close'}`} id={addData?.id} onClick={onHandleDropdownClick}>
                        <div className="maincomponent__dropdown__container__list" value="0">
                            <b>Admin Role</b>
                            <span style={{fontSize: '10px'}}>Gives full access to the jobs and candidates</span>
                        </div>
                        <div className="maincomponent__dropdown__container__list" value="1">
                            <b>Edit Access</b>
                            <span style={{fontSize: '10px'}}>Gives access to edit the jobs and view the candidates</span>
                        </div>
                        <div className="maincomponent__dropdown__container__list" value="2">
                            <b>View Access</b>
                            <span style={{fontSize: '10px'}}>Gives access to only view the job and add comments</span>
                        </div>
                    </div>
                </div>
                <button onClick={onAddPeopleHandler}>Add People</button>
                <div 
                    className={`maincomponent__typeahead ${typeaheadState}`} 
                    onClick={onHandleInputClick}>
                    {
                        testData?.map(e => {
                            return (<div key={e.id} id={e.id} className="typeahead__list">
                                        <div id={e.id}><b id={e.id}>{e.name}</b></div>
                                        <span id={e.id}>{e.email}</span>
                                    </div>
                            )
                        })
                    }
                </div>
            </div>
    
            <div className="maincomponent__content" onClick={handleClick}>
                {
                    data?.map((data) => (
                        <UserList 
                            key={data.id} 
                            id={data.id} 
                            data={data} />
                    ))
                }
            </div>
    
        </div>
    )
}

export default MainComponent

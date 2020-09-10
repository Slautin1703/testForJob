import React, {useMemo} from 'react';
import People from "./People";
import {tableConfig} from "../PeoplesConstants";

const PeoplesTable = ({peoples,setSortedBy,isIncrease,setIsIncrease}) => {
    const peopleRows = useMemo(() => {
        return peoples.map((people) => <People people = {{
            id:people.id,
            firstName:people.firstName,
            lastName: people.lastName,
            email: people.email,
            phone: people.phone
        }}
        key = {people.email}
        tableConfig={tableConfig}/>)
    },[peoples]);

    const peoplesHeaders = useMemo(() => {

       return tableConfig.map((el) => <div key = {el.name}
                                           onClick={() => {
                                               setIsIncrease(!isIncrease)
                                               setSortedBy(el.sortedBy)}
                                           }
                                           style={{border: '1px solid black',width:el.width,cursor:'pointer'}}>{el.name}</div>)
    },[setSortedBy,isIncrease]);

    return (
        <div >
            <div style={{display:'flex',justifyContent: 'center'}}>
                {peoplesHeaders}
            </div>
            {peopleRows}
        </div>
    );
};

export default PeoplesTable;

import React, {useMemo} from 'react';
import People from "./People";
import {tableConfig} from "../PeoplesConstants";

const PeoplesTable = ({peoples}) => {
    const peopleRows = useMemo(() => {
        return peoples.map((people) => <People people = {{
            id:people.id,
            firstName:people.firstName,
            lastName: people.lastName,
            email: people.email,
            phone: people.phone
        }}
        tableConfig={tableConfig}/>)
    },[peoples]);

    const peoplesHeaders = useMemo(() => {
       return tableConfig.map((el) => <div style={{border: '1px solid black',width:el.width}}>{el.name}</div>)
    },[]);

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

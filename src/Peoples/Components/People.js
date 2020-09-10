import React from 'react';

const People = ({people,tableConfig}) => {
    const rowGenerate = (width,data) => {
        return <div style={{width}}>
            {data}
        </div>
    };
    return (
        <div style={{display:'flex',justifyContent:'center'}}>
            {tableConfig.map((el) => rowGenerate(el.width,people[el.name]))}
        </div>
    );
};

export default People;

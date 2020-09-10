import React, {useEffect, useState} from 'react';
import {getPeoplesAPI} from "./PeoplesAPI";
import PeoplesTable from "./Components/PeoplesTable";

const PeoplesContainer = () => {
    const [isBigData,setIsBigData] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const [peoples,setPeoples] = useState([]);
    const [sortedBy,setSortedBy] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        getPeoplesAPI().then(data => {
            setIsLoading(false)
            setPeoples(data)
        })
    },[isBigData]);


    useEffect(() => {
        if(sortedBy === 0) {
            const sorted = peoples.sort((a,b) => a.id - b.id);
            console.log(sorted)
            setPeoples(sorted)
        }
    },[sortedBy,peoples]);

    return (
        <div>
            <button onClick={() => setIsBigData(!isBigData)} disabled={isLoading}>
                {isBigData ? 'Показать с маленьким обьемом ': 'Показать с большим обьемом'}
            </button>
            <PeoplesTable peoples ={peoples} setSortedBy ={setSortedBy} />
        </div>
    );
};

export default PeoplesContainer;

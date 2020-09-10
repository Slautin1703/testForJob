import React, {useCallback, useEffect, useState} from 'react';
import {getPeoplesAPI} from "./PeoplesAPI";
import PeoplesTable from "./Components/PeoplesTable";

const PeoplesContainer = () => {
    const [isBigData,setIsBigData] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const [peoples,setPeoples] = useState([]);
    const [sortedBy,setSortedBy] = useState({});
    const [isIncrease,setIsIncrease] = useState(false)


    useEffect(() => {
        setIsLoading(true)
        getPeoplesAPI().then(data => {
            setIsLoading(false)
            setPeoples(data)
        })
    },[isBigData]);


    useEffect(() => {
        if(sortedBy === 0) {
            const sorted = isIncrease ? peoples.sort((a,b) => a.id - b.id).slice() : peoples.sort((a,b) => b.id - a.id).slice();
            setPeoples(sorted)
        }
    },[sortedBy,isIncrease]);

    return (
        <div>
            <button onClick={() => setIsBigData(!isBigData)} disabled={isLoading}>
                {isBigData ? 'Показать с маленьким обьемом ': 'Показать с большим обьемом'}
            </button>
            <PeoplesTable peoples ={peoples}
                          setSortedBy ={setSortedBy}
                          isIncrease = {isIncrease}
                          setIsIncrease = {setIsIncrease}
            />
        </div>
    );
};

export default PeoplesContainer;

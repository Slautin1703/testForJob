import React, {useCallback, useState} from 'react';
import {getPeoplesAPI} from "./PeoplesAPI";

const PeoplesContainer = () => {
    const [isBigData,setIsBigData] = useState(false);
    const [isLoading,setIsLoading] = useState(false)
    const [peoples,setPeoples] = useState([])

    const getPeoples =  useCallback(() => {
        setIsBigData(!isBigData)
        setIsLoading(true)
        getPeoplesAPI().then(data => {
            setIsLoading(false)
            setPeoples(data)
        })
    },[isBigData]);

    return (
        <div>
            <button onClick={getPeoples} disabled={isLoading}>
                {isBigData ? 'Показать с маленьким обьемом ': 'Показать с большим обьемом'}
            </button>
            <PeoplesTable />
        </div>
    );
};

export default PeoplesContainer;

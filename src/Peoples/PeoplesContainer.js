import React, {useEffect, useState} from 'react';
import {getPeoplesAPI} from "./PeoplesAPI";
import PeoplesTable from "./Components/PeoplesTable";

const PeoplesContainer = () => {
    const [isBigData,setIsBigData] = useState(false);
    const [isLoading,setIsLoading] = useState(false)
    const [peoples,setPeoples] = useState([])

    useEffect(() => {
        setIsLoading(true)
        getPeoplesAPI().then(data => {
            setIsLoading(false)
            setPeoples(data)
        })
    },[isBigData]);

    return (
        <div>
            <button onClick={() => setIsBigData(!isBigData)} disabled={isLoading}>
                {isBigData ? 'Показать с маленьким обьемом ': 'Показать с большим обьемом'}
            </button>
            <PeoplesTable peoples ={peoples} />
        </div>
    );
};

export default PeoplesContainer;

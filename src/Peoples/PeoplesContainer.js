import React, {useCallback, useEffect, useState} from 'react';
import {getPeoplesAPI} from "./PeoplesAPI";
import PeoplesTable from "./Components/PeoplesTable";
import {sortForObj} from "../helpers";
import {SORTED_BY_KEY} from "./PeoplesConstants";

const PeoplesContainer = () => {
    const [isBigData,setIsBigData] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const [peoples,setPeoples] = useState([]);
    const [sortedBy,setSortedBy] = useState(null);
    const [isIncrease,setIsIncrease] = useState(false);
    const [filter,setFilter] = useState('');
    const [filteredPeoples, setFilteredPeoples] = useState([])

    useEffect(() => {
        setIsLoading(true)
        getPeoplesAPI().then(data => {
            setIsLoading(false)
            setPeoples(data)
        })
    },[isBigData]);


    useEffect(() => {
        if (sortedBy !== null) {
            const sorted = sortForObj(peoples,isIncrease,SORTED_BY_KEY[sortedBy]).slice();
            setPeoples(sorted)
        }
    },[sortedBy, isIncrease]);

    return (
        <div>
            <button onClick={() => setIsBigData(!isBigData)} disabled={isLoading}>
                {isBigData ? 'Показать с маленьким обьемом ': 'Показать с большим обьемом'}
            </button>
            <input type="text" name="" id="" value={filter} onChange={(e) => {setFilter(e.target.value)}}/>
            <button onClick={() => {
                const peoplesByFilter = peoples.filter((el) => el.id.toString().toLowerCase().indexOf(filter.toLowerCase()) === 0)
                setFilteredPeoples(peoplesByFilter)
            }}>Найти</button>
            <PeoplesTable peoples ={peoples}
                          setSortedBy ={setSortedBy}
                          isIncrease = {isIncrease}
                          setIsIncrease = {setIsIncrease}
                          filteredPeoples = {filteredPeoples}
            />
        </div>
    );
};

export default PeoplesContainer;

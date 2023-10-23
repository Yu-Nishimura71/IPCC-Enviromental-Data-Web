import React, { useState, useEffect } from "react";
import TempCard from "./components/TempCard";

function TempData() {

    const [tempData, setTemp] = useState({});
    const [rawData, setRaw] = useState({ rawTemperatureData: [] });
    const [countryId, setCountryID] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5256/api/B_Countries/CountryTemperatureDetail/${countryId}`)
            .then(response => response.json())
            .then(data => {
                console.log("data", data);
                setTemp(data);
                setRaw(data.rawTemperatureData)
                console.log("raw data", data.rawTemperatureData);
            })
    }, [countryId]);

    return (
        <div>
            <TempCard
                maxYear={tempData.maxYear}
                minYear={tempData.minYear}
                rawData={rawData} 
            />
        </div>
    )
}

export default TempData
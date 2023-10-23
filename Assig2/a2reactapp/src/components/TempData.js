import React, { useState, useEffect } from "react";
import TempCard from "./TempCard";
import { useParams } from "react-router-dom";

function TempData() {

    let params = useParams();

    const [tempData, setTemp] = useState({});
    const [rawData, setRaw] = useState([]);
    const [countryId, setCountryID] = useState(params.countryId);

    useEffect(() => {
        fetch(`http://localhost:5256/api/B_Countries/CountryTemperatureDetail/${countryId}`)
            .then(response => {
                if (!response.ok) {
                    console.error(`Server responded with status ${response.status}: ${response.statusText}`);
                    throw new Error('Network response was not ok');
                }
                return response.text().then(text => {
                    if (text) {
                        return JSON.parse(text);
                    }
                    return {};
                });
            })
            .then(data => {
                console.log("data", data);
                setTemp(data);
                setRaw(data.rawTemperatureData || []);
                console.log("raw data", data.rawTemperatureData);
            })
            .catch(error => {
                console.error("There was an issue fetching the data:", error.message);
            });
    }, [countryId]);

    return (
        <div>
            <TempCard
                maxYear={tempData.maxYear}
                minYear={tempData.minYear}
                rawTemperatureData={rawData} 
            />
        </div>
    )
}

export default TempData
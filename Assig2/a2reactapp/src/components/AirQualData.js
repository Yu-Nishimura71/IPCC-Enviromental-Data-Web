import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AirQualCard from "./AirQualCard";

function AirQualData() {

    let params = useParams();

    const [cityID, setCityId] = useState(params.cityID);
    const [cityAirData, setCityData] = useState({ theCityDetail: {} })
    const [airData, setAirData] = useState({ theCityAirQualityData: [] });

    useEffect(() => {
        fetch(`http://localhost:5256/api/C_Cities/GetAirQualityData/${cityID}`)
            .then(response => response.json())
            .then(data => {
                setCityData(data.theCityDetail)

                if (Array.isArray(data.theCityAirQualityData)) {
                    setAirData(data.theCityAirQualityData)
                } else {
                    console.error('Data fetched is not an array:', data.theCityAirQualityData);
                    setAirData([]);
                }
                
            })
            .catch(err => {
                console.log(err);
            });
    }, [cityID]);

    return (
        <div>
            <AirQualCard
                airData={airData}
                cityData={cityAirData}
            />
        </div>
    )
}
export default AirQualData
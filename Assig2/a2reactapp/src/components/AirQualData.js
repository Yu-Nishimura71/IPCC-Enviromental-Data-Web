import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import CityCard from "./CityCard";

function AirQualData() {

    let params = useParams();

    const [cityId, setCityId] = useState(params.cityId);
    const [cityData, setCityData] = useState({ theCityDetail: {} })
    const [airData, setAirData] = useState({ theCityAirQualityData: [] });

    useEffect(() => {
        fetch(`http://localhost:5256/api/C_Cities/GetAirQualityData/${cityId}`)
            .then(response => response.json())
            .then(data => {
                setCityData(data.theCityDetail)
                setAirData(data.theCityAirQualityData)
            })
            .catch(err => {
                console.log(err);
            });
    });

    return (
        <div>
            <CityCard
                airData={airData}
                cityData={cityData}
            />
        </div>
    )
}
export default AirQualData
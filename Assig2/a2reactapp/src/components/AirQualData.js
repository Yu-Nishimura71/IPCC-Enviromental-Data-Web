import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function AirQualData() {

    let params = useParams();

    const [cityId, setCityId] = useState(params.cityId);
    const [airData, setAirData] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5256/api/C_Cities/GetAirQualityData/${cityId}`)
            .then(response => response.json())
            .then(data => setAirData(data))
            .catch(err => {
                console.log(err);
            });
    });

    return (
    )
}
export default AirQualData
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EmiData() {

    let params = useParams();

    const [emiData, setEmiData] = useState([]);
    const [emiEleData, setEmiEleData] = useState([]);
    const [countryId, setCountryId] = useState(params.countryId);
    const [elementId, setElementId] = useState(params.elementId);

    useEffect(() => {
        fetch(`http://localhost:5256/api/B_Countries/SummaryCountryEmissionData/${countryId}`)
            .then(response => response.json())
            .then(data => setEmiData(data))
            .catch(err => {
                console.log(err);
            });
    }, [countryId]);

    useEffect(() => {
        fetch(`http://localhost:5256/api/B_Countries/CountryEmissionData/${countryId}?${elementId}`)
            .then(response => response.json())
            .then(data => setEmiEleData(data))
            .catch(err => {
                console.log(err);
            })
    }, [countryId, elementId]);

    return (
        <div>
        </div>
    )
}

export default EmiData
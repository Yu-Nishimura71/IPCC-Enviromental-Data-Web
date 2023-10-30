import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EmiCard from "./EmiCard";


function EmiData() {

    let params = useParams();

    const [emiData, setEmiData] = useState([]);
    const [emiEleData, setEmiEleData] = useState([]);
    const [countryId, setCountryId] = useState(params.countryId);
    const [elementId, setElementId] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5256/api/B_Countries/SummaryCountryEmissionData/${countryId}`)
            .then(response => response.json())
            .then(data => {
                console.log("data", data);
                setEmiData(data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [countryId]);

    useEffect(() => {
        if (elementId === '') {
            console.log("elementId not provided. Fetching SummaryCountryEmissionData.");
            console.log(elementId);
        }
        else {
            fetch(`http://localhost:5256/api/B_Countries/CountryEmissionData/${countryId}?${elementId}`)
                .then(response => response.json())
                .then(data => setEmiEleData(data))
                .catch(err => {
                    console.log(err);
                });
        }
    }, [countryId, elementId])

    function searchQuery(evt) {
        const value = document.querySelector('[name = "elementId"]').value;
        setElementId(`elementId=${value}`);
    }

    return (
        <div>
            <div className="row justify-content-start mb-3">
                <div className="col-3">
                    <input type="text" name="elementId" className="form-control" placeholder="Type elementId" />
                </div>
                <div className="col text-left">
                    <button type="button" className="btn btn-primary" onClick={searchQuery}>Search</button>
                </div>
            </div>
            <EmiCard
                emiData={emiData}
                emiEleData={emiEleData}
            />
        </div>
    )
}

export default EmiData
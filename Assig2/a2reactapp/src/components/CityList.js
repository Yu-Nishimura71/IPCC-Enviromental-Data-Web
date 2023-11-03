import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CityCard from "./CityCard";

function CityList() {

    let params = useParams();

    const [cityData, setCityData] = useState([]);
    const [countryId, setCountryId] = useState(params.countryId);
    const [searchText, setSearchText] = useState('');
    
    useEffect(() => {
        fetch(`http://localhost:5256/api/C_Cities/${countryId}?${searchText}`)
            .then(response => response.json())
            .then(data => {
                setCityData(data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [countryId, searchText]);

    function searchQuery(evt) {
        const value = document.querySelector('[name = "searchText"]').value;
        setSearchText(`searchText=${value}`);
    }

    return (
        <div>
            <div className="row justify-content-start mb-3">
                <div className="col-4">
                    <input type="text" name="searchText" className="form-control" placeholder="Search City"/>
                </div>
                <div className="col-3">
                    <button type="button" className="btn btn-primary" onClick={searchQuery}>Search</button>
                </div>
            </div>
            <div>
                {cityData.length > 0 ? (
                    <CityCard
                        cityData={cityData}
                    />
                ) : (
                    <h6>No countries found for the given name.</h6>
                )}
            </div>
        </div>
    )
}

export default CityList
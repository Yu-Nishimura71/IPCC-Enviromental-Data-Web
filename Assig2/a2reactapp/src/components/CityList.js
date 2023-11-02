import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CityList() {

    let params = useParams()

    const [countryId, setCountryData] = useState(params.countryId);
    const [searchText, setSearchText] = useState('');


    useEffect(() => {
        fetch(`http://localhost:5256/api/C_Cities/${countryId}?${searchText}`)
            .then(response => response.json())
            .then(data => setCountryData(data))
            .catch(err => {
                console.log(err);
            });
    }, [countryId, searchText]);


}

export default CityList
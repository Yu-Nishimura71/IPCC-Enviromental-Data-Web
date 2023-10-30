import React, { useState, useEffect } from 'react';
import RegionCard from "./RegionCard";

function RegionList() {

    const [cardData, setState] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5256/api/A_Regions`)
            .then(response => response.json())
            .then(data => setState(data))
            .catch(err => {
                console.log(err);
            });
    });

    return (
        <div className="container">
            <div className="row">
                {cardData.map((obj) => (
                    <RegionCard
                        key={obj.regionId}
                        regionId={obj.regionId}
                        regionName={obj.regionName}
                        imageUrl={obj.imageUrl}
                        countryCount={obj.countryCount}
                    />
                )
                )
                }
            </div>
        </div>
    )
}
export default RegionList
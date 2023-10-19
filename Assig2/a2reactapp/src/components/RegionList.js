import React, { useState, useEffect } from 'react';
import CardRegion from "./CardRegion1";

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
        <div id="cardList" className="row">
            {cardData.map((obj) => (
                <CardRegion
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
    )
}
export default RegionList
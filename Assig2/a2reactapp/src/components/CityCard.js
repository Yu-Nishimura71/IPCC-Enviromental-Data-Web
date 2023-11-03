import { Link } from "react-router-dom";

const CityCard = ({cityData}) => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="table table-striped">
                    <thead>
                        <tr>
                            <th>CityName</th>
                            <th>Air quality</th>
                            <th>Record count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cityData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.cityName}</td>
                                <td>{data.airQualityYearRange[0]} - {data.airQualityYearRange[1]}</td>
                                <td>{data.recordCount}</td>
                            </tr>
                        ))}
                    </tbody>
                </div>
            </div>
        </div>
    )
}

export default CityCard
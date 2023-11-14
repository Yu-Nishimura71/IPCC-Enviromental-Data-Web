import { Link, useLocation } from "react-router-dom";

const CityCard = ({ cityData }) => {
    const location = useLocation();
    const { RegionId } = location.state;

    console.log(cityData)
    console.log(Array.isArray(cityData))
    return (
        <div className="card">
            <Link to={"/Country/" + RegionId}>Country List</Link>
            <div className="card-body">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>CityName</th>
                            <th>Air quality</th>
                            <th>Record count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(cityData) && cityData.map((data, index) => (
                            <tr key={index}>
                                <td>
                                    <Link to={"/AirQualityData/" + data.cityID}>
                                        {data.cityName}
                                    </Link>
                                </td>
                                <td>{data.airQualityYearRange[0]} - {data.airQualityYearRange[1]}</td>
                                <td>{data.recordCount}</td>
                                <td>{data.cityID}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CityCard
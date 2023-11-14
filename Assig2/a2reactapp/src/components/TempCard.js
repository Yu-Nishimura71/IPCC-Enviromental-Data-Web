import { Link, useLocation } from "react-router-dom";
import Country from "../routes/Country";

const TempCard = ({ maxYear, minYear, rawTemperatureData = [] }) => {
    const location = useLocation();
    const { RegionId } = location.state;


    return (
        <div className="card">
            <Link to={"/Country/" + RegionId}>Country List</Link>
            <h2 className="card-header">
                Temperature Data from {minYear} to {maxYear}
            </h2>
            <div className="card-body">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Unit</th>
                            <th>Change</th>
                            <th>Value</th>
                            <th>Regional Avg</th>
                            <th>Regional Min</th>
                            <th>Regional Max</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rawTemperatureData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.theCountryTempData.year}</td>
                                <td>{data.theCountryTempData.unit}</td>
                                <td>{data.theCountryTempData.change}</td>
                                <td>{data.theCountryTempData.value}</td>
                                <td>{data.regionalAvg}</td>
                                <td>{data.regionalMin}</td>
                                <td>{data.regionalMax}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TempCard

const AirQualCard = ({ cityData, airData }) => {
    console.log(airData);
    if (!Array.isArray(airData)) {
        return <div>Loading or error...</div>
    }
    return (
        <div className="card">
            <div className="row"> {/* Removed the centering class */}
                <div className="col-3"> {/* This will size the image container to col-4 */}
                    {/* Use Bootstrap's img-fluid class to make the image responsive within the col-4 div */}
                    <img className="card-img img-fluid" src={cityData.imageUrl} alt={cityData.cityName} style={{ height: "200px" }} />
                </div>
            </div>
            <div className="card-title">{cityData.cityName}</div>
            {cityData.iso3 === "" ? (
                <h6 className="" style={{ padding: "5px 10px", borderRadius: "5px" }}>{cityData.countryName}</h6>
            ) : (
                    <h6 className="" style={{ padding: "5px 10px", borderRadius: "5px" }}>{cityData.countryName} ({cityData.iso3})</h6>
            )}
            <div className="card-body">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Annual Mean</th>
                            <th>Temporal Coverage 1</th>
                            <th>Annual Mean PM10</th>
                            <th>Annual Mean ug/m3</th>
                            <th>Temporal Coverage 2</th>
                            <th>Annual Mean PM2.5</th>
                            <th>Reference</th>
                            <th>Station Type</th>
                            <th>Station Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {airData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.year}</td>
                                <td>{data.theAirQualityData.annualMean}</td>
                                <td>{data.theAirQualityData.temporalCoverage1}</td>
                                <td>{data.theAirQualityData.annualMeanPm10}</td>
                                <td>{data.theAirQualityData.annualMeanUgm3}</td>
                                <td>{data.theAirQualityData.temporalCoverage2}</td>
                                <td>{data.theAirQualityData.annualMeanPm25}</td>
                                <td>{data.theAirQualityData.reference}</td>
                                <td>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Station type</th>
                                                <th>Station number</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.dataStationDetail.map((data, index) => (
                                                <tr key={index}>
                                                    <td>{data.stationType}</td>
                                                    <td>{data.stationNumber}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </td>
                                <td>{}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default AirQualCard

const AirQualCard = ({ cityData, airData }) => {
    console.log(airData);
    if (!Array.isArray(airData)) {
        return <div>Loading or error...</div>
    }
    return (
        <div className="card">
            <div className="row">
                <div className="col-3"> 
                    <img className="card-img img-fluid" src={cityData.imageUrl} alt={cityData.cityName} style={{ height: "200px" }} />
                </div>
                <div className="col-9">
                    <h1>{cityData.cityName}</h1>
                    {cityData.iso3 === "" ? (
                        <h6 className="" style={{ padding: "5px 10px", borderRadius: "5px" }}>{cityData.countryName}</h6>
                    ) : (
                        <h6 className="" style={{ padding: "5px 10px", borderRadius: "5px" }}>{cityData.countryName} ({cityData.iso3})</h6>
                    )}
                    <p>{cityData.regionName}</p>
                    <table className="table table-striped">
                        <thead>
                            <th>Avg</th>
                            <th>Max</th>
                            <th>Min</th>
                        </thead>
                    </table>
                </div>
                
            </div>
            
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
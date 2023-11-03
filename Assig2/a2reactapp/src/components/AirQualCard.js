
const AirQualCard = ({ cityData, airData }) => {
    console.log(airData);
    return (
        <div className="card">
            <div className="card-body">
                <div className="table table-striped">
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
                            </tr>
                        ))}
                    </tbody>
                </div>
            </div>
        </div>
    )
}
export default AirQualCard
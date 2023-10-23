const TempCard = ({ maxYear, minYear, rawTemperatureData = [] }) => {
    return (
        <div className="card">
            <div className="card-header">
                Temperature Data from {minYear} to{maxYear}
            </div>
            <div className="card-body">
                <table>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Country Name</th>
                            <th>Unit</th>
                            <th>Change</th>
                            <th>Value</th>
                            <th>Regional Avg</th>
                            <th>Regional Min</th>
                            <th>Regional Max</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rawTemperatureData && rawTemperatureData.map((data, index) => (
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
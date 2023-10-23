const TempCard = (maxYear, minYear, rawData) => {
    return (
        <div className="card">
            <div className="card-header">
                Temperature Data from {minYear} to{maxYear}
            </div>
            <div className="card-body">
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
            </div>
        </div>
    )
}

export default TempCard
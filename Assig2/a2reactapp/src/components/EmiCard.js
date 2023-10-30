const EmiCard = ({ emiData =[], emiEleData =[], selectElement }) => {
    return(
        <div className="card">
            <div className="card-body">
                <h4>Emission Data</h4>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Element</th>
                            <th>TotalValue</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emiData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.year}</td>
                                <td>{data.element}</td>
                                <td>{data.totalValue}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h4>Specific element emission data</h4>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Element</th>
                            <th>TotalValue</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emiEleData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.year}</td>
                                <td>{data.itemName}</td>
                                <td>{data.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EmiCard
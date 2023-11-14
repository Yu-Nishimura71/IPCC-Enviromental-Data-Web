import { Link, useLocation } from "react-router-dom";

const EmiCard = ({ emiData = [], emiEleData = [], selectElement }) => {
    const location = useLocation();
    const { RegionId } = location.state;

    return(
        <div className="card">
            <Link to={"/Country/" + RegionId} className="col">Back to Country</Link>
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
                        {emiEleData.length > 0 ? (
                            emiEleData.map((data, index) => (
                                <tr key={index}>
                                    <td>{data.year}</td>
                                    <td>{data.itemName}</td>
                                    <td>{data.value}</td>
                                </tr>
                            ))
                        ) : (
                            <p className="text-center">No elements emission data found for the given element.</p>
                        )}
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EmiCard
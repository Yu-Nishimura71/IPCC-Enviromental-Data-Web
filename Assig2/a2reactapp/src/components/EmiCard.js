import { Link } from "react-router-dom";

const EmiCard = ({ emiData = [], emiEleData = [] }) => {
    return(
        <div className="card">
            <Link to="/Country">Country List</Link>

            <div className="card-body">
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
import CardRegion from "../components/RegionList";

const Region = ({ }) => { 
    return (
        <div>
            <h2 className="text-center">
                Region Lists
            </h2>
            <hr />
            <div className="row">
                <CardRegion/>
            </div>
        </div>
    )
}

export default Region
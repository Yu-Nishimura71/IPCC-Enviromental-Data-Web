import RegionList from "../components/RegionList";

const Region = ({ }) => { 
    return (
        <div>
            <h2 className="text-center">
                Region Lists
            </h2>
            <hr />
            <div className="row">
                <RegionList/>
            </div>
        </div>
    )
}

export default Region
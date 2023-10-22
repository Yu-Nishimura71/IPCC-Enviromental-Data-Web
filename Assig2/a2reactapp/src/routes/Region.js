import RegionList from "../components/RegionList";

const Region = ({ }) => { 
    return (
        <div>
            <h2 className="text-center">
                Region Lists
            </h2>
            <h6>
                Click on a card to see a list of countries in that region
            </h6>
            <hr />
            <div className="row">
                <RegionList/>
            </div>
        </div>
    )
}

export default Region
import CountryList from "../components/CountryList";

const Country = ({ }) => {
    return (
        <div>
            <h2 className="text-center">
                Country Lists
            </h2>
            <h6>
                Click on a card to see a list of cities in that country
            </h6>
            <hr />
            <div className="row">
                <CountryList />
            </div>
        </div>
    )
}

export default Country
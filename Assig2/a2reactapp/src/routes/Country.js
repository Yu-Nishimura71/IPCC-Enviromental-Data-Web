import CountryList from "../components/CountryList";

const Country = ({ }) => {
    return (
        <div>
            <h2 className="text-center">
                Country Lists
            </h2>
            <hr />
            <div className="row">
                <CountryList />
            </div>
        </div>
    )
}

export default Country
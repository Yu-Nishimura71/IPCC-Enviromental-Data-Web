import CountryCard from "../components/CountryCard";

const Country = ({ }) => {
    return (
        <div>
            <h2 className="text-center">
                Country Lists
            </h2>
            <hr />
            <div className="row">
                <CountryCard />
            </div>
        </div>
    )
}

export default Country
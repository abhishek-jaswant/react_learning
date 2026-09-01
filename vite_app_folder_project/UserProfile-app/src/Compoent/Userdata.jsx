import UserCard from "./UserCard"
import "../App.css"

//<Userdata loading={loading} error={error} data={data} search={search} searchResults={searchResults} setSearch={setSearch}  handleSearch={handleSearch} />
const Userdata = ({loading, error, data, search, searchResults, setSearch, handleSearch}) => {
    return (
        <>
            <header className="header">
                <h1>User Profile</h1>
                    <div className="search">
                    <input type="text" placeholder='Search by name' value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button onClick={handleSearch}>Search</button>
                   </div>

                
            </header>

            <main className="main">
                {loading && <p className="loading">Loading...</p>}
                {error && <p className="error">{error}</p>}
                {(searchResults.length > 0 ? searchResults : data).map((item) => ( <UserCard className="Users-card" user={item} /> ))}


            </main>


        </>
    )
}

export default Userdata
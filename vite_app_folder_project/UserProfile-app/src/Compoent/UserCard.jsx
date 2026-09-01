
import "../App.css"
function UserCard({ user }) {
    //name,email,city
    return (
        <>
            <div className="card">
                <h2> User Name: {user.name}</h2>
                <p> Email: {user.email}</p>
                <p> City: {user.address.city}</p>
            </div>
        </>
    )
}

export default UserCard
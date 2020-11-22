import React from "react"
import { useHistory } from "react-router";

function Home(){

    const username = sessionStorage.getItem("manufac-username")

    const history = useHistory()

    const handleLogout = (e) => {
        e.preventDefault();
        history.replace("/login");
    }

    return(
        <div>
            <h1>Welcome {username}</h1>
            <br />
            <p onClick={handleLogout}>Logout</p>
        </div>
    )
}

export default Home;
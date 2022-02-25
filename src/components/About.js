import React from "react";

function About({about, blogLogo = "https://via.placeholder.com/215"}){
    return(
        <aside>
            <img src={blogLogo} alt="blog logo"/>
            <p>{about}</p>
        </aside>
    )
}

export default About;
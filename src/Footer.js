import React from "react"
import "./Footer.css";


//Creates footer
function Footer(){
    return(
        <footer>
            <ul className="information">
                <a className="text" href=""><li>Audio Description</li></a>
                <a className="text" href=""><li>Investor Reletions</li></a>
                <a className="text" href=""><li>Legal Notices</li></a>
            </ul> 
            <ul className="information">
                <a className="text" href=""><li>Help Centre</li></a>
                <a className="text" href=""><li>Jobs</li></a>
                <a className="text" href=""><li>Cookie Preferences</li></a>
            </ul> 
            <ul className="information">
                <a className="text" href=""><li>Gift Cards</li></a>
                <a className="text" href=""><li>Terms of Use</li></a>
                <a className="text" href=""><li>Corporate Information</li></a>
            </ul> 
            <ul className="information">
                <a className="text" href=""><li>Media Centre</li></a>
                <a className="text" href=""><li>Privacy</li></a>
                <a className="text" href=""><li>Contact Us</li></a>
            </ul> 
            <br></br><br></br>
            <div id="copyright"> 2022©Netflix, Hugo de Heus</div><br></br><br></br>
        </footer>
    )
}
export default Footer
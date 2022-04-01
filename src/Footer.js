import React from "react"
import "./Footer.css";



function Navbar(){
     function myFunction() {
        document.getElementById("button").innerHTML = "128-146";
    }
    
    return(
        <footer>
            <div id="links">
                <a class="nothing" href="https://www.facebook.com/NetflixNederland"><img class="socials facebook" src={require('./img/facebook.png')} alt="Netflix Logo"></img></a>
                <a class="nothing" href="https://www.instagram.com/NetflixNL/"><img class="socials" src={require('./img/instagram.png')} alt="Netflix Logo"></img></a>
                <a class="nothing" href="https://twitter.com/NetflixNL"><img class="socials" src={require('./img/twitter.png')} alt="Netflix Logo"></img></a>
                <a class="nothing" href="https://www.youtube.com/user/netflixbenelux"><img class="socials" src={require('./img/youtube.png')} alt="Netflix Logo"></img></a>
            </div>

            <ul class="information">
                <a class="text" href=""><li>Audio Description</li></a>
                <a class="text" href=""><li>Investor Reletions</li></a>
                <a class="text" href=""><li>Legal Notices</li></a>
            </ul> 
            <ul class="information">
                <a class="text" href=""><li>Help Centre</li></a>
                <a class="text" href=""><li>Jobs</li></a>
                <a class="text" href=""><li>Cookie Preferences</li></a>
            </ul> 
            <ul class="information">
                <a class="text" href=""><li>Gift Cards</li></a>
                <a class="text" href=""><li>Terms of Use</li></a>
                <a class="text" href=""><li>Corporate Information</li></a>
            </ul> 
            <ul class="information">
                <a class="text" href=""><li>Media Centre</li></a>
                <a class="text" href=""><li>Privacy</li></a>
                <a class="text" href=""><li>Contact Us</li></a>
            </ul> 
            <button id="button" onClick={myFunction}>Click me</button>
            <div id="copyright"> 2022©Netflix, Hugo de Heus</div><br></br><br></br>
        </footer>
    )
}
export default Navbar
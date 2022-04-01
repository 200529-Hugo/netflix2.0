import React, { useState, useEffect }from "react"
import "./Navbar.css";
import { Link } from 'react-router-dom'


function Navbar(){
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY>100){
                handleShow(true)
            }else handleShow(false)
        })
            return() => {
                window.removeEventListener("scroll");
        };
    }, []);
    return(
        <div class={`navbar ${show && "navbarBlack"}`}>
            <img class="logo" src={require('./logo.png')} alt="Netflix Logo"></img>
            <img class="user" src={require('./user.jpg')} alt="Netflix Logo"></img>

            <div class="dropdown">
                <div class="dropbtn"><i class="fas fa-file-code"></i>Browse
                    <i class="fa fa-caret-down"></i>
                </div>
                <div class="dropdown-content">
                    <a to="/home">home</a>
                    <a href="/series">series</a>
                    <a href="/films">Films</a>
                    <a href="/plugins">Plugins</a>
                    <a href="/new_populair">New & populair</a>
                    <a href="my_list">My list</a>
                </div>
            </div>
            <nav>
            <a href="/home">
                    <li>Home</li>
                </a>
                <a href="/series">
                    <li>series</li>
                </a>
                <a href="/films">
                    <li>Films</li>
                </a>
                <a href="/plugins">
                    <li>Plugins</li>
                </a>
                <a href="/new_populair">
                    <li>New & populair</li>
                </a>
                <a href="my_list">
                    <li>My list</li>
                </a>
            </nav>
        </div>
    )
}
export default Navbar
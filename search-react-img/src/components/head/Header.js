import React from 'react';
import './Header.css';
import Search from "./form/Search";

// const Header = (props) => {
const Header = ({inpValue, submitForm, setInpValue}) => {
    return (

        <header className="header">
            <div className="header-title">
                <h1>Pixabay search images</h1>
            </div>
            <div className="header-content">
                <div className="header-content_banner">
                    <a href="https://pixabay.com/" target="_blank">
                        <img src="https://pixabay.com/static/img/public/leaderboard_a.png" alt="Pixabay"/>
                    </a>
                </div>
                <div className="header-content_search">
{/*<Search inpValue={inpValue} submitForm={submitForm} setInpValue={setInpValue}/>*/}
<Search inpValue={inpValue} submitForm={submitForm} setInpValue={setInpValue}/>
                </div>
            </div>
        </header>
)
};

export default Header;
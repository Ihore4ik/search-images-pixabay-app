import React from 'react';
import './Search.css';

const Search = ({inpValue, submitForm, setInpValue}) => {
    // console.log(inpValue,'inpValue')
    // console.log(submitForm,'submitForm')
    // console.log(setInpValue,'setInpValue')
    return(
        <form className="search" onSubmit={(e)=>{submitForm(e)}}>
            <input type="text" placeholder="Search..."
                   value={inpValue}
                   onChange={(event => {setInpValue(event)})}
            />
            <input type="submit"/>
        </form>
    )
};

export default Search;
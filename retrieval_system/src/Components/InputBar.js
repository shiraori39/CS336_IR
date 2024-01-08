import * as React from "react";
import "./InputBar.css";
import fetchData from '../services/query'
import Result from "./Result";

const InputBar = ({ onDataChange }) => {
    const [query, setQuery] = React.useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearchClick = async () => {
        const data = await fetchData(query);
        console.log(data);
        onDataChange(data);
    }

    return (
        <div className="InputBar">
            <input
                type="text"
                id="query"
                value={query}
                onChange={handleInputChange}
                placeholder="Type here..."
            />

            <button onClick={handleSearchClick}>Search</button>
        </div>

    );

};

export default InputBar;
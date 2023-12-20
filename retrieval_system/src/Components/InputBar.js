import * as React from "react";
import "./InputBar.css";

const InputBar = () => {
    const [inputValue, setInputValue] = React.useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSearchClick = () => {
        console.log('Press search');
        const requestData = {
            searchTerm: inputValue,
        };
        console.log(requestData);

        fetch('http://localhost:5000/searching', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(requestData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Data from API: ', data);
        })
        .catch(error => {
            console.error('Error when sending request:', error);
        })


    }

    return (
        <div className="InputBar">
            <input
                type="text"
                id="textInput"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type here..."
            />

            <button onClick={handleSearchClick}>Search</button>
        </div>

    );

};

export default InputBar;
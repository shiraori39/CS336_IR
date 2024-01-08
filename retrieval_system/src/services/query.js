import React, { useEffect, useState } from 'react';

const fetchData = async (query) => {
    try {
        const body = JSON.stringify({
            query: query
        });

        const response = await fetch('http://127.0.0.1:8000/search', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: body
        });

        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('An error occurred while fetching the data.', error);
    }
};

export default fetchData;
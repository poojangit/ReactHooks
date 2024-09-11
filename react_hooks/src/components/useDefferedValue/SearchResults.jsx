import React from 'react';

function SearchResults({ query }) {
    const results = ['apple', 'mango', 'orange', 'kiwi']
    const filteredResults = results.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
    return (
        <div>
            <ul>
                {filteredResults.length > 0 ? (
                    filteredResults.map((result, index) =>
                        <li key={index}> {result}</li>
                    )
                ) : (
                    <li>No Results</li>
                    )

                }
            </ul>
        </div>
    );
}

export default SearchResults;

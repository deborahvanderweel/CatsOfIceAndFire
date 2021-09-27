
import Character from './Character';
import React, { useEffect, useState } from 'react';

const CharacterList = () => {
    // create different vars for the different states
    const [data, setData] = useState();
    const [error, setError] = useState(null);
    // use a random number to show different pages with characters
    const value = Math.floor(Math.random() * 43);

    // fetch for the characters
    // use error handling when api call is wrong
    useEffect(() => {
        fetch(`https://anapioficeandfire.com/api/characters?page=${value}&pageSize=150`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('oops, could not fetch the data of the characterlist.')
                } else {
                    return res.json();
                }
            })
            .then(json => setData({ data: json }))
            .catch(err => {
                setError(err.message);
            })
    }, [])

    const characters = data;

    return (
        <div className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-2 md:-mx-1 lg:-mx-2 font-mono">
            {/* when the api call failed, show error message */}
            { error && <div> {error} </div>}
            <div className="container ml-auto mr-auto flex flex-wrap justify-center">
                <h1 className="text-5xl font-bold uppercase p-4">cats of ice and fire</h1>
            </div>
            { characters &&
                <div className="container ml-auto mr-auto flex flex-wrap items-start">
                    {/* map through all the items and show the characters */}
                    {characters.data.map((character, item) => <Character {...character} key={item} />)}
                </div>
            }
        </div>
    );
}

export default CharacterList;
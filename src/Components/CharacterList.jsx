
import Character from './Character';
import React, { useEffect, useState } from 'react';

const CharacterList = (props) => {
    const [data, setData] = useState();

    useEffect(() => {
        const value = Math.floor(Math.random() * 43);
        console.log(value)
        fetch(`https://anapioficeandfire.com/api/characters?page=${value}&pageSize=150`)
            .then(res => res.json())
            .then(json => setData({ data: json }));
    }, [])

    const characters = data;
    if (!characters || characters.length === 0) return <p>No characters, sorry</p>;

    return (
        <div className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-2 md:-mx-1 lg:-mx-2 font-mono">
            <div className="container ml-auto mr-auto flex flex-wrap justify-center">
                <h1 className="text-5xl font-bold uppercase p-4">cats of ice and fire</h1>
            </div>
            <div className="container ml-auto mr-auto flex flex-wrap items-start">
                {characters.data.map(character => <Character {...character} key={character.id} />)}
            </div>
        </div>
    );
}

export default CharacterList;
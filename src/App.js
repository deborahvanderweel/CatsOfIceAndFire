
import React, { useEffect, useState } from 'react';
import CharacterList from './Components/CharacterList';

function App() {
    // const [appState, setAppState] = useState({
    //     loading: false,
    //     characters: null,
    // });

    // useEffect(() => {
    //     setAppState({ loading: true });
    //     const apiUrl = "https://anapioficeandfire.com/api/characters?page=1&pageSize=20";
    //     fetch(apiUrl)
    //         .then((res) => res.json())
    //         .then((characters) => {
    //             setAppState({ loading: false, characters: characters });
    //         });
    // }, [setAppState]);


    return (
        <div className='App'>
            <div className='character-container'>
                <CharacterList />
            </div>
        </div>
    );
}

export default App;

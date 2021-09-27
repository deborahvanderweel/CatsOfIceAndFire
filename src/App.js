
import React, { useEffect, useState } from 'react';
import CharacterList from './Components/CharacterList';

function App() {
    return (
        <div className='App'>
            <div className='character-container'>
                <CharacterList />
            </div>
        </div>
    );
}

export default App;

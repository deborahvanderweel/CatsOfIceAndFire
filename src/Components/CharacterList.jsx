
import Character from './Character';
import React, { Component } from 'react';

export default class CharacterList extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        fetch("https://anapioficeandfire.com/api/characters?page=1&pageSize=100")
            .then(res => res.json())
            .then(json => this.setState({ data: json }));
    }

    render() {
        const characters = this.state.data;
        if (!characters || characters.length === 0) return <p>No characters, sorry</p>;

        return (
            <div className="flex flex-wrap -mx-1 overflow-hidden sm:-mx-2 md:-mx-1 lg:-mx-2 font-mono">
                <div className="container ml-auto mr-auto flex flex-wrap justify-center">
                    <h1 className="text-5xl font-bold uppercase p-4">cats of ice and fire</h1>
                </div>
                <div className="container ml-auto mr-auto flex flex-wrap items-start">
                    {characters.map(character => <Character {...character} key={character.id} />)}
                </div>
            </div>
        );
    };
}

import Character from './Character';
import React, { Component } from 'react';

export default class RandomImage extends Component {
    constructor() {
        super();
        this.state = { data: [] };
    }

    componentDidMount() {
        fetch("https://api.thecatapi.com/v1/images/search")
            .then(res => res.json())
            .then(json => this.setState({ data: json }));
    }

    render() {
        const images = this.state.data;
        if (!images || images.length === 0) return <p>No images, sorry</p>;

        return (
            <div>
                <figure className="mb-2">
                    <img src={images[0].url} className="object-cover h-48 w-full rounded-t-xl" />
                </figure>
            </div>
        );
    };
}
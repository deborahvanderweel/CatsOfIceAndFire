
import React, { useState, useEffect } from 'react';

const RandomImage = () => {
    const [data, setData] = useState(0);

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/images/search")
            .then(res => res.json())
            .then(json => setData({ data: json }));
    })

    const images = data;
    if (!images || images.length === 0) return <p>No images, sorry</p>;

    return (
        <div>
            <figure className="mb-2">
                <img src={images.data[0].url} className="object-cover h-48 w-full rounded-t-xl" />
            </figure>
        </div>
    );
}

export default RandomImage;

import React, { useState, useEffect } from 'react';

const RandomImage = () => {
    // create different vars for the different states
    const [randomImage, setRandomImage] = useState();
    const [error, setError] = useState(null);

    // fetch for the random images
    // use error handling when api call is wrong
    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(res => {
                if (!res.ok) {
                    throw new Error('oops, could not fetch the data of the random images.')
                } else {
                    return res.json();
                }
            })
            .then(json => setRandomImage({ randomImage: json }))
            .catch(err => {
                setError(err.message);
            })
    }, [])

    const images = randomImage;

    return (
        <div>
            {/* when the api call failed, show error message */}
            { error && <div className="p-6"> {error} </div>}
            {/* get the random images */}
            { randomImage && <figure className="mb-2">
                <img src={images.randomImage[0].url} className="object-cover h-48 w-full rounded-t-xl" />
            </figure>
            }
        </div>
    );
};


export default RandomImage;
import React, { useEffect, useState } from 'react';
import RandomImage from './RandomImage';

const Character = (props) => {
    const characters = props;
    const [book, setBook] = useState();

    if (!characters.name || !characters.died || !characters.born || characters.length === 0) return '';

    useEffect(() => {
        fetch(`${characters.books[0]}`)
            .then(res => res.json())
            .then(json => setBook({ book: json }));
    }, [])

    const books = book;
    if (!books || books.length === 0) return 'no books';

    return (
        <div className="my-2 px-2 w-full overflow-hidden md:my-1 md:px-1 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/3 xl:w-1/4">
            <div className="bg-gray-200 rounded-xl relative ">
                <RandomImage />
                <div className="p-6 h-48">
                    <div className="text-2xl font-bold mb-2">{characters.name}</div>
                    <div className="text-gray-800 leading-relaxed">Born: {characters.born}</div>
                    <div className="text-gray-800 leading-relaxed">Died: {characters.died}</div>
                    <div className="">Book: {books.book.name}</div>
                </div>
            </div>
        </div>
    )
}

export default Character;
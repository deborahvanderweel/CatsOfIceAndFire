import React, { useEffect, useState } from 'react';
import RandomImage from './RandomImage';

const Character = (props) => {
    const characters = props;
    const [book, setBook] = useState();
    const [toggle, setToggle] = useState(false)

    if (!characters.name || !characters.died || !characters.born || characters.length === 0) return '';

    useEffect(() => {
        fetch(`${characters.books[0]}`)
            .then(res => res.json())
            .then(json => setBook({ book: json }));
    }, [])

    const books = book;
    if (!books || books.length === 0) return 'no books';


    return (
        <div className="my-2 px-2 w-full overflow-hidden md:my-1 md:px-1 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/3 xl:w-1/4 ">
            <div className="bg-gray-200 rounded-xl relative ">
                <RandomImage />
                <div className="p-6 h-48">
                    <div className="text-xl font-bold mb-2">{characters.name}</div>
                    <div className="text-sm text-gray-800 leading-relaxed">Born: {characters.born}</div>
                    <div className="text-sm text-gray-800 leading-relaxed">Died: {characters.died}</div>
                    <div className="text-sm text-gray-800 leading-relaxed">Book: {books.book.name}</div>
                </div>
                {toggle && (
                    <div className="absolute top-0 bg-gray-200 rounded-xl w-full">
                        <div className="p-6 h-96">
                            <div className="text-xl font-bold mb-2">{characters.name}</div>
                            <div className="text-sm text-gray-800 leading-relaxed">Gender: {characters.gender}</div>
                            <div className="text-sm text-gray-800 leading-relaxed">Culture: {characters.culture}</div>
                            <div className="text-sm text-gray-800 leading-relaxed">Played by: {characters.playedBy}</div>
                            <div className="text-sm text-gray-800 leading-relaxed">Titles: {characters.titles.join(', ')}</div>
                            <div className="text-sm text-gray-800 leading-relaxed">Born: {characters.born}</div>
                            <div className="text-sm text-gray-800 leading-relaxed">Died: {characters.died}</div>
                            <div className="text-sm text-gray-800 leading-relaxed">Book: {books.book.name}</div>
                        </div>
                    </div>
                )}
                <div className="flex flex-wrap justify-end p-2">
                    <button onClick={() => setToggle(!toggle)}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                </div>
            </div >
        </div >
    )
}

export default Character;
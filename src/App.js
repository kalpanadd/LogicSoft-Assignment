import React, { useState } from 'react'
import './App.css'
import BookInfo from './BooksInfo'

function App() {
    const [searchinput, setSearchInput] = useState("");
    const [id, setId] = useState("");
    const [response, setResponse] = useState({});
    const [error, setError] = useState(false);


    const Books_first_api = async () => {
        const url = `https://lspl-bookie.glitch.me/books/${searchinput}/details?key=Fo8UprJg2kQyDscaJjNKon5UF`;
        await fetch(url, {
            method: "GET",
            headers: {
                "mode": "cors",
                "Content-Type": "application/json",

            },
        })
            .then((res) => res.json())
            .then((data) => {
                setResponse(data);
            })
            .catch(() => setError(true));
    };

    const Books_second_api = async () => {
        const url = `https://lspl-info4you.glitch.me/search?isbn${searchinput}`;
        await fetch(url, {
            method: "GET",

            headers: {
                "mode": "cors",
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.ID)
                setId(data.ID);
            })
            .catch((e) => {
                console.log("error", e);
                setError(true);
            });
    };

    const Books_info_ID = async (id) => {
        const url = `https://lspl-info4you.glitch.me/info/${id}`;
        await fetch(url, {
            method: "GET",

            headers: {
                "mode": "cors",
                "Content-Type": "application/json",

            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setResponse(...response, data);
            })
            .catch((e) => {
                console.log("error", e);
                setError(true);
            });
    }
    console.log(response)

    const handleSubmit = (e) => {
        e.preventDefault();
        Books_first_api();
        Books_second_api();
        Books_info_ID();
    }

    return (
        <div className='app'>
            <h1 className="title">Book Search</h1>
            <div className="app_div">
                <form onSubmit={handleSubmit}>
                    <input placeholder='Enter ISBN' className='search_box'
                        value={searchinput}

                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button type='submit' className='search_btn'>Search</button>
                </form>
            </div>
            <BookInfo
                isbn={response.ISBN}
                name={response.Name}
                author={response.Author}
                publisher={response.Publisher}
            />

        </div>
    )
}

export default App

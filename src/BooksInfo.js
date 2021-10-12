import React from 'react'
import './App.css'

function BookInfo({ isbn, name, author, publisher }) {
    return (
        <div className='book_info_div'>
            <table>
                <tr className>
                    <th>ISBN</th>
                    <td>{isbn}</td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>{name}</td>
                </tr>
                <tr>
                    <th>Author</th>
                    <td>{author}</td>
                </tr>
                <tr>
                    <th>Publisher</th>
                    <td>{publisher}</td>
                </tr>
            </table>
        </div>
    )
}

export default BookInfo

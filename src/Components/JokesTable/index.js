import React from 'react'
import './index.css'
import moment from 'moment'
import JokeCard from '../JokeCard'

export default function index({ jokes }) {
    return (
        <div className="tableContainer">
            <table>
                <thead>
                    <th>ID</th>
                    <th>Category</th>
                    <th>Date created</th>
                </thead>
                <tbody>

                    {jokes?.map((elm, i) => (
                        <>
                            <tr key={elm.id}>
                                <td>{elm.id}</td>
                                <td>{elm.categories[0] != undefined ? elm.categories[0] : '-'}</td>
                                <td>{moment(elm.created_at).format('MMM D, YYYY, hh:mm a')}</td>
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

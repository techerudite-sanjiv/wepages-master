import React from 'react'
import SingleUser from '../SingleUser';
import { bookings } from '../eventData';
import './Table.css'
const Table2 = () => {
    const startTime = 9;
    const endTime = 18;
    const minHeight = 90;
    return (
        <div className=''
            style={{
                borderStyle: "solid",
                borderLeftColor: "red",
                height: (endTime - startTime) * minHeight,
                width: "100%",
                borderWidth: 0,
                borderLeftWidth: 0,
                position: "relative",
            }}>
            <table style={{ width: "100%" }}>
                <tbody>
                    {[...Array(18)].map((e, i) => {
                        return (
                            <>
                                <tr className='bbc'>
                                    <th scope="row" style={{ height: '45px' }}>

                                    </th>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
                <div  >
                    {bookings.map((item, index) => {
                        return <SingleUser {...item} key={index} />;
                    })}
                </div>
            </table>

        </div>
    )
}

export default Table2
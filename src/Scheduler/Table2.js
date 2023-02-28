import React from 'react'
import { Table } from 'reactstrap';
import SingleUser from '../SingleUser';
import { bookings } from '../constants';
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

                    {[...Array(19)].map((e, i) => {
                        return (
                            <>
                                <tr className='bbc'>
                                    <th scope="row" style={{ height: '46px' }}>
                                        
                                    </th>
                                </tr>
                            </>
                        )
                    })}
                   
                   
                       {bookings.map((item, index) => {
                            return <SingleUser {...item} key={index} />;
                        })}

                    
                </tbody>
            </table>
        </div>
    )
}

export default Table2
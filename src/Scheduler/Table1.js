import React from 'react'
import './Table.css'
const Table1 = () => {
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
            <table>
                <thead className='left-timer'>
                    {[...Array(10)].map((e, i) => {
                        return (
                            <>
                                <tr style={{ height: ((startTime+1 )- startTime) * minHeight  }}>
                                    <th class="">
                                        <span style={{ position: "relative", top: -30, left: 0, padding: "0 57px" }}>{9 + i}:00</span>
                                    </th>
                                </tr>
                                
                            </>
                        )
                    })}
                </thead>
                
            </table>
        </div>
    )
}

export default Table1
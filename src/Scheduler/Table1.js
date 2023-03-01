import React from 'react'
import './Table.css'


let timeArray = [
    "09:00", "10:00", "11:00", "Noon",
    "13:00", "14:00", "15:00", "16:00",
    "17:00", "18:00",
]

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
                    {timeArray.map((item, i) => {
                        return (
                            <>
                                <tr style={{ height: ((startTime + 1) - startTime) * minHeight }} >
                                    <th >
                                        <span style={{ position: "relative", top: -38, left: 0, padding: "0 57px" }}>{item}</span>
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
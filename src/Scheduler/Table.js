import React from 'react'
import './Table.css'
const Table = () => {
    return (
        <div className='ble'>
         <div class="time-cells-wrap">
                <table class="e-schedule-table ">
                    <thead border="1">
                     
                                    <tr>
                                        <th class="e-time-slots"><span>00</span></th>
                                        <th class="e-time-slots"><span>00</span></th>
                                    
                                    </tr>
                       
                     
                    </thead>
                    <tbody border="1">
                       
                          
                                    <tr>
                                        <th class="e-time-slots"><span>00</span></th>
                                        <th class="e-time-slots"><span>00</span></th>
                                    </tr>
                                   
                        
                     
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Table
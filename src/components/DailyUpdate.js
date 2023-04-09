import React from 'react'

export default function DailyUpdate(props) {
    let Date_Format = new Intl.DateTimeFormat("IN", { dateStyle: "short" });
    let Day_Format = new Intl.DateTimeFormat(undefined, { weekday: "long" });

    return (
        <>
            <tr>
                <th>
                    <div>
                        <h6 className='fs-5'>{Date_Format.format(props.day)}</h6>
                        <div>
                            <span className='fs-6 text-secondary'>{Day_Format.format(props.day)}</span>
                        </div>
                    </div>
                </th>
                <td><span>{props.dailyTemp}&#8451;</span></td>
                <td>{props.humid}%</td>
                <td>{props.windspeed} Km/h</td>
                <td>{props.pressure} mb</td>
                <td>
                    <div className='d-flex align-items-center'>
                        <div>
                            <img src={props.iconNum} alt="icon" />
                        </div>
                        <span>{props.status}</span>
                    </div>
                </td>
            </tr>
        </>
    )
}

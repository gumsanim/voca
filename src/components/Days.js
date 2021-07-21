import {Link} from "react-router-dom";
import { useState, useEffect} from "react";

export default function Days(){

    const [daysData, setDaysData] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:3001/days`)
        .then((res)=>{
           return res.json();
        }).then((data)=>{
            setDaysData(data)
        })
    },[`http://localhost:3001/days`])

    return (
        <ul className="days-container">
            {
                daysData.map((days)=>{
                    return (
                    <li>
                        <Link 
                            key={days.id}
                            className="link" 
                            to={`/day/${days.day}`}
                        >DAY{days.day}
                        </Link>
                    </li>
                    )
                })
            }
        </ul>
    )
}
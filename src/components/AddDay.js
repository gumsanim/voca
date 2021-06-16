import {useState, useEffect} from "react";
import { useHistory } from "react-router";

export default function AddDay(){

    const [days, setDays] = useState([]);
    const history = useHistory();
    useEffect(()=>{
        fetch(`http://localhost:3001/days`)
        .then((res)=>{
           return res.json();
        }).then((data)=>{
            setDays(data)
        })
    },[`http://localhost:3001/days`])
    
    function onAddDay(){
        fetch(`http://localhost:3001/days`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                day:days.length+1
            })
        })
        .then(res=>{
            if(res.ok){
                alert("Day 추가 완료:)");
                history.push("/");
            }
        })
    }

    return (
        <>
            <div className="addDayContainer">
                <div className="addDayContent">
                    <div className="addDayCount">총 DAY 수: {days.length}</div>
                    <button className="addDayBtn" onClick={onAddDay}>Day 추가</button>
                </div>
            </div>
        </>
    )
}
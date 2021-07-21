import { useRef, useState,useEffect } from "react";
import { useHistory } from "react-router";

export default function AddWord(){

    const history = useHistory();
    const [days, setDays] = useState([]);
    
    useEffect(()=>{
        fetch(`http://localhost:3001/days`)
        .then((res)=>{
           return res.json();
        }).then((data)=>{
            setDays(data)
        })
    },[`http://localhost:3001/days`])

    const indRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    function onSubmit(e){
        e.preventDefault();
        fetch(`http://localhost:3001/words/`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                day: dayRef.current.value,
                ind: indRef.current.value,
                kor: korRef.current.value,
                isDone: false
            })
        })
        .then(res=>{
            if(res.ok){
                alert("단어가 추가 되었습니다");
                history.push(`/day/${dayRef.current.value}`)
            }
        })
    }
    
    return (
        <>
            <div className="addWordContainer">
                <form className="addWordContent" onSubmit={onSubmit}>
                    <div className="inputBox">
                        <label>인니어: </label>
                        <input 
                            type="text" 
                            placeholder="인니어 단어 입력" 
                            ref={indRef}
                        />    
                    </div>
                    <div className="inputBox">
                        <label>한국어: </label>
                        <input 
                            type="text" 
                            placeholder="한국어 뜻 입력" 
                            ref={korRef}
                        />
                    </div>
                    <div className="inputBox">
                        <label>Day: </label>
                        <select ref={dayRef}>
                            {
                                days.map((days)=>{
                                    return <option key={days.id} value={days.day}>{days.day}</option>
                                })
                                
                            }
                        </select>
                    </div>
                    <div className="inputBox">
                        <button>확인</button>
                    </div>
                </form>
            </div>
        </>
    )
}
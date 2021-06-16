import { useState,useEffect } from "react"
import {useParams} from "react-router-dom";
import Words from "./Words";

export default function WordsList(){

    const [wordsData, setWordsData] = useState([])
    const {day} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:3001/words?day=${day}`)
        .then((res)=>{
           return res.json();
        }).then((data)=>{
            setWordsData(data);
        })
    },[`http://localhost:3001/words?day=${day}`])

    return (
        <>
            <h3>Day{day}</h3>
            <div className="words-container">
                <table>
                    <tbody>
                    {
                        wordsData.map((words)=>{
                            return (
                                <Words words={words} key={words.id}/>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}
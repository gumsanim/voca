import {useState} from "react";
import { useHistory } from "react-router";

export default function Words(props){

    const history = useHistory();
    const [eachWord, setEachWord] = useState(props.words);
    const [isDone, setIsDone] = useState(eachWord.isDone);
    function onChange(){
        fetch(`http://localhost:3001/words/${eachWord.id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                ...eachWord,
                isDone:!isDone
            })
        })
        .then(res=>{
            if(res.ok){
                setIsDone(!isDone);
            }
        })
    }

    function onDelete(){
        if(window.confirm("삭제하실건가요?")){
            fetch(`http://localhost:3001/words/${eachWord.id}`,{
                method:"DELETE",
            })
            .then(res=>{
                if(res.ok){
                    setEachWord({id:0})
                }
            })
        }
    }

    if(eachWord.id===0){
        return null;
    }
    
    return(
        <>
            <tr className={isDone?"done":null}>
                <td><input type="checkbox" checked={isDone} onChange={onChange}/></td>
                <td>{eachWord.ind}</td>                        
                <td>{eachWord.kor}</td>                        
                <td>
                    <button className="deleteBtn" onClick={onDelete}>삭제</button>
                </td>                        
            </tr>
        </>
    )
}
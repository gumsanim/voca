import {Link} from "react-router-dom";

export default function Title(){
    return (
        <>
            <h1 className="title"><Link className="title-link" to="/">재호의 인니어 단어장</Link></h1>
            <div className="addDay"><Link className="title-link" to="/addday">Day추가</Link></div>
            <div className="addWord"><Link className="title-link" to="/addword">단어추가</Link></div>
        </>
    )

}
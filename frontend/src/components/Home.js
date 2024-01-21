// import {Container, Row, Col} from "reactstrap";
import WordsList from "./WordsList";
import axios from "axios";
import {useEffect, useState} from "react";
import {API_URL} from "../index";

const Home = () => {
    const [data, setData] = useState(null);

    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.xsrfHeaderName = 'X-CSRFToken';
    axios.defaults.withCredentials = true;

    const client = axios.create({
        // baseURL: "http://127.0.0.1:8000"
        baseURL: "http://nartlang.ru:8000"
    });

    useEffect(() => {
        client.get("/api/words")
        .then(function(res) {
            // console.log('res -->', res)
            setData(res.data);
        })
        .catch(function(error) {
            // console.log('res err -->', error)
            setData(error);
        });
    }, []);
    
    return (
        <div style={{marginTop: "20px"}}>
            <div>
                <div>
                    <WordsList words={data}/>
                </div>
            </div>
        </div>
    )
}

export default Home;
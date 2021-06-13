
import axios from "axios";

export async function getEmployers() {
    debugger;
    return await axios.get(`http://localhost:4000/getAll`)
        .then(res => {
            debugger;          
            console.log(res);
            return res;
        },
            err => { console.log("error: " + err); }
        )
}

export async function checkPerission(email,passWord) {
    debugger;
    return await axios.post(`http://localhost:4000/login`,{email,passWord})
        .then(res => {
            debugger;
            // const t = res.data();
            console.log(res);
            return res;
        },
            err => { console.log("error: " + err); }
        )
}
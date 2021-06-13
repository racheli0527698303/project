import { React, useReducer, useState,useEffect } from "react";
import { connect } from "react-redux";
import { getEmployers } from "../service";
// import { setNewUser } from "../../redux/Action";
// import { withRouter } from "react-router-dom";



// const mapDispatchToProps = (dispatch) => ({
//     setWeather: (values) => dispatch(setWeather(values))
// })

export default function Employers(props) {

    const [employedArr, setEmployedArr] = useState([{fullName:"racheli greenberg"},{fullName:"chana levi"}]);
    console.log(employedArr);

    useEffect(async function () {
        debugger;
        const response = await getEmployers();
        setEmployedArr(response.data)
    }, [])

    return (
        <>
        <h2>EMPLOYERS</h2>
            <ul>{employedArr?.map(employed => {
                <li >{employed.fullName}</li>
            })}
            </ul>:""
        </>
    )
}
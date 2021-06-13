import { React, useReducer, useState, useEffect } from "react";
import { setDetails } from "../redux/Actions";
import { connect } from "react-redux";
import { checkPerission } from "../service";


const mapDispatchToProps = (dispatch) => ({
    setDetails: (values) => dispatch(setDetails(values))
})


    export default  (connect( mapDispatchToProps)(function Login(props) {
        const { history } = props;
        
        const [email, setEmail] = useState();
        const [password, setPassword] = useState();

        function sentDetails() {
            const data = checkPerission(email, password);//שליחה לשרת
            if (data) {
                setDetails(data)//שליחה לסטור
                history.push('./Employers')
            }
        }


        return (
            <>
                <h2>connect</h2>
                <form >
                    <div>
                        <input type="text" name="email" id="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div>
                        <input type="text" name="passWord" id="passWord" placeholder="passWord" onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div>
                        <input type="submit" value="Submit" onClick={sentDetails}></input>
                    </div>
                </form>
            </>
        )
    }))
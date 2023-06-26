import React, { useState } from 'react'
import formstyle from "./Form.module.css";
import { Link } from 'react-router-dom';


function Form() {

    const [inputs, setInputs] = useState({
        name: "",
        username: "",
        email: "",
        mobile: "",
        term: ""
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value.toUpperCase() }))
    }



    return (
        <div className={formstyle.rightsection}>
            <form action="" >
                <p className={formstyle.h1}>Super app</p>
                <p className={formstyle.h2}>Create your new account</p>
                <div >
                    <div className={formstyle.card}>
                        <input type="text" placeholder='Name' name="name" value={inputs.name} onChange={handleChange} />
                        <p></p>
                    </div>
                </div>
                <div >
                    <div className={formstyle.card}>
                        <input type='text' placeholder='UserName' name="username" value={inputs.username} onChange={handleChange} />
                        <p></p>
                    </div>
                </div>
                <div >
                    <div className={formstyle.card}>
                        <input type='email' placeholder='Email' name="email" value={inputs.email} onChange={handleChange} />
                        <p></p>
                    </div>
                </div>
                <div >
                    <div className={formstyle.card}>
                        <input type='mobile' placeholder='Mobile' name="mobile" value={inputs.mobile} onChange={handleChange} />
                        <p></p>
                    </div>
                </div>
                <br />
                <div >
                    <div >
                        <input type='checkbox' value={inputs.term} />
                        <label htmlFor="">Share my registration data with Superapp </label>
                    </div>
                </div>
                <div className={formstyle.btncnf}>
                    <Link to="/category"><button  >SIGN UP</button></Link>
                </div>
                <p className={formstyle.p}>By clicking on Sign up. you agree to Superapp <strong style={{ color: "#72DB73" }}>Terms and <br /> Conditions of Use</strong></p>
                <p className={formstyle.p}>To learn more about how Superapp collects, uses, shares and <br /> protects your personal data please head Superapp <strong style={{ color: "#72DB73" }}>Privacy <br /> Policy</strong></p>
            </form>
        </div >
    )
}

export default Form
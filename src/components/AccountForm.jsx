import React from 'react';
import './components.css';

// Form that is displayed on the home page for login or sign up

// Set up component to return either the contents of the sign-up form or nothing
const CreateInput = (props) => {

    if (!props.auth) {
        return (
            <div key="createInput">
                <input type="password" id="confirmPw" className="form-control" key="confirmPw" placeholder="Confirm Password" />
                <input type="text" id="firstName" className="form-control" key="firstName" placeholder="First Name" />
                <input type="text" id="lastName" className="form-control" key="lastName" placeholder="Last Name" />
                <input type="text" id="email" className="form-control" key="email" placeholder="E-Mail" />
                <div key="birthday" style={{"display": "flex", "margin": "10px"}}>
                    <label htmlFor="birthdate" className="form-label" style={{"margin": "auto"}}>Birthdate</label>
                    <input type="date" id="birthdate" className="form-control" key="birthdate" />
                </div>
                
            </div>
        );
    } else {
        return null;
    }
}


const AccountForm = (props) => {

    const onSubmit = (event) => {
        // stop browser from refreshing the page after submit
        event.preventDefault();

        // TODO: Make a call to api for either authentication or account creation
        if (props.auth) {
            alert("You're logging in!");
        } else {
            alert("You're signing up!");
        }
    }

    // Change id/key accordingly depending on authentication boolean
    let uname, pword, submitBtn;
    
    if (props.auth) {
        uname = "authUsername";
        pword = "authPassword";
        submitBtn = "Login";
    } else {
        uname = "username";
        pword = "password";
        submitBtn = "Sign Up";
    }

    return (
        <div key="formContainer" className="md-3">
            <form key="acctForm" onSubmit={ onSubmit } style={{"margin": "20px"}}>
                <input type="text" id={ uname } className="form-control" key={ uname } placeholder='Username' />
                <input type="password" id={ pword } className="form-control" key={ pword } placeholder='Password' />

                {/* Sign-Up Inputs */}
                <CreateInput auth={ props.auth }/>

                <input type="submit" className="btn btn-primary" value={ submitBtn } />
            </form>
        </div>
    );
};

export default AccountForm;
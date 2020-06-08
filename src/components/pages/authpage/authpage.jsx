import React from 'react'
import SignIn from '../sign-in/sign-in'
import SignUp from '../sign-up/sign-up'
import "./authpage.scss"

export default function AuthPage() {
    return (
        <div className = "row container main-container">
            <div className = "col s12 m12 l6">
                <SignIn/>
            </div>
            <div className = "col s12 m12 l6 ">
                <SignUp/>
            </div>
        </div>
    )
}

import React, {useState} from "react";
import LText from "../../components/core/LText/LText";
import {PRIMARY_LIGHT} from "../../utils/constants";
import Line from "../../components/core/Line/Line";
import BText from "../../components/core/BText/BText";
import './styles.css';

const AuthLoginWidget: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPass(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        setEmail('');
        setPass('');
    };

    return (
        <div className="auth-back">
            <div className="auth-container">
                <p className="auth-logo">yolo</p>
                <div className="auth-forms">
                    <div>
                        <input
                            className="auth-form"
                            placeholder="Phone number, username or email"
                            onChange={handleEmailChange}/>
                        <LText text="Invalid email" color={'#ff0000'}/>
                    </div>
                    <div>
                        <input
                            className="auth-form"
                            placeholder="Password"
                            onChange={handlePassChange}/>
                        <LText text="Invalid password" color={'#ff0000'}/>
                    </div>
                </div>

                <BText text="Forgot password?" color={PRIMARY_LIGHT}/>
                <p className="auth-btn" onClick={handleSubmit}>Log in</p>
                <Line/>
                <div className="auth-under">
                    <LText text="Don't have an account?"/>
                    <BText text="Sign Up" color={PRIMARY_LIGHT} />
                </div>
            </div>
        </div>
    )
}

export default AuthLoginWidget;
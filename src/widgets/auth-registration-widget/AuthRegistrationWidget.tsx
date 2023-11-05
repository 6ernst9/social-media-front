import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import BText from "../../components/core/BText/BText";
import {BACKGROUND_LIGHT, PRIMARY_LIGHT} from "../../utils/constants";
import Button from "../../components/core/Button/Button";
import LText from "../../components/core/LText/LText";
import Line from "../../components/core/Line/Line";
import Credits from "../../components/core/Credits/Credits";
import {select} from "../auth-login-widget/model/selectors";
import {register} from "./model/effects";
import {showSidebar} from "../../redux/core/layout/reducers";

const AuthRegistrationWidget: React.FC = () => {
    const errorMessage = useSelector(select.authError);
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [fullName, setFullName] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<number>(0);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (errorMessage === 'NO-ERROR') {
            navigate('/home');
            dispatch(showSidebar);
        }
    }, [dispatch, errorMessage, navigate]);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.target.value);
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);
    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.target.value);
    const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setFullName(event.target.value);
    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(event.target.valueAsNumber);
    const handleSubmit = async() => {
        await register({
            email, username, password, fullName, phoneNumber, dispatch
        });

        setUsername('');
        setPassword('');
        setEmail('');
        setFullName('');
        setPhoneNumber(0);
    }

    return (
        <div className="auth-back">
            <div className="auth-container">
                <p className="auth-logo">yolo</p>
                <div className="auth-forms">
                    <input
                        className="auth-form"
                        placeholder="Full name"
                        type='text'
                        onChange={handleFullNameChange}/>
                    <input
                        className="auth-form"
                        placeholder="Email"
                        type='email'
                        onChange={handleEmailChange}/>
                    <input
                        className="auth-form"
                        placeholder="Phone number"
                        type='number'
                        onChange={handlePhoneNumberChange}/>
                    <input
                        className="auth-form"
                        placeholder="Username"
                        type='text'
                        onChange={handleUsernameChange}/>
                    <input
                        className="auth-form"
                        placeholder="Password"
                        type='password'
                        onChange={handlePasswordChange}/>
                </div>
                <Button content='Sign up' onClick={handleSubmit}/>
                {errorMessage && errorMessage !== 'NO-ERROR' && <LText text={errorMessage} color={'#ff0000'}/>}
                <Line/>
                <div className="auth-under">
                    <LText text="Already have an account?"/>
                    <Link to='/login' className='link-btn'>
                        <BText text="Log in" color={PRIMARY_LIGHT} />
                    </Link>
                </div>
            </div>
            <Credits color={BACKGROUND_LIGHT}/>
        </div>
    )
}

export default AuthRegistrationWidget;
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser, clearAuthError } from '../../redux/action/UserAction';


const initialSatate = {
    email: "",
    password: "",
}
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialSatate);
    const { loading, error, isAuthenticated } = useSelector((state) => state.auth);


    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(formData));
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);


    const handleRegisterClick = () => {
        dispatch(clearAuthError());
        navigate("/createuser")
    }

    const handleForgotPasswordClick = () => {
        dispatch(clearAuthError());
        navigate("/createuser")
    }


    return (
        <div className='w-full h-[100vh] flex items-center justify-center bg-blue-700'>
            <div className='w-[400px] bg-white h-[400px] flex flex-wrap justify-center rounded-xl shadow-2xl px-[20px]'>
                <h2 className='my-auto text-3xl font-bold underline text-black'>LOG IN</h2>
                <form onSubmit={handleSubmit} className='w-full my-auto'>
                    <input onChange={changeHandler} name='email' value={formData.email} type="text" placeholder='email' required className='w-full h-12 border px-5 rounded-full' />
                    <input onChange={changeHandler} name='password' value={formData.password} type="text" placeholder='Password' required className='w-full h-12 border px-5 my-4 rounded-full' />
                    <button type="submit" disabled={loading} className='w-full h-12 border text-xl font-semibold rounded-full px-5 cursor-pointer bg-black text-white hover:bg-blue-700'>
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                {error && <p className='w-full  mt-2 text-red-500'>{error}</p>}

                <div className='w-full flex items-center justify-between'>
                    <button onClick={handleRegisterClick} className='font-semibold hover:text-blue-500'>Register New</button>
                    <button onClick={handleForgotPasswordClick} className='font-semibold hover:text-blue-500'>Forget password</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
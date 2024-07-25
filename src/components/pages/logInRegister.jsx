import React from 'react';

const Login = () => {
    return (
        <div className='fixed w-full h-[100vh] flex items-center justify-center bg-blue-700'>
            <div className='w-[400px] bg-white h-[400px] flex flex-wrap justify-center rounded-xl shadow-2xl px-[20px]'>
                <h2 className='my-auto text-3xl font-semibold underline text-red-600'>LOG IN</h2>
                <form className='w-full my-auto'>
                    <input type="text" placeholder='User name' className='w-full h-12 border px-5 rounded-full' />
                    <input type="text" placeholder='Password' className='w-full h-12 border px-5 my-7 rounded-full' />
                    <input type="submit" value={"Log In"} className='w-full h-12 border text-xl font-semibold rounded-full px-5 cursor-pointer bg-black text-white hover:bg-blue-700' />
                </form>
            </div>
        </div>
    );
}

export default Login;
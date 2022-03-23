import React, { useState } from 'react'
import { Prompt } from 'react-router-dom';

export default function Login(props) {
    const [userLogin, setUserLogin] = useState({userName:'', passWord:'', status:false,})
    console.log(userLogin);
    const handleChange = (event) =>{
        const {name, value}=event.target;
        const newUserLogin ={
            ...userLogin,
            [name]:value
        };
     let valid = true;
        for(let key in newUserLogin){
            if(key !== 'status'){
                if(newUserLogin[key].trim()=== ''){
                    valid = false;
                }
            }
        }
        if(!valid){
            newUserLogin.status = true;
        }else{
            newUserLogin.status = false;
        }
        
        setUserLogin(newUserLogin);
        
    }
    const handleLogin = (event)=>{
        event.preventDefault();
        if(userLogin.userName === 'cyberlearn' && userLogin.passWord === 'cyberlearn'){
            //Thanfhc ông thì chuyên về trangtrước đó
            // props.history.goBack();
            //props.history.push('/home'); // tu login sang home , back lại sẽ về login
            // replace thay doi noi dung path tuong ung, từ contact sang login, login sang home, nhưng back lại sẽ về contact
            
            // props.history.replace('/home');
            props.history.goBack();

            localStorage.setItem('userLogin', JSON.stringify(userLogin))
        }else{
            alert('fail Login')
            return;
        }
    }
    return (

    <form className='container' onSubmit={handleLogin}>
        <h3 className='display-4'>Login</h3>
        <div className="form-group">
            <p>UserName</p>
            <input name="userName" className='form-control' onChange={handleChange} />
        </div>
        <div className="form-group">
            <p>PassWord</p>
            <input name="passWord" className='form-control' onChange={handleChange} />
        </div>
        <div className="form-group">
            <button className='btn btn-success'>Login</button>
        </div>
        <Prompt when={userLogin.status} message={(location)=>{
            console.log(location);
            return 'Ban can nhap day du thong tin'
        }}/>
    </form>
  )
}

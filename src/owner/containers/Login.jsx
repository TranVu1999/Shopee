import React from 'react';
import {useHistory} from 'react-router-dom';

// Component
import Header from './../features/Login/Header';
import Content from './../features/Login/Content';
import FromLogin from '../features/Login/FromLogin';

// APIs
import authAPI from './../../api/authAPI';

function Login() {
    // data
    const [loginNotify, setLoginNotify] = React.useState("");
    const history = useHistory();
    
    // handle event
    const handleLogin = async data =>{
        try{
            const res = await authAPI.login(data);

            if(res.success){
                localStorage.setItem("accessToken", res.accessToken);
                history.push(`/ban-hang`);
            }else{
                setLoginNotify("Tài khoản hoặc mật khẩu không chính xác. Vui lòng thử lại.");
            }
            
        }catch(err){
            console.log("login err", err);
            setLoginNotify("Hệ thống đang lỗi. Vui lòng quay lại sau ít phút!")
        }
    }
    return (
        <div>
            <Header/>

            <Content
                serverNotify = {loginNotify}
                Form = {
                    <FromLogin onHandleSubmit = {handleLogin}/>
                }
            />
        </div>
    );
}

export default Login;
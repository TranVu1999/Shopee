import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

// components
import Header from './../feature/Login/Header';
import WrapContent from './../feature/Login/WrapContent';
import FormLogin from './../feature/Login/FormLogin';

// Modules
import Validate from './../util/validate';

// API
import authAPI from './../../api/authAPI';


function Login(props) {
    // Data
    const [loginNotify, setLoginNotify] = useState({
        indexActive: 0,
        listNotify: [
            "",
            "Đăng nhập KHÔNG thành công. Bạn vui lòng thử lại hoặc đăng nhập bằng cách khác nhé!",
            "Tên tài khoản của bạn hoặc Mật khẩu không đúng, vui lòng thử lại"
        ]
    });

    // hooks
    const history = useHistory();

    // handle event
    // validate email at client
    const handleLogin = async data =>{
        if(data.socialToken) {
            try{
                const res = await authAPI.login(data);
    
                if(res.success){
                    localStorage.setItem("accessToken", res.accessToken);
                    history.push("/");
                }else{
                    setLoginNotify({
                        ...loginNotify,
                        indexActive: 2
                    })
                }
                
            }catch(err){
                console.log("login err", err)
            }
        } else {
            if(!Validate.email(data.email)){
                setLoginNotify({
                    ...loginNotify,
                    indexActive: 1
                })
            }else{
                try{
                    const res = await authAPI.login(data);
        
                    if(res.success){
                        localStorage.setItem("accessToken", res.accessToken);
                        history.push("/");
                    }else{
                        setLoginNotify({
                            ...loginNotify,
                            indexActive: 2
                        })
                    }
                    
                }catch(err){
                    console.log("login err", err)
                }
            }
        }
        
    }

    return (
        <section>
            <Header/>
            <WrapContent
                FormLogin = {
                    <FormLogin 
                        error = {loginNotify.listNotify[loginNotify.indexActive]}
                        handleSubmit = {handleLogin}
                    />
                }
            />
        </section>
    );
}

export default Login;
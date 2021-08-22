import React, {useState} from 'react';

// components
import Header from './../feature/Login/Header';
import Footer from './../feature/Layout/Footer';
import WrapContent from './../feature/Login/WrapContent';
import FormLogin from './../feature/Login/FormLogin';


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

    // handle event

    return (
        <section>
            <Header/>
            <WrapContent
                FormLogin = {
                    <FormLogin error = {loginNotify.listNotify[loginNotify.indexActive]}/>
                }
            />
            <Footer/>
        </section>
    );
}

export default Login;
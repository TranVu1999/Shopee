import React from 'react';
import PropTypes from 'prop-types';

// components
import Header from './../feature/Login/Header';
import Footer from './../feature/Layout/Footer';
import WrapContent from './../feature/Login/WrapContent';

Login.propTypes = {
    
};

function Login(props) {
    return (
        <section>
            <Header/>

            <WrapContent/>

            <Footer/>
        </section>
    );
}

export default Login;
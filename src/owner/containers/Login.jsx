import React from 'react';
import PropTypes from 'prop-types';

// Component
import Header from './../features/Login/Header';
import Content from './../features/Login/Content';
import FromLogin from '../features/Login/FromLogin';

Login.propTypes = {
    
};

function Login(props) {
    return (
        <div>
            <Header/>

            <Content
                Form = {
                    <FromLogin/>
                }
            />
        </div>
    );
}

export default Login;
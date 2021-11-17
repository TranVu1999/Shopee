import React from 'react';
import {Link} from 'react-router-dom';


function VerifyAuthorization() {
    return (
        <div className="verify-authorization">
            <div className="container">
                <div className="text-center verify-authorization__container" >
                    <p>Bạn cần đăng nhập để thực hiện chức năng này<Link to="/login">Đăng nhập</Link></p>
                </div>
            </div>
        </div>
    );
}

export default VerifyAuthorization;
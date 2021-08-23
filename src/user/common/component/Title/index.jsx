import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const MyTitle = styled.h5`
    padding: 15px 20px;

    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    
`;

const Link = styled.div`
    font-size: .875rem;
    text-transform: capitalize;
    color: #ee4d2d;

    span{
        font-size: 1.125rem;
    }

`;

Title.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
};

Title.defaultProps = {
    title: "",
    link: ""
}

function Title(props) {

    const {link, title} = props;

    return (
        <MyTitle className = "d-flex align-items-center justify-content-between">
            <span>{title}</span>
            {link ? (
                <Link>
                    <a href={link} className="d-flex align-items-center">
                        Xem tất cả
                        <span aria-hidden="true" className="arrow_carrot-right"></span>
                    </a>
                </Link>
            ) : ""}
            
            
        </MyTitle>
    );
}

export default Title;
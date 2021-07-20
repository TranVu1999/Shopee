import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

Title.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
};

Title.defaultProps = {
    title: "",
    link: ""
}

const MyTitle = styled.h5`
    padding: 15px 20px;

    font-size: 22px;
    font-weight: 400;

    
`;

const Link = styled.div`
    font-size: 13px;
    text-transform: capitalize;
    transition: all .3s ease;

    &:hover{
        color: #c7a17a;
    }
`;



function Title(props) {

    const {link, title} = props;

    return (
        <MyTitle className = "d-flex align-items-center justify-content-between">
            <span>{title}</span>
            {link ? (
                <Link>
                    <a href={link}>
                        Xem them
                        <span aria-hidden="true" className="arrow_carrot-right"></span>
                    </a>
                </Link>
            ) : ""}
            
            
        </MyTitle>
    );
}

export default Title;
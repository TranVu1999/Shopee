import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import InputImage from '../features/Product/InputImage';
import InputLimitBox from '../components/InputLimitBox';
import TextareaLimitBox from '../components/TextareaLimitBox';
import InputMegaBox from '../features/Product/InputMegaBox';

const WidgetContent = styled.div``;

ProductNew.propTypes = {
    
};

function ProductNew(props) {
    // data
    const listOption = [
        "voan",
        "chinos",
        "Cotton",
        "Denim",
        "Lông vũ",
        "Nỉ",
        "Lông cừu",
        "Nỉ mỏng",
        "kaki",
        "Đan",
        "Ren",
        "Da",
    ]

    return (
        <WidgetContent>
            <InputImage required/>
            <br />
            <InputLimitBox limit={120} value=""/>
            <br />
            <TextareaLimitBox limit={3000} value="" large/>
            <br />
            <InputMegaBox listOption={listOption}/>
        </WidgetContent>
    );
}

export default ProductNew;
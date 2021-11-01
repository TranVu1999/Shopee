import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const WidgetContent = styled.form`
    font-size: .875rem;
`;

const WidgetInput = styled.div`
    padding: 2rem 0;
    max-width: 59rem;
    margin: 0 auto;
`;

const InputRow = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;    

    label {
        margin: 0 1rem 0;
        width: 12.5rem;
        text-align: right;

        span {
            color: #ee4d2d;
        }
    }

    .input-box{
        max-width: 28rem;
    }
`;

const WidgetButton = styled.div`
    padding: 1rem 0;
    justify-content: flex-end;
    gap: .875rem;
    border-top: 1px solid #e5e5e5;

    .btn {
        min-width: 5rem;
        font-size: .875rem;
        border: 1px solid #e5e5e5;
    }

    .btn-save {
        min-width: 6rem;
        border-color: #ee4d2d;
        background-color: #ee4d2d;
        color: #fff;
    }

`;



FormInfo.propTypes = {
    
};

function FormInfo(props) {
    return (
        <WidgetContent>
            <WidgetInput>
                <InputRow>
                    <label><span>*</span>Tên shop</label>
                    <div className="d-flex input-box">
                        <input type="text" />
                        <span>0/30</span>
                    </div>
                </InputRow>
                <InputRow>
                    <label><span>*</span>Tên shop</label>
                    <div className="d-flex input-box">
                        <input type="text" />
                        <span>0/30</span>
                    </div>
                </InputRow>
                <InputRow>
                    <label><span>*</span>Tên shop</label>
                    <div className="d-flex input-box">
                        <input type="text" />
                        <span>0/30</span>
                    </div>
                </InputRow>
                <InputRow>
                    <label><span>*</span>Tên shop</label>
                    <div className="d-flex input-box">
                        <input type="text" />
                        <span>0/30</span>
                    </div>
                </InputRow>
                <InputRow>
                    <label><span>*</span>Tên shop</label>
                    <div className="d-flex input-box">
                        <input type="text" />
                        <span>0/30</span>
                    </div>
                </InputRow>
            </WidgetInput>

            <WidgetButton className = "d-flex align-items-center">
                <div className = "btn">Lưu</div>
                <button className = "btn btn-save">Tiếp theo</button>
            </WidgetButton>
        </WidgetContent>
    );
}

export default FormInfo;
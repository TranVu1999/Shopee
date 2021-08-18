import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import InputImage from './InputImage';
import InputMegaBox from './InputMegaBox';
import InputLimitBox from './../../components/InputLimitBox';
import TextareaLimitBox from './../../components/TextareaLimitBox';

const WidgetContent = styled.div`
    padding: 2rem 2.5rem;
`;

const OptionalFields = styled.div``;

const WidgetField = styled.div`
    margin-bottom: 1.5rem;

    .label{
        width: 10.5rem;
        margin-right: 1.5rem;
        font-size: .875rem;
        text-align: right;
    }
`;

WidgetAddInformation.propTypes = {
    
};

function WidgetAddInformation(props) {
    // data
    const [fields, setFields] = useState({
        material: {
            label: "Chất liệu",
            nameInput: "material",
            limitSelection: 5,
            moreSelections: true,
            arrIndexSelected: [],
            database: [
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
        },
        originPlace: {
            label: "Xuất xứ",
            nameInput: "originPlace",
            moreSelections: false,
            indexSelected: -1,
            database: [
                "Indonesia",
                "Nhật Bản",
                "Hàn Quốc",
                "Đài Loan",
                "Việt Nam",
                "Thái Lan "
            ]
        }
    })

    return (
        <WidgetContent>

            <OptionalFields>

                <WidgetField className="d-flex align-items-center">
                    <div className="label">{fields.material.label} </div>

                    <div className="flex-fill">
                        <InputMegaBox 
                            name = {fields.material.nameInput} 
                            listOption = {fields.material.database} 
                            limit = {fields.material.limitSelection}
                            arrIndexSelected={fields.material.arrIndexSelected}
                        />
                    </div>
                    
                </WidgetField>

                <WidgetField className="d-flex align-items-center">
                    <div className="label">{fields.originPlace.label} </div>

                    <div className="flex-fill">
                        <InputMegaBox 
                            name = {fields.originPlace.nameInput} 
                            listOption = {fields.originPlace.database} 
                            indexSelected = {fields.originPlace.indexSelected} 
                        />
                    </div>
                    
                </WidgetField>

                
            </OptionalFields>
            
        </WidgetContent>
    );
}

export default WidgetAddInformation;
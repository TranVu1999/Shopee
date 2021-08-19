import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import InputLimitBox from '../../components/InputLimitBox';

const WidgetContent = styled.div``;

const FormClassify = styled.div`
    position: relative;
    padding: 1.5rem 1.5rem;
    width: 60%;

    background-color: #FAFAFA;

    button.close{
        position: absolute;
        right: 0rem;
        top: 0rem;
    }

    .row-input{
        margin-bottom: .5rem;

        .label{
            max-width: 5rem;
        }

        .control-button{
            display: flex;
            justify-content: flex-end;
            width: 2.5rem;

            svg{
                height: 1rem;
                width: 1rem;
                fill: #999;
            }
        }
    }
`;

const ButtonAdd = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: .5rem .875rem;
    width: 100%;

    color: #1791f2;
    background-color: transparent;
    border: 1px dashed #1791f2;
    border-radius: 4px;

    span{
        margin-right: .5rem;
        font-size: 1.125rem;
    }

`;


// Icons
const iconTrash = <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero"><path d="M14.516 3.016h-4v-1a.998.998 0 0 0-.703-.955.99.99 0 0 0-.297-.045h-3a.998.998 0 0 0-.955.703.99.99 0 0 0-.045.297v1h-4a.5.5 0 1 0 0 1h1v10a.998.998 0 0 0 .703.955.99.99 0 0 0 .297.045h9a.998.998 0 0 0 .955-.703.99.99 0 0 0 .045-.297v-10h1a.5.5 0 1 0 0-1zm-8-1h3v1h-3v-1zm6 12h-9v-10h9v10z"></path><path d="M5.516 12.016a.5.5 0 0 0 .5-.5v-4a.5.5 0 1 0-1 0v4a.5.5 0 0 0 .5.5zM8.016 12.016a.5.5 0 0 0 .5-.5v-5a.5.5 0 1 0-1 0v5a.5.5 0 0 0 .5.5zM10.516 12.016a.5.5 0 0 0 .5-.5v-4a.5.5 0 1 0-1 0v4a.5.5 0 0 0 .5.5z"></path></g></svg>


WidgetClassifyInput.propTypes = {
    
};

function WidgetClassifyInput(props) {
    // Data
    const [listClassify, setListClassify] = useState({
        first: {
            label: "Nhóm phân loại 1",
            isOpen: true,
            classifyName: "",
            listType: ["", ""]
        },
        second: {
            label: "Nhóm phân loại 2",
            isOpen: true,
            classifyName: "",
            listType: [""]
        }
    });

    const [tablePrice, setTablePrice] = useState([
        {
            firstClassifyName: "",
            secondClassifyName: "",
            price: 0,
            sku: "",
            inventory: 0
        }
    ]);

    // handle event
    const handleCloseForm = () =>{
        let tempState = {...listClassify};

        if(tempState.second.isOpen){
            tempState.second.isOpen = false;
            setListClassify(tempState);
        }
    }

    // render
    const renderListTypeOfClassify = listType =>{
        const lengthType = listType.length;

        if(lengthType === 1){
            return (
                <div className="d-flex row-input">
                    <div className="label">Phân loại hàng</div>

                    <div className="flex-fill">
                        <InputLimitBox limit={14} value=""/>
                    </div>

                    <div className="control-button">
                    </div>
                </div>
            );
        }
        
        return listType.map((item, index) =>{
            return (
                <div className="d-flex row-input">
                    
                    <div className="label">
                        {index === 0 && "Phân loại hàng"}
                    </div>

                    <div className="flex-fill">
                        <InputLimitBox limit={14} value={item}/>
                    </div>

                    <div className="align-items-stretch d-flex align-items-center control-button">
                        <button>{iconTrash}</button>
                    </div>
                </div>
            );
        });
    }

    const renderListFormClassify = () =>{
        let elm = [];

        for(let key in listClassify){
            if(listClassify[key].isOpen){
                elm.push(
                    <div className="widget-input-row">
                        <div className="label">{listClassify[key].label}</div>
    
                        <FormClassify>
                            <button 
                                className = "close"
                                onClick = {handleCloseForm}
                            ><span aria-hidden="true" className="icon_close"></span></button>

                            <div className="d-flex row-input">
                                <div className="label">Tên nhóm phân loại</div>
                                <div className="flex-fill">
                                    <InputLimitBox limit={14} value=""/>
                                </div>
                            </div>
                            <div className="mb-4"></div>

                            {renderListTypeOfClassify(listClassify[key].listType)}
    
                            {/* Button */}
                            <div className="d-flex row-input">
                                <div className="label"></div>
    
                                <div className="flex-fill">
                                    <ButtonAdd>
                                        <span aria-hidden="true" className="icon_plus_alt2"></span>
                                        Thêm phân loại hàng
                                    </ButtonAdd>
                                </div>
    
                                <div className="control-button">
                                </div>
                            </div>
                        </FormClassify>
    
                    </div>
                );
            }
            
        }

        return elm;
    }

    return (
        <WidgetContent>
            {renderListFormClassify()}
            
        </WidgetContent>
    );
}

export default WidgetClassifyInput;
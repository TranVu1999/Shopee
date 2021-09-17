import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// icons
const iconTrash = <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero"><path d="M14.516 3.016h-4v-1a.998.998 0 0 0-.703-.955.99.99 0 0 0-.297-.045h-3a.998.998 0 0 0-.955.703.99.99 0 0 0-.045.297v1h-4a.5.5 0 1 0 0 1h1v10a.998.998 0 0 0 .703.955.99.99 0 0 0 .297.045h9a.998.998 0 0 0 .955-.703.99.99 0 0 0 .045-.297v-10h1a.5.5 0 1 0 0-1zm-8-1h3v1h-3v-1zm6 12h-9v-10h9v10z"></path><path d="M5.516 12.016a.5.5 0 0 0 .5-.5v-4a.5.5 0 1 0-1 0v4a.5.5 0 0 0 .5.5zM8.016 12.016a.5.5 0 0 0 .5-.5v-5a.5.5 0 1 0-1 0v5a.5.5 0 0 0 .5.5zM10.516 12.016a.5.5 0 0 0 .5-.5v-4a.5.5 0 1 0-1 0v4a.5.5 0 0 0 .5.5z"></path></g></svg>

const WidgetContent = styled.div`
    padding: 1rem 2rem;
    background-color: #fafafa;
    color: #999;
    border-radius: 2px;
`;

const Head = styled.div`
`;

const Body = styled.div``;

const Row = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    &>div{
        margin-right: 1rem;
    }

    div.span{
        width: 100px;
    }

    div.input{
        flex: 1;
    }

    div.action{
        width: 1rem;

        svg{
            width: 16px;
            height: 16px;
            fill: #999;
        }
    }

    .notify{
        padding: .125rem .875rem;
        margin-top: 1rem;

        background-color: #ffe9e8;
        color: #666;

        border: 1px solid #ff736f;
        border-radius: 4px;
    }
`;

const Input = styled.div`
    padding: .25rem .875rem;
    
    background-color: #fff;

    border-radius: 4px;
    border: 1px solid #e5e5e5;
`;

const Foot = styled.div`

`;

WidgetGroupPrice.propTypes = {
    handleNotSave: PropTypes.func.isRequired,
};

function WidgetGroupPrice({handleNotSave}) {
    // data
    const [listPrice, setListPrice] = useState([
        {
            from: 1,
            to: 2,
            price: 1000
        }
    ]);
    const [error, setError] = useState({
        message: "",
        index: 0,
        type: "from"
    });

    // handle event
    const handleAddNewRange = () =>{
        const lengthListPrice = listPrice.length;

        let newListPrice = [...listPrice, {
            from: listPrice[lengthListPrice - 1].to + 1,
            to: listPrice[lengthListPrice - 1].to + 2,
            price: listPrice[lengthListPrice - 1].price + 1000,
        }];

        setListPrice(newListPrice);
    }

    const handleChangeValue = (type, value, index) =>{
        value = Number(value);
        let newListPrice = [...listPrice];
        newListPrice[index][type] = value;

        if(type === "from"){
            newListPrice[index]["to"] = value + 1;
        }

        const lengthListPrice = listPrice.length;
        for(let i = index + 1; i < lengthListPrice; i++){
            newListPrice[i]["from"] = newListPrice[i-1]["to"] + 1;
            newListPrice[i]["to"] = newListPrice[i]["from"] + 1;
            newListPrice[i]["price"] = newListPrice[i-1]["price"] + 1000;
        }

        setListPrice(newListPrice);
        
    }

    const handleRemovePrice = index =>{
        if(listPrice.length === 1){
            handleNotSave();
            return;
        }

        let newListPrice = [...listPrice];
        newListPrice.splice(index, 1);
        setListPrice(newListPrice);
    }


    // render
    const renderListPrice = () =>{
        return listPrice.map((item, index) =>{
            return (
                <Row key = {item.from}>
                    <div className="span">{index + 1}. Khoảng giá {index + 1}</div>
                    <div className = "input">
                        <Input>
                            <input 
                                type="text" 
                                placeholder="Từ (sản phẩm)"
                                value = {item.from}
                                onChange = {(event) => handleChangeValue("from", event.target.value, index)}
                            />
                        </Input>
                    </div>
                    <div className = "input">
                        <Input>
                            <input 
                                type="text" 
                                placeholder="Đến (sản phẩm)"
                                value = {item.to}
                                onChange = {(event) => handleChangeValue("to", event.target.value, index)}
                            />
                        </Input>
                    </div>
                    <div className = "input">
                        <Input>
                            <input 
                                type="text" 
                                placeholder="Đơn giá"
                                value = {item.price}
                                onChange = {(event) => handleChangeValue("price", event.target.value, index)}
                            />
                        </Input>
                    </div>
                    <div className="action">
                        <div 
                            className="button-control"
                            onClick = {() => handleRemovePrice(index)}
                        >{iconTrash}</div>
                    </div>
                </Row>
            );
        });
    }

    return (
        <WidgetContent>
            <Head>
                <Row>
                    <div className = "span"></div>
                    <div className = "input">Từ (sản phẩm)</div>
                    <div className = "input">Đến (sản phẩm)</div>
                    <div className = "input">Đơn giá</div>
                    <div className = "action"></div>
                </Row>
            </Head>

            <Body> {renderListPrice()} </Body>

            <Foot>
                <Row>
                    <div className="span"></div>
                    <div className="input">
                        <div 
                            className="button-add"
                            onClick = {handleAddNewRange}
                        >
                            <span className="icon_plus_alt2"></span>
                            Thêm khoảng giá
                        </div>
                        {error.message && <div className="notify">{error.message}</div>}
                    </div>
                    <div className="action"></div>
                </Row>
            </Foot>
        </WidgetContent>
    );
}

export default WidgetGroupPrice;

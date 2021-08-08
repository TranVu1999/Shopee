import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TransportItemInfo from './TransportItemInfo';

const WidgetContent = styled.div``;

const Title = styled.div`
    padding: 1.125rem 1.5rem;
    svg{
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 1.5rem;
        fill: #999;
    }

    h5{
        margin: 0;
        font-size: 1.125rem;
        font-weight: 600;
        color: #333;
    }

    p{
        font-size: .875rem;
        color: #999;
    }
`;

const ListTransport = styled.div`
    padding: 0 1.5rem 1.5rem 4.5rem;
`;

ChoseTransport.propTypes = {
    listTransport: PropTypes.array.isRequired,
};

function ChoseTransport({listTransport}) {

    // Render 
    const renderTransportItem = () =>{
        return listTransport.map(item => {
            return (
                <TransportItemInfo key={item.id} content={item}/>
            );
        });
    }
    return (
        <WidgetContent>
            <Title className="d-flex">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M12.441 1a1 1 0 01.852.476l1.559 2.533a1 1 0 01.138.386l.002.015c.005.03.008.06.008.09v.014a1 1 0 010 .019V13a1 1 0 01-1 1H2a1 1 0 01-1-1V4.514 4.5l.008-.09L1 4.533a1 1 0 01.148-.524l1.56-2.533A1 1 0 013.557 1h8.883zM14 5H2v8h12V5zm-1.5 5a.5.5 0 110 1h-6a.5.5 0 110-1h6zm0-2a.5.5 0 110 1h-4a.5.5 0 010-1h4zm-5-6H3.559L2.328 4H7.5V2zm4.941 0H8.5v2h5.172l-1.23-2z"></path></svg>

                <div>
                    <h5>Phương thức vận chuyển </h5>
                    <p>Với các tùy chọn giao hàng được Shopee hỗ trợ, người mua sẽ được Shopee thông báo về thông tin theo dõi mới nhất của các đơn hàng của họ. </p>
                </div>
            </Title>

            <ListTransport>{renderTransportItem()}</ListTransport>

        </WidgetContent>
    );
}

export default ChoseTransport;
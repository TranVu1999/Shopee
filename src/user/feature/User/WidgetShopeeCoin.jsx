import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Theme
import { BorderColor } from "./../../theme";

// Components
import WidgetNotifyPopup from "./../../common/component/NotifyPopup";

const WidgetContent = styled.div`
    font-size: 16px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const Title = styled.div`
  padding: 1.125em 1.5em;
  font-size: 0.875em;
  border-bottom: 1px solid ${BorderColor.mainColor};
`;

const WidgetLeft = styled.div`
  img {
    height: 3em;
    width: 3em;
  }

  p {
    margin: 0;
    font-size: 1.25em;
    color: #eda500;
  }

  .number {
    margin: 0 0.5em;
    font-size: 2em;
    font-weight: 600;
    color: #eda500;
  }
`;

const WidgetRight = styled.div`
  color: #eda500;
  span {
    margin-left: 0.25em;
    font-weight: 500;
    font-size: 1.5em;
  }
`;

const WidgetListCoin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 37.5em;

  font-size: 0.875em;
`;

const ButtonQuestion = styled.a`
  display: inline-block;
  padding: 0.625rem 1.125rem;
  margin-top: 1em;

  background-color: #ee4d2d;
  color: #fff;

  border-radius: 2px;
`;

WidgetShopeeCoin.propTypes = {};

function WidgetShopeeCoin(props) {
  return (
    <WidgetContent className="page-user--content">
      <Title className="d-flex align-items-center justify-content-between">
        <WidgetLeft>
          <div className="d-flex">
            <img
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/75efaf1b556a8e2fac6ab9383e95d4e3.png"
              alt="coin"
            />
            <div className="d-flex align-items-center">
              <span className="number">0</span>
              <div>
                <p>
                  Xu đang có <WidgetNotifyPopup />
                </p>
                <a href="#/">0 Shopee Xu sẽ hết hạn vào --</a>
              </div>
            </div>
          </div>
        </WidgetLeft>
        <WidgetRight>
          <a href="#/" className="d-flex align-items-center">
            Nhận thêm Xu!
            <span className="arrow_carrot-right"></span>
          </a>
        </WidgetRight>
      </Title>

      <WidgetListCoin>
        <div className="text-center">
          <p>Bạn chưa có Xu nào.</p>
          <ButtonQuestion href="#/">Làm sao để kiếm Xu?</ButtonQuestion>
        </div>
      </WidgetListCoin>
    </WidgetContent>
  );
}

export default WidgetShopeeCoin;

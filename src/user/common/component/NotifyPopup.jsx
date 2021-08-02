import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Theme
import { BorderColor } from "./../../theme";

const WidgetContent = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 0.75em;
  font-size: 16px;
  span {
    font-size: 0.75em;
    color: #666;
  }

  &:hover {
    .notify {
      display: block;
    }
  }
`;

const WidgetNotify = styled.div`
  position: absolute;
  top: 130%;
  left: 50%;
  transform: translate(-50%, 0);

  display: none;
  min-width: 350px;
  padding: 1em 1em;

  font-size: 0.875rem;

  color: rgba(0, 0, 0, 0.8);
  background-color: #fff;

  border: 1px solid ${BorderColor.mainColor};
  line-height: 22px;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%) rotateZ(45deg);

    display: block;
    height: 1rem;
    width: 1rem;

    background-color: #fff;
    border-top: 1px solid ${BorderColor.mainColor};
    border-left: 1px solid ${BorderColor.mainColor};
  }
`;

NotifyPopup.propTypes = {
  content: PropTypes.string,
};

NotifyPopup.defaultProps = {
  content: "",
};

function NotifyPopup(props) {
  return (
    <WidgetContent>
      <span className="icon_question_alt2"></span>
      <WidgetNotify className="notify">
        Đây là số dư Xu của bạn. Bạn có thể kiếm thêm xu bằng nhiều cách tại
        Shopee nhé! Bấm Tìm Hiểu Thêm để xem chi tiết.
      </WidgetNotify>
    </WidgetContent>
  );
}

export default NotifyPopup;

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Theme
import { BorderColor } from "./../theme";

const WidgetContent = styled.div`
  position: relative;
  display: inline-block;
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
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: none;
  min-width: 350px;
  padding: .25rem .875rem;

  font-size: 0.875rem;

  color: rgba(0, 0, 0, 0.8);
  background-color: #fff;

  border: 1px solid ${BorderColor.mainColor};
  border-radius: 4px;
  line-height: 22px;
  box-shadow: rgb(99 99 99 / 20%) 0px 2px 8px 0px;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%) rotateZ(45deg);

    display: block;
    height: .5rem;
    width: .5rem;

    background-color: #fff;
  }
`;

NotifyPopup.propTypes = {
    content: PropTypes.string.isRequired,
};

function NotifyPopup({content}) {
    return (
        <WidgetContent>
            <span className="icon_question_alt2"></span>
            <WidgetNotify className="notify">
                {content}
            </WidgetNotify>
        </WidgetContent>
    );
}

export default NotifyPopup;

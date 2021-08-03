import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const WidgetContent = styled.div`
  background: url(https://help.shopee.vn/s/sfsites/c/file-asset/ShopeeSG_Banner?v=1)
    center center/cover;
  min-height: 370px;
  font-size: 16px;
`;

const FormSearch = styled.div`
  min-width: 550px;
  background-color: #fff;
  padding: 0.5em 1em;
  border-radius: 4px;

  input,
  .input-group-text {
    border: none;
  }

  .input-group-text span {
    font-size: 1.5em;
    font-weight: 800;
  }
`;

Hero.propTypes = {};

function Hero(props) {
  return (
    <WidgetContent className="d-flex align-items-center justify-content-center">
      <FormSearch>
        <div className="input-group">
          <div className="input-group-prepend">
            <button className="input-group-text">
              <span className="icon_search"></span>
            </button>
          </div>
          <input type="text" className="form-control" placeholder="Search" />
        </div>
      </FormSearch>
    </WidgetContent>
  );
}

export default Hero;

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Theme 
import {BorderColor} from './../../theme';

const WidgetContent = styled.div`
    font-size: 16px;
`;

const Title = styled.h5`
    margin-bottom: 1em;
    font-size: 1.5em;
    text-transform: capitalize;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.8);
`;

const ListTopic = styled.ul`
    border-right: 1px solid ${BorderColor.mainColor};
    li {
        padding: .5em 0 .75em;
        color: rgba(0,0,0,.87);  
        cursor: pointer;
    }
`;

Sidebar.propTypes = { items: PropTypes.array };
Sidebar.defaultProps = { items: [] };
function Sidebar(props) {
  const { items } = props;

  //   Render
  const renderTopic = () => {
    return items.map((item) => {
      return <li key={item.id}>{item.title}</li>;
    });
  };

  return (
    <WidgetContent>
      <Title>Danh mục</Title>
      <ListTopic>{renderTopic()}</ListTopic>
    </WidgetContent>
  );
}

export default Sidebar;

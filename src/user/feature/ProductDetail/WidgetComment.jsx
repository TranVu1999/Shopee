import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import WidgetCommentStatistics from './WidgetCommentStatistics';
import WidgetCommentItems from './WidgetCommentItems';

const CommentBox = styled.div`
    padding: 1.4rem 1.5rem;
`;

WidgetComment.propTypes = {
    commentStatistics: PropTypes.element,
};

WidgetComment.defaultProps = {
    commentStatistics: <></>,
}

function WidgetComment(props) {
    const {commentStatistics} = props;

    return (
        <CommentBox className = "bg-white">
            <h5 className = "page-product__content--header">ĐÁNH GIÁ SẢN PHẨM</h5> 
            {commentStatistics}

            <div className="mb-4"></div>
            <WidgetCommentItems/>
            <hr />
            <WidgetCommentItems/>
            <hr />
            <WidgetCommentItems/>
            <hr />
            <WidgetCommentItems/>
            <hr />
            <WidgetCommentItems/>
            <hr />
            <WidgetCommentItems/>
        </CommentBox>
    );
}

export default WidgetComment;
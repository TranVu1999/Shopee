import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import WidgetCommentStatistics from './WidgetCommentStatistics';
import WidgetCommentItems from './WidgetCommentItems';

const CommentBox = styled.div`
    padding: 1.4rem 1.5rem;
`;

const WidgetEmpty = styled.div`
    height: 300px;
`;

WidgetComment.propTypes = {
    comments: PropTypes.array,
    commentStatistics: PropTypes.element,
};

WidgetComment.defaultProps = {
    comments: [],
    commentStatistics: <></>,
}

function WidgetComment({commentStatistics, comments}) {

    return (
        <CommentBox className = "bg-white">
            <h5 className = "page-product__content--header">ĐÁNH GIÁ SẢN PHẨM</h5> 

            {!comments.length && <WidgetEmpty className="d-flex align-items-center justify-content-center">
                <span>Chưa có nhận xét nào về sản phẩm này!</span>
            </WidgetEmpty>}

            {comments.length > 0 && <>
                {commentStatistics}
                <div className="mb-4"></div>
                <WidgetCommentItems/>
                <hr />
                <WidgetCommentItems/>
                <hr />
                <WidgetCommentItems/>
                <hr />
            </>}
            
        </CommentBox>
    );
}

export default WidgetComment;
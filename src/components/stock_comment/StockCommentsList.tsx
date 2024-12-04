// src/components/stock_comment/StockCommentsList.tsx

import React from 'react';
import { CommentGet } from '../../models/Comment';
import StockCommentsListItem from './StockCommentsListItem';

type Props = {
    comments: CommentGet[]
}

const StockCommentsList = ({ comments }: Props) => {
  return (
    <>
      {comments && comments.length > 0 ? (
        comments.map((comment, index) => (
          <StockCommentsListItem key={index} comment={comment} />
        ))
      ) : (
        "No comments yet"
      )}
    </>
  );
}

export default StockCommentsList;

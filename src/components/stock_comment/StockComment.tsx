import React, { useEffect, useState } from 'react'
import StockCommentForm from './StockCommentForm'
import { commentGetAPI, commentPostAPI } from '../../services/CommentService';
import { toast } from 'react-toastify';
import { CommentGet } from '../../models/Comment';
import LoadingSpinner from '../loading_spinners/LoadingSpinner';
import StockCommentsList from './StockCommentsList';

type Props = {
    stockSymbol: string
}

type CommentFormInputs = {
    title: string,
    content: string
};

const StockComment = ({stockSymbol}: Props) => {
  const [comments, setComments] = useState<CommentGet[] | null>([]);
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    getComments();
  }, []);

  const handleComment = (event: CommentFormInputs) => {
    commentPostAPI(event.title, event.content, stockSymbol)
    .then((response) => {
        if(response) {
            toast.success("Comment created successfullly");
            getComments();
        }
    })
    .catch((error) => {
        toast.warning(error);
    });
  }

  const getComments = () => {
    setLoading(true);
    commentGetAPI(stockSymbol)
    .then((response) => {
        setLoading(false);
        setComments(response?.data!);
    })
  }

  return (
    <div className='flex flex-col'>
        {loading ? <LoadingSpinner /> : <StockCommentsList comments={comments!}/>}
        <StockCommentForm symbol={stockSymbol} handleComment={handleComment}/>
    </div>
  )
}

export default StockComment
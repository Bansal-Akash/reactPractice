import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import purchase_book from './reduxContainer/BookAction';

export default function BookContainer() {
    const books = useSelector(state => state.NumberOfBooks);
    const dispatch = useDispatch();
  return (
    <>
    <div>BookContainer</div>
    <div>Total number of books are: {books}</div>
    <div><button onClick={() => {dispatch(purchase_book())}}>Buy Book</button></div>
    </>
  )
}

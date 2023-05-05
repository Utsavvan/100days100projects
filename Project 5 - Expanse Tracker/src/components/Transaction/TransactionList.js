import {useDispatch} from 'react-redux';
import {addTransaction} from '../../utils/store/TransactionSlice';
import { useSelector } from "react-redux";

import {useState} from 'react';

const TransactionList = () => {

    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);

    const dispatch = useDispatch();

    const transactions = useSelector(store => store.Transaction.transactions);

    function handleSubmitTransaction (e) {
        e.preventDefault();
        dispatch(addTransaction({
            id: transactions.length + 1,
            value: Number(amount),
            text : text
        }))
    }

  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={handleSubmitTransaction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" value={text} onChange={e => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" id="amount" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default TransactionList;

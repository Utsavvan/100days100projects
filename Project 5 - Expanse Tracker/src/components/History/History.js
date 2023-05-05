import { useSelector } from "react-redux";

import { removeTransaction } from "../../utils/store/TransactionSlice";

import { useDispatch } from "react-redux";

const History = () => {
  const transactions = useSelector((store) => store.Transaction.transactions);

  const dispatch = useDispatch();

  function handleDeleteClick(id) {
    dispatch(removeTransaction(id));
  }

  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <li key = {transaction.id} className={Math.sign(transaction?.value) === 1 ? "plus" : "minus"}>
            {transaction?.text}{" "}
            <span>
              {Math.sign(transaction?.value) === 1 ? "+" : "-"}$
              {Math.abs(transaction?.value)}
            </span>
            <button
              className="delete-btn"
              onClick={() => {
                handleDeleteClick(transaction?.id);
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default History;

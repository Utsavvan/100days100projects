import { useSelector } from "react-redux";

import TransactionStore from "../../utils/store/TransactionStore";

const Header = () => {
  const transactions = useSelector((store) => store.Transaction.transactions);

  const values = transactions.map((transaction) => transaction.value);

  const totalBalance = values.reduce((acc, cur) => {
    return (acc += cur);
  });

  const income = values.reduce((acc, cur) => {
    return cur >= 0 ? (acc += cur) : acc;
  }, 0);

  const expanse = values.reduce((acc, cur) => {
    return cur <= 0 ? (acc += cur) : acc;
  }, 0);


  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${totalBalance}</h1>

      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">
            +${income}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">
            -${expanse}
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;

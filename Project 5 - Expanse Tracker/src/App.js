import { createRoot } from "react-dom/client";

import './App.css';

import Header from "./components/Header/Header";
import History from "./components/History/History";
import TransactionList from './components/Transaction/TransactionList';

import TransactionStore from './utils/store/TransactionStore';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={TransactionStore}>
      <h2>Expense Tracker</h2>
      <div className="container">
        <Header/>
        <History/>
        <TransactionList/>
      </div>
    </Provider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

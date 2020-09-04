import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";
import "./styles.css";

function App() {
  return (
    <GlobalProvider>
      <Header />{" "}
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

// Traversy Media - Build an Expense Tracker | React Hooks & Context API
// 15:06
export default App;

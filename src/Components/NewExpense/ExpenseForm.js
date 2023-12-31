import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // console.log(
    //   "Item Name:-",
    //   enteredTitle,
    //   "Item Amount:-",
    //   enteredAmount,
    //   "Item Date:-",
    //   enteredDate
    // );

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setIsOpen(false);
  };

  const onCancelHandler = () => {
    setIsOpen(false);
  }

  const onAddNewExpenseHandler = () => {
    setIsOpen(true);
  }

  return (
    <div>
      {!isOpen && (
        <div className="add-new-expense__actions">
          <button type="submit" onClick={onAddNewExpenseHandler}>Add New Expense</button>
        </div>
      )}

      {isOpen && (
        <form onSubmit={onSubmitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                name="item"
                value={enteredTitle}
                onChange={(e) => setEnteredTitle(e.target.value)}
                placeholder="Item Name"
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                name="amount"
                value={enteredAmount}
                onChange={(e) => setEnteredAmount(e.target.value)}
                placeholder="Item Amount"
                min="0.01"
                step="0.01"
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                name="date"
                value={enteredDate}
                onChange={(e) => setEnteredDate(e.target.value)}
                placeholder="Item Date"
                min="2019-01-01"
                max="2024-12-31"
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="submit" onClick={onCancelHandler}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ExpenseForm;

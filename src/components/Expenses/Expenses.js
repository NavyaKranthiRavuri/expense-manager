import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = props => {
    const [filterYear, setFilterYear] = useState('2020');

    const filterSelectHandler = (year) => {
        setFilterYear(year);
    };

    const filteredExpenses = props.items.filter(item => {
        return item.date.getFullYear().toString() === filterYear;
    });

    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter filterYear={filterYear} onFilterSelect={filterSelectHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </li>
    );
}

export default Expenses;
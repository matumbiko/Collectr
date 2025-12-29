import React, { useState } from "react";
// closed brackets are used for lists //
import {Link} from "react-router-dom";





const CurrentDebtors = [
    {id : 1, name : "Matumbiko Nyimbili", totalAmountOwed: 50000, creditor : "Zanaco", amountPaid : 45000, balance : 5000, dueDate : "12-07-2025"},
    {id : 2, name : "Sarah jefferson", totalAmountOwed: 100000, creditor : "Zanaco", amountPaid : 450000, balance : 50000, dueDate : "12-07-2025"},

];
const Dashboard = () => {
  // State to hold debtor data
  const [debtors, setDebtors] = useState(CurrentDebtors);
 

// Function to mark a payment as done
  const markPaid = (id) => {
    setDebtors(debtors.filter((debtor) => debtor.id !== id));
  };

  return (
    <div style={{ maxWidth: "800px", margin: "50px auto" }}>
      <u><h1>Dashboard</h1></u>
      <u><h2> Debtor info: </h2></u>
      <button><Link to="/">🏠 Home</Link></button>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>id</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>totalAmountOwed</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>creditor</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>amountPaid</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>balance</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>dueDate</th>
            
          </tr>
        </thead>
        <tbody>
          {debtors.map((debtor) => (
            <tr key={debtor.id}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{debtor.id}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{debtor.name}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{debtor.totalAmountOwed}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{debtor.creditor}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{debtor.amountPaid}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{debtor.balance}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{debtor.dueDate}</td>
            

              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <button onClick={() => markPaid(debtor.id)}>Mark Paid</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {debtors.length === 0 && <p>All debts have been collected!</p>}
    </div>
   
  );
};


export default Dashboard;
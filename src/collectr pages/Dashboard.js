import React, { useState } from "react";
// closed brackets are used for lists //
import {Link} from "react-router-dom";

  import "./Dashboard.css";




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

      {/* Render StatCards */}
      <Boxes />
     <div className = "profile-corner">
  
    <img src = "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" alt = "Profile" className = "profile-icon"/>
     <div className = "profile-menu">
      <p>Notifications</p>
      <p>Settings</p>
      <p>Sign out</p>
    </div>
  </div>
     
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
           
           
           
         <p>
          
            <Link to="/" style = {{color:"#0000FF",backgroundColor: "#3B82F6",
      padding: "10px 16px",
      borderRadius: "8px", textDecoration: "blue", display: "inline-block"}}> Home </Link>
            
            </p>

        </tbody>
      </table>

      {debtors.length === 0 && <p>All debts have been collected!</p>}
    </div>
   
  );
};
function StatCard({ title, value }) {
  return (
    <div className="stat-card">
      <p className="stat-title">{title}</p>
      <h5 className="stat-value">{value}</h5>
    </div>
  );
};

  export function Boxes (){
  return (
    <div className="stats-container">
     <StatCard title="Total Debtors" value="512" />
      <StatCard title="Outstanding Debt" value="ZMW 1,250,000" />
      <StatCard title="Total Collections Today" value="ZMW 15,000" />
           
    </div>
  );
  

};

export default Dashboard;
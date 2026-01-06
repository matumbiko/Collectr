import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import PieChat from "../collectr pages/piechat";

const CurrentDebtors = [
  {Number : "1", Loanid: "242", name: "Matumbiko Nyimbili", totalAmountOwed: 50000, creditor: "Zanaco", amountPaid: 45000, dueDate: "12-07-2025"},
  { Number: "2", Loanid: "232", name: "Sarah jefferson", totalAmountOwed: 1000000, creditor: "Zanaco", amountPaid: 450000, dueDate: "12-07-2025"},
 { Number: "3", Loanid: "563", name: "John Doe", totalAmountOwed: 20000, creditor: "FNB", amountPaid: 15000, dueDate: "01-12-2025" },
  { Number: "4",Loanid: "994", name: "Jane Smith", totalAmountOwed: 50000, creditor: "FNB", amountPaid: 50000,  dueDate: "15-12-2025" },
  { Number:"5", Loanid: "345", name: "Peter Pan", totalAmountOwed: 75000, creditor: "FNB", amountPaid: 50000, dueDate: "20-12-2025" },
  { Number:"6", Loanid: "126", name: "Mary Jane", totalAmountOwed: 30000, creditor: "FNB", amountPaid: 10000, dueDate: "22-12-2025" },
  { Number:"7", Loanid: "127", name: "Alice Wonder", totalAmountOwed: 60000, creditor: "Ecobank", amountPaid: 40000, dueDate: "25-12-2025" },
  {Number:"8", Loanid: "558", name: "Bob Builder", totalAmountOwed: 45000, creditor: "Barclays", amountPaid: 45000, dueDate: "28-12-2025" },
  // add more if needed
];

const Dashboard = () => {
  const [debtors, setDebtors] = useState(CurrentDebtors);
  const [searchTerm, setSearchTerm ] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 2; // pagination
  const [sortConfig, setSortConfig] = useState({ key: "id", direction: "asc" });
  const computedDebtors = debtors.map(d => {
  const balance = d.totalAmountOwed - d.amountPaid;

  return {
    ...d,
    balance,
    status: balance === 0 ? "Paid" : "Outstanding",
  };
});


  // Mark payment done
  const markPaid = (Number) => setDebtors(debtors.filter(d => d.Number !== Number));

  // Apply search and filter
  const filteredDebtors = computedDebtors.filter(
    d =>
    (
      (d.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.creditor?.toLowerCase().includes(searchTerm.toLowerCase())) ||
        d.Loanid.toLowerCase().includes(searchTerm.toLowerCase()) 
) &&
      (!filterStatus || d.status === filterStatus)
);

  // Apply sorting
  const sortedDebtors = [...filteredDebtors].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  // Pagination slice
  const paginatedDebtors = sortedDebtors.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
  const totalPages = Math.ceil(sortedDebtors.length / rowsPerPage);

  // Change sort
  const requestSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "50px auto" }}>
      <div className="title"><u><h1>Dashboard</h1></u></div>

      <Boxes />

      {/* Search bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange= {(e) => {setSearchTerm(e.target.value); 
           
            setCurrentPage(1);
          }}
          className="search-input"
        />
      </div>

      {/* Filter bar */}
      <div className="filter-container">
        <select value={filterStatus} onChange={(e) =>{ setFilterStatus(e.target.value);
        setCurrentPage(1);
        }}>
          <option value="">sort: ALL Status</option>
          <option value="Paid">Paid</option>
          <option value="Outstanding">Outstanding</option>
        </select>
      </div>

      <div className="profile-corner">
        <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" alt="Profile" className="profile-icon" />
        <div className="profile-menu">
          <p>Notifications</p>
          <p>Settings</p>
          <p>Sign out</p>
        </div>
      </div>

       {/* Table with top-right pagination */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "8px" }}>
          <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>Prev</button>
          <span style={{ margin: "0 8px" }}>Page {currentPage} / {totalPages}</span>
          <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}>Next</button>
        </div>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px" }} onClick={() => requestSort("Number")}>No.</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }} onClick={() => requestSort("Loanid")}>Loan ID</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }} onClick={() => requestSort("name")}>Name</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }} onClick={() => requestSort("totalAmountOwed")}>Total Owed</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }} onClick={() => requestSort("creditor")}>Creditor</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }} onClick={() => requestSort("amountPaid")}>Paid</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }} onClick={() => requestSort("balance")}>Balance</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }} onClick={() => requestSort("dueDate")}>Due Date</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedDebtors.map(d => (
              <tr key={d.Number}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{d.Number}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{d.Loanid}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{d.name}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{d.totalAmountOwed}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{d.creditor}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{d.amountPaid}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{d.balance}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{d.dueDate}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <button onClick={() => markPaid(d.Number)}>Mark Paid</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {debtors.length === 0 && <p>All debts have been collected!</p>}

      <p>
        <div className="return-button">
          <Link to="/" style={{
            color: "#0000FF",
            backgroundColor: "#3B82F6",
            padding: "10px 16px",
            borderRadius: "8px",
            textDecoration: "blue",
            display: "inline-block"
          }}> Home </Link>
        </div>
      </p>
    </div>
  );
};

function StatCard({ title, value, children }) {
  return (
    <div style={{ maxWidth: "600px", margin: "50px auto" }}>
      <div className="stat-card">
        <p className="stat-title"><u>{title}</u></p>
        <h5 className="stat-value">{value}</h5>
        <h5 className="stat-value">{children}</h5>
      </div>
    </div>
  );
}

export function Boxes() {
  const Monday = 180000;
  const Tuesday = 70000;
  const Wednesday = 5039;
  const Thursday = 3884;
  const Friday = 2891;

  return (
    <div className="stats-container">
      <StatCard title="Total Debtors" value="512" />
      <StatCard title="Outstanding Debt" value="ZMW 1,250,000" />
      <StatCard title="Total Collections Today" value="ZMW 15,000" />
      <StatCard title="Daily Collections">
        <PieChat Monday={Monday} Tuesday={Tuesday} Wednesday={Wednesday} Thursday={Thursday} Friday={Friday} />
      </StatCard>
    </div>
  );
}

export default Dashboard;

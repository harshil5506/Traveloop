import React from "react";

export default function BudgetBreakdown() {
  const expenses = [
    {
      category: "Flights",
      amount: "₹35,000",
      percentage: "40%",
    },

    {
      category: "Hotels",
      amount: "₹25,000",
      percentage: "30%",
    },

    {
      category: "Food & Dining",
      amount: "₹10,000",
      percentage: "12%",
    },

    {
      category: "Activities",
      amount: "₹8,000",
      percentage: "10%",
    },

    {
      category: "Transport",
      amount: "₹5,000",
      percentage: "8%",
    },
  ];

  return (
    <>
      <div className="budget-page">
        {/* SIDEBAR */}
        <div className="sidebar">
          <div className="logo">
            <div className="logo-icon">◉</div>
            <h2>Traveloop</h2>
          </div>

          <div className="menu">
            <div className="menu-item">
              Dashboard
            </div>

            <div className="menu-item">
              My Trips
            </div>

            <div className="menu-item active">
              Budget Breakdown
            </div>

            <div className="menu-item">
              Itinerary
            </div>

            <div className="menu-item">
              Settings
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="main-content">
          {/* TOPBAR */}
          <div className="topbar">
            <div>
              <h1>Budget Breakdown</h1>

              <p>
                Track and manage your complete trip
                expenses.
              </p>
            </div>

            <button className="add-btn">
              + Add Expense
            </button>
          </div>

          {/* SUMMARY CARDS */}
          <div className="summary-grid">
            <div className="summary-card">
              <span>Total Budget</span>
              <h2>₹85,000</h2>
            </div>

            <div className="summary-card">
              <span>Total Spent</span>
              <h2>₹63,000</h2>
            </div>

            <div className="summary-card">
              <span>Remaining</span>
              <h2>₹22,000</h2>
            </div>
          </div>

          {/* MAIN GRID */}
          <div className="content-grid">
            {/* LEFT */}
            <div className="expense-section">
              <h2>Expense Categories</h2>

              {expenses.map((expense, index) => (
                <div className="expense-card" key={index}>
                  <div>
                    <span>{expense.category}</span>

                    <h3>{expense.amount}</h3>
                  </div>

                  <div className="percentage">
                    {expense.percentage}
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT */}
            <div className="analytics-section">
              <div className="chart-box">
                <h2>Spending Overview</h2>

                <div className="fake-chart">
                  <div className="bar one"></div>
                  <div className="bar two"></div>
                  <div className="bar three"></div>
                  <div className="bar four"></div>
                  <div className="bar five"></div>
                </div>
              </div>

              <div className="tips-box">
                <h2>Budget Tips</h2>

                <div className="tip-card">
                  <p>
                    Book flights early to reduce
                    overall travel expenses.
                  </p>
                </div>

                <div className="tip-card">
                  <p>
                    Luxury resorts often provide
                    bundled activity discounts.
                  </p>
                </div>

                <div className="tip-card">
                  <p>
                    Local transportation passes can
                    save up to 20%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:"Poppins",sans-serif;
        }

        body{
          background:#050816;
        }

        .budget-page{
          min-height:100vh;
          display:flex;
          background:#050816;
          color:white;
        }

        /* SIDEBAR */

        .sidebar{
          width:260px;
          background:#0b1020;
          border-right:1px solid rgba(255,255,255,0.08);
          padding:30px 20px;
        }

        .logo{
          display:flex;
          align-items:center;
          gap:12px;
          margin-bottom:50px;
        }

        .logo-icon{
          width:42px;
          height:42px;
          border-radius:12px;

          background:linear-gradient(
            135deg,
            #57c7ff,
            #8f7cff
          );

          display:flex;
          align-items:center;
          justify-content:center;
        }

        .logo h2{
          font-size:24px;
        }

        .menu{
          display:flex;
          flex-direction:column;
          gap:18px;
        }

        .menu-item{
          padding:14px 18px;
          border-radius:14px;
          color:rgba(255,255,255,0.7);
          cursor:pointer;
          transition:0.3s;
        }

        .menu-item:hover,
        .menu-item.active{
          background:rgba(255,255,255,0.08);
          color:white;
        }

        /* MAIN */

        .main-content{
          flex:1;
          padding:40px;
        }

        .topbar{
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:35px;
        }

        .topbar h1{
          font-size:42px;
          margin-bottom:8px;
        }

        .topbar p{
          color:rgba(255,255,255,0.6);
        }

        .add-btn{
          height:54px;
          padding:0 28px;
          border:none;
          border-radius:14px;

          background:linear-gradient(
            90deg,
            #57c7ff,
            #8f7cff
          );

          color:white;
          font-weight:600;
          cursor:pointer;
        }

        /* SUMMARY */

        .summary-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:24px;
          margin-bottom:35px;
        }

        .summary-card{
          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:24px;
          padding:28px;
          backdrop-filter:blur(20px);
        }

        .summary-card span{
          color:rgba(255,255,255,0.6);
        }

        .summary-card h2{
          margin-top:14px;
          font-size:34px;
          color:#57c7ff;
        }

        /* CONTENT */

        .content-grid{
          display:grid;
          grid-template-columns:1.5fr 1fr;
          gap:28px;
        }

        .expense-section,
        .chart-box,
        .tips-box{
          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:24px;
          padding:28px;
          backdrop-filter:blur(20px);
        }

        .expense-section h2,
        .chart-box h2,
        .tips-box h2{
          margin-bottom:28px;
        }

        .expense-card{
          background:rgba(255,255,255,0.04);
          border-radius:18px;
          padding:22px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:18px;
        }

        .expense-card span{
          color:rgba(255,255,255,0.6);
        }

        .expense-card h3{
          margin-top:8px;
          color:#57c7ff;
        }

        .percentage{
          background:rgba(255,255,255,0.08);
          padding:10px 16px;
          border-radius:50px;
        }

        /* CHART */

        .fake-chart{
          height:250px;
          display:flex;
          align-items:flex-end;
          gap:18px;
          margin-top:20px;
        }

        .bar{
          flex:1;
          border-radius:14px 14px 0 0;

          background:linear-gradient(
            to top,
            #57c7ff,
            #8f7cff
          );
        }

        .one{height:70%;}
        .two{height:50%;}
        .three{height:90%;}
        .four{height:40%;}
        .five{height:60%;}

        /* TIPS */

        .tips-box{
          margin-top:28px;
        }

        .tip-card{
          background:rgba(255,255,255,0.04);
          border-radius:18px;
          padding:20px;
          margin-bottom:16px;
        }

        .tip-card p{
          color:rgba(255,255,255,0.7);
          line-height:1.7;
        }

        /* RESPONSIVE */

        @media(max-width:1100px){
          .content-grid{
            grid-template-columns:1fr;
          }
        }

        @media(max-width:900px){
          .sidebar{
            display:none;
          }

          .main-content{
            padding:20px;
          }

          .summary-grid{
            grid-template-columns:1fr;
          }
        }

        @media(max-width:700px){
          .topbar{
            flex-direction:column;
            align-items:flex-start;
            gap:20px;
          }

          .topbar h1{
            font-size:34px;
          }
        }

      `}</style>
    </>
  );
}
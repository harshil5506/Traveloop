export default function Dashboard() {
    return (
        <>
            <div className="page-container">
                <h1>Dashboard</h1>
            </div>

            <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Poppins, sans-serif;
        }

        body {
          background: #050816;
          color: white;
        }

        .page-container {
          min-height: 100vh;
          padding: 40px;
        }

        h1 {
          font-size: 42px;
        }
      `}</style>
        </>
    );
}
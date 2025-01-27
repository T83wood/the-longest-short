export default function Dashboard() {
  const trades = [
    {
      date: "2025-01-20",
      instrument: "GOOGL",
      entryPrice: 1350.5,
      exitPrice: 1400.3,
      profitLoss: 49.8,
    },
    {
      date: "2025-01-21",
      instrument: "AMZN",
      entryPrice: 3300.0,
      exitPrice: 3250.0,
      profitLoss: -50.0,
    },
    {
      date: "2025-01-22",
      instrument: "MSFT",
      entryPrice: 250.0,
      exitPrice: 260.0,
      profitLoss: 10.0,
    },
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the Dashboard! This is where you can view an overview of your trades.</p>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Instrument</th>
            <th>Entry Price</th>
            <th>Exit Price</th>
            <th>Profit/Loss</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade, index) => (
            <tr key={index}>
              <td>{trade.date}</td>
              <td>{trade.instrument}</td>
              <td>{trade.entryPrice}</td>
              <td>{trade.exitPrice}</td>
              <td
                style={{
                  color: trade.profitLoss >= 0 ? "green" : "red",
                }}
              >
                {trade.profitLoss}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

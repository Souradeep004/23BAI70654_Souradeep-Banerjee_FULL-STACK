import { logs } from "./logs";

const Dashboard = () => {
    const totalCarbon = logs.reduce((sum, log) => sum + log.carbon, 0);

    return (
        <div style={{ padding: "20px", color: "white", backgroundColor: "#1a1a1a" }}>
            <h2>Dashboard</h2>
            <div style={{ backgroundColor: "#333", padding: "15px", marginBottom: "20px", borderRadius: "8px" }}>
                <p style={{ fontSize: "18px", fontWeight: "bold" }}>Total Carbon Footprint: <span style={{ color: "lime" }}>{totalCarbon} kgs</span></p>
            </div>

            <h3>Activity Breakdown:</h3>
            <ul>
                {logs.map((log) => (
                    <li key={log.id}>
                        {log.activity} : {log.carbon} kgs
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;


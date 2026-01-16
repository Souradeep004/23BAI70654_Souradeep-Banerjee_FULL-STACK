import {highCarbonlogs} from "./logs";


const Dashboard = () => {
    const totalCarbon = logs.reduce((sum, log) => sum + log.carbon, 0)
};

return (
    <div>
        <h2>Dashboard</h2>
        <p>Total Carbon Foot Print: </p>

        <ul>
            {logs.map((logs) => (
                <li key = {log.id}>
                    {log.activity} : {log.carbon} Kgs
                </li>
            ))}
        </ul>

    </div>
)

export default Dashboard;


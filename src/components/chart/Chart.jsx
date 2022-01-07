import './chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart() {

    const data = [
        {
            name: 'Jan',
            active : 4000,
        },
        {
            name: 'Feb',
            active : 800,
        },
        {
            name: 'Mar',
            active : 8000,
        },
        {
            name: 'Apr',
            active : 2000,
        },
        {
            name: 'May',
            active : 500,
        },
        {
            name: 'Jun',
            active : 4500,
        },
        {
            name: 'Jul',
            active : 3500,
        },
        {
            name: 'Aug',
            active : 9000,
        },
        {
            name: 'Sep',
            active : 1450,
        },
        {
            name: 'Oct',
            active : 3000,
        },
        {
            name: 'Nov',
            active : 4000,
        },
        {
            name: 'Dec',
            active : 2050,
        }
      ];

    return (
        <div className='chart'>
            <h3 className="chartTitle">User Analytics</h3>

            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#041C32"/>
                    <YAxis dataKey={data.active} />
                    <Legend />
                    <Tooltip />
                    <Line type="monotone" dataKey="active" stroke="#041C32"/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

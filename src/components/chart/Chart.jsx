import './chart.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart({title, data}) {  

    return (
        <div className='chart'>
            <h3 className="chartTitle">{title}</h3>

            <ResponsiveContainer width="100%" aspect={4/1} >
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

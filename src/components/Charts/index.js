import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        total_orders: 2400,
    },
    {
        name: 'Feb',
        total_orders: 1398,
    },
    {
        name: 'Mar',
        total_orders: 9800,
    },
    {
        name: 'Apr',
        total_orders: 3908,
    },
    {
        name: 'May',
        total_orders: 4800,
    },
    {
        name: 'Jun',
        total_orders: 3800,
    },
    {
        name: 'Jul',
        total_orders: 4300,
    },
    {
        name: 'Aug',
        total_orders: 4300,
    },
    {
        name: 'Sep',
        total_orders: 4300,
    },
    {
        name: 'Oct',
        total_orders: 4300,
    },
    {
        name: 'Nov',
        total_orders: 4300,
    },
    {
        name: 'Dec',
        total_orders: 4300,
    },
];

const weeklyData = [
    {
        name: 'Sat',
        total_orders: 2400,
    },
    {
        name: 'Sun',
        total_orders: 1398,
    },
    {
        name: 'Mon',
        total_orders: 9800,
    },
    {
        name: 'Tue',
        total_orders: 3908,
    },
    {
        name: 'Wed',
        total_orders: 4800,
    },
    {
        name: 'thu',
        total_orders: 3800,
    },
    {
        name: 'fri',
        total_orders: 4300,
    }
];


const Charts = () => {
    const [showchart, setshowchart] = React.useState(0);
    const categories = ["Past One Year", "Past One Week", "Past One Month"]
    return (
        <>
            <select
                name="categories"
                className="text-white text-2xl px-auto ml-4 rounded mt-6 bg-red-400"
                onChange={(event) => setshowchart(+event.target.value)}>
                {categories.map((obj, index) => {
                    return (
                        <option key={index} className="px-6" value={index}>
                            Order For {obj}
                        </option>
                    );
                })}
            </select>
            {(showchart === 0) && <div style={{ width: "100%", height: "100%", position: 'relative' }}>
                <div className="mt-5"
                    style={{
                        width: '100%',
                        height: '50%',
                        position: 'absolute',
                        top: 0,
                        left: 0
                    }}>
                    <ResponsiveContainer width="99%" aspect={3}>
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="total_orders" isAnimationActive={true} fill="#2B547E" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>}
            {(showchart === 1) && <div showchart={showchart} style={{ width: "100%", height: "100%", position: 'relative' }}>
                <div className="mt-5"
                    style={{
                        width: '100%',
                        height: '50%',
                        position: 'absolute',
                        top: 0,
                        left: 0
                    }}>
                    <ResponsiveContainer width="99%" aspect={3}>
                        <BarChart
                            width={500}
                            height={300}
                            data={weeklyData}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="total_orders" isAnimationActive={true} fill="#2B547E" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>}
            {(showchart === 2) && <div showchart={showchart} style={{ width: "100%", height: "100%", position: 'relative' }}>
                <div className="mt-5"
                    style={{
                        width: '100%',
                        height: '50%',
                        position: 'absolute',
                        top: 0,
                        left: 0
                    }}>
                    <ResponsiveContainer width="99%" aspect={3}>
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="total_orders" isAnimationActive={true} fill="#2B547E" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>}
        </>
    );
}

export default Charts;
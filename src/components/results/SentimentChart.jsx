import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Card } from '../ui/Card';
import { SectionTitle } from '../ui/SectionTitle';

const COLORS = {
  positive: '#22c55e', // green-500
  neutral: '#a1a1aa',  // zinc-400
  negative: '#ef4444', // red-500
};

export const SentimentChart = ({ data }) => {
  const chartData = [
    { name: 'Positive', value: data.positive },
    { name: 'Neutral', value: data.neutral },
    { name: 'Negative', value: data.negative },
  ];

  return (
    <Card className="flex flex-col items-center justify-center">
      <SectionTitle>Sentiment</SectionTitle>
      <div style={{ width: '100%', height: 200 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[entry.name.toLowerCase()]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
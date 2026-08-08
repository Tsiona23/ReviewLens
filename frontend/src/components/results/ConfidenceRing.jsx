import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';

export const ConfidenceRing = ({ confidence }) => {
  const data = [{ name: 'confidence', value: confidence }];
  const color = confidence > 75 ? '#22c55e' : confidence > 50 ? '#f59e0b' : '#ef4444';

  return (
    <div className="relative w-24 h-24">
      <ResponsiveContainer>
        <RadialBarChart
          innerRadius="80%"
          outerRadius="100%"
          data={data}
          startAngle={90}
          endAngle={-270}
          barSize={10}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
          <RadialBar
            background={{ fill: '#e5e7eb' }}
            dataKey="value"
            cornerRadius={5}
            fill={color}
            angleAxisId={0}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-gray-800">{confidence}%</span>
      </div>
    </div>
  );
};
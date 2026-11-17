import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


export const SimpleBarChart = () => {
  return (
    <BarChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={[
  {
    "label": "Jan",
    "x": 420,
    "y": 310
  },
  {
    "label": "Fev",
    "x": 580,
    "y": 440
  },
  {
    "label": "Mar",
    "x": 390,
    "y": 510
  },
  {
    "label": "Abr",
    "x": 690,
    "y": 480
  },
  {
    "label": "Mai",
    "x": 760,
    "y": 620
  },
  {
    "label": "Jun",
    "x": 640,
    "y": 550
  }
]}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid />
      <XAxis dataKey="label" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Bar dataKey="x" radius={[10, 10, 0, 0]} />
      <Bar dataKey="y" radius={[10, 10, 0, 0]} />
    </BarChart>
  );
};


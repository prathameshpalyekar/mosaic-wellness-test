import { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './customChart.scss';

export default class CustomPieChart extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <div className="custom-pie-chart">
        <ResponsiveContainer>
          <PieChart>
            <Pie data={data} dataKey="value" cy={100} innerRadius={70} outerRadius={90}>
              {data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color || BACKGROUND_COLOR[index]} />)}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

const BACKGROUND_COLOR = ["#0e3f3c", "#07635d", "#00948b", "#16beb4", "#7bc9c1", "#b3eee7", "#dbf2ef"];
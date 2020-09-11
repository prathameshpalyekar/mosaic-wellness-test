import React, { Component } from 'react';
import _ from 'lodash';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { NUM_DIFFERENTIATION_GRAPH } from '../../lib/helpers';
import './customChart.scss';

export default class CustomChart extends Component {
  shouldComponentUpdate(nextProps) {
    const { data, labels } = nextProps;
    const isDataSame = _.isEqual(this.props.data, data);
    const areLabelsSame = _.isEqual(this.props.labels, labels);
    return !isDataSame || !areLabelsSame;
  }

  render() {
    const { data, labels, color } = this.props;
    const chartData = data.map((value, index) => {
      return Object.assign({}, {
        value,
        name: labels[index],
      });
    });

    return (
      <div className="chart-container">
        <ResponsiveContainer>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={DEFAULT_FILL_COLOR} stopOpacity={1}/>
                <stop offset="95%" stopColor={DEFAULT_FILL_COLOR} stopOpacity={0.2}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" interval={X_AXIS_INTERVAL} tick={X_AXIS_TICK_CONFIG}/>
            <YAxis tickFormatter={(value) => NUM_DIFFERENTIATION_GRAPH(value)} tick={Y_AXIS_TICK_CONFIG}/>
            <Tooltip labelStyle={{color: TOOLTIP_LABEL_COLOR}} formatter={(value) => NUM_DIFFERENTIATION_GRAPH(value)}/>
            <CartesianGrid strokeWidth={CARTESIAN_GRID_SROKE_WIDTH}/>
            <Area
              type={AREA_TYPE}
              dot={AREA_DOT_CONFIG}
              dataKey="value"
              stroke={color || DEFAULT_STROKE_COLOR}
              fillOpacity={AREA_FILL_OPACITY}
              strokeWidth={AREA_STROKE_WIDTH}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

const DEFAULT_STROKE_COLOR = '#4bc0c0';
const DEFAULT_FILL_COLOR = '#07635d';
const TOOLTIP_LABEL_COLOR = '#3c3c3c';
const X_AXIS_TICK_CONFIG = {
  fontSize: 10,
  strokeWidth: 1,
  width: 10,
  stroke: '#fff',
  lineHeight: 15
};
const Y_AXIS_TICK_CONFIG = {
  fontSize: 12,
  strokeWidth: 1,
  stroke: '#fff',
};
const X_AXIS_INTERVAL = 0;
const CARTESIAN_GRID_SROKE_WIDTH = 0.25;
const AREA_TYPE = 'stepAfter';
const AREA_DOT_CONFIG = {stroke: DEFAULT_STROKE_COLOR, strokeWidth: 1, r: 2};
const AREA_FILL_OPACITY = 1;
const AREA_STROKE_WIDTH = 0.5;
import React, { Component } from 'react';
import _ from 'lodash';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { NUM_DIFFERENTIATION_GRAPH } from '../../lib/helpers';
import './customChart.scss';

export default class MultiChart extends Component {
  shouldComponentUpdate(nextProps) {
    const { data } = nextProps;
    const isDataSame = this.props.data.every((oldDataItem, index) => {
      const newDataItem = data[index];
      return _.isEqual(oldDataItem, newDataItem);
    })
    return !isDataSame;
  }

  render() {
    const { data, config, CHART_STYLE_CONFIG = {} } = this.props;

    return (
      <div className="chart-container">
        <ResponsiveContainer>
          <AreaChart data={data}>
            <defs>
              {config.map((item, index) => {
                const { color } = item;
                return (
                  <linearGradient id={`color${color}`} x1="0" y1="0" x2="0" y2="1" key={index}>
                    <stop offset="5%" stopColor={color} stopOpacity={1}/>
                    <stop offset="95%" stopColor={color} stopOpacity={0.2}/>
                  </linearGradient>
                );
              })}
            </defs>
            <XAxis dataKey="name" interval={CHART_STYLE_CONFIG.X_AXIS_INTERVAL || X_AXIS_INTERVAL} tick={X_AXIS_TICK_CONFIG}/>
            <YAxis tickFormatter={(value) => NUM_DIFFERENTIATION_GRAPH(value)} tick={Y_AXIS_TICK_CONFIG}/>
            <Tooltip labelStyle={{color: TOOLTIP_LABEL_COLOR}} formatter={(value) => NUM_DIFFERENTIATION_GRAPH(value)}/>
            <CartesianGrid strokeWidth={CARTESIAN_GRID_SROKE_WIDTH}/>
            {config.map((item, index) => {
              const { color, dataKey } = item;
              return (
                <Area
                  key={index}
                  type={CHART_STYLE_CONFIG.AREA_TYPE || AREA_TYPE}
                  dot={CHART_STYLE_CONFIG.AREA_DOT_CONFIG || AREA_DOT_CONFIG}
                  dataKey={dataKey}
                  stroke={color || DEFAULT_STROKE_COLOR}
                  fillOpacity={AREA_FILL_OPACITY}
                  strokeWidth={AREA_STROKE_WIDTH}
                  fill={`url(#color${color})` || DEFAULT_FILL_COLOR}
                />
              );
            })}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
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
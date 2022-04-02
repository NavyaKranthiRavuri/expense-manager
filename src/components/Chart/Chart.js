import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
    const datapointValues = props.datapoints.map(datapoint => datapoint.value);
    const totalMax = Math.max(...datapointValues);

    return (
        <div className='chart'>
            {props.datapoints.map(datapoint =>
                <ChartBar
                    value={datapoint.value}
                    maxValue={totalMax}
                    label={datapoint.label}
                    key={datapoint.label}
                />
            )}
        </div>
    );
};

export default Chart;
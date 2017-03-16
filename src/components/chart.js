import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return _.round( _.sum(data) / data.length );
}

const Chart = ({ data, color, units }) => {
  return (
    <div>
      <Sparklines width={100} height={100} margin={2} data={data}>
        <SparklinesLine color={color}/>
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {average(data)} {units}
      </div>
    </div>
  );
}

export default Chart;
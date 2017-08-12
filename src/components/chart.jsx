import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
 } from 'react-sparklines';

export default ({ data, color }) => (
  <div>
    <Sparklines data={data} width={180} height={120} >
      <SparklinesLine color={color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
  </div>
);

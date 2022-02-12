import React from 'react';
import { Progress } from 'reactstrap';

const ProgressBars = () => (
  <div className="mb-5">
    <div className="text-center small">0%</div>
    <Progress className="mb-2" />
    <div className="text-center small">75%</div>
    <Progress value={75} className="mb-2" />
    <div className="text-center small">Multiple bars</div>
    <Progress multi className="mb-4">
      <Progress bar value="15" />
      <Progress bar color="success" value="30" />
      <Progress bar color="info" value="25" />
      <Progress bar color="warning" value="20" />
      <Progress bar color="danger" value="5" />
    </Progress>
    <div className="mb-2 font-weight-bold">With Labels</div>
    <Progress value={50} className="mb-3">
      1/2
    </Progress>
    <Progress multi className="mb-4">
      <Progress bar value="15">
        Meh
      </Progress>
      <Progress bar color="success" value="30">
        Wow!
      </Progress>
      <Progress bar color="info" value="25">
        Cool
      </Progress>
      <Progress bar color="warning" value="20">
        20%
      </Progress>
      <Progress bar color="danger" value="10">
        !!
      </Progress>
    </Progress>
    <div className="mb-2 font-weight-bold">Different Height</div>
    <Progress color="success" value="100" style={{ height: '2px' }} className="mb-2" />
    <Progress color="primary" value="70" style={{ height: '6px' }} className="mb-4" />
    <div className="mb-2 font-weight-bold">Striped/Animated Bars</div>
    <Progress striped color="warning" value={75} className="mb-2" />
    <Progress animated color="success" value="25" className="mb-2" />
    <Progress multi>
      <Progress bar striped value="15">
        Stripes
      </Progress>
      <Progress bar animated color="success" value="30">
        Animated Stripes
      </Progress>
      <Progress bar color="info" value="25">
        Plain
      </Progress>
    </Progress>
  </div>
);

export default ProgressBars;

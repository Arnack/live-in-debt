import React from 'react';
import { Card, CardBody, CardTitle, Row, Progress } from 'reactstrap';
import { BarChart, Bar, Tooltip } from 'recharts';
import Layout from '../modules/layout';

// icons
import IconDatabase from 'react-icons/lib/fa/database';
import IconProduct from 'react-icons/lib/fa/cube';
import IconDownload from 'react-icons/lib/fa/download';
import IconProfit from 'react-icons/lib/fa/credit-card';
import IconFacebook from 'react-icons/lib/fa/facebook-square';
import IconTwitter from 'react-icons/lib/fa/twitter-square';

const ViewHeader = () => (
  <div className="view-header">
    <header className="text-white">
      <h1 className="h5 title text-uppercase">Widgets</h1>
      <p className="mb-0 subtitle">Easy to use widget components</p>
    </header>
  </div>
);

const ViewContent = ({ children }) => (
  <div className="view-content view-components">{children}</div>
);

const blocksData = [
  { uv: 2034, sales: 623, br: 56, ns: 2343 },
  { uv: 2734, sales: 1223, br: 43, ns: 3200 },
  { uv: 2522, sales: 723, br: 64, ns: 3063 },
  { uv: 2944, sales: 1043, br: 44, ns: 3666 },
  { uv: 1822, sales: 433, br: 74, ns: 1909 },
];

const BlocksChart = ({ dataKey, stroke, fill }) => (
  <BarChart
    data={blocksData}
    margin={{ top: 0, bottom: 0, right: 0, left: 0 }}
    width={80}
    height={50}
    className="mb-3">
    <Tooltip
      labelStyle={{ display: 'none' }}
      itemStyle={{ fontSize: 10, color: '#fff' }}
      wrapperStyle={{ padding: '0 4px', background: 'rgba(40,70,80, .94)', border: 'none' }}
    />
    <Bar
      type="monotone"
      barSize={6}
      dataKey={dataKey}
      stroke={stroke}
      fill={fill}
      strokeWidth={1}
      fillOpacity=".8"
    />
  </BarChart>
);

export default function Widgets(props) {
  return (
    <Layout>
      <ViewHeader />
      <ViewContent>
        {/* widget set - 1 */}
        <Row className="mb-4">
          <div className="col-sm-3">
            <Card>
              <CardBody className="d-flex align-items-center flex-column">
                <CardTitle className="small font-weight-bold text-uppercase mb-4">
                  Page Views
                </CardTitle>
                <BlocksChart dataKey="uv" stroke="#3f51b5" fill="#3f51b5" />
                <div>2304</div>
              </CardBody>
            </Card>
          </div>
          <div className="col-sm-3">
            <Card>
              <CardBody className="d-flex align-items-center flex-column">
                <CardTitle className="small font-weight-bold text-uppercase mb-4">
                  Total Sales
                </CardTitle>
                <BlocksChart dataKey="sales" stroke="#69F0AE" fill="#69F0AE" />
                <div>3235</div>
              </CardBody>
            </Card>
          </div>
          <div className="col-sm-3">
            <Card>
              <CardBody className="d-flex align-items-center flex-column">
                <CardTitle className="small font-weight-bold text-uppercase mb-4">
                  Bounce Rate
                </CardTitle>
                <BlocksChart dataKey="br" stroke="#ffeb3b" fill="#ffeb3b" />
                <div>3564</div>
              </CardBody>
            </Card>
          </div>
          <div className="col-sm-3">
            <Card>
              <CardBody className="d-flex align-items-center flex-column">
                <CardTitle className="small font-weight-bold text-uppercase mb-4">
                  New Visitors
                </CardTitle>
                <BlocksChart dataKey="ns" stroke="#1e88e5" fill="#1e88e5" />
                <div>4304</div>
              </CardBody>
            </Card>
          </div>
        </Row>

        {/* widget set - 2 */}
        <Row className="mb-4">
          <div className="col-sm-3">
            <Card>
              <CardBody className="d-flex p-3 align-items-center">
                <div
                  className="mr-4 bg-primary d-flex align-items-center justify-content-center"
                  style={{ borderRadius: '2px', width: '48px', height: '48px' }}>
                  <IconDatabase size="20" color="#fff" />
                </div>
                <div>
                  <h5>Database</h5>
                  <div>11.2 GB</div>
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="col-sm-3">
            <Card>
              <CardBody className="d-flex p-3 align-items-center">
                <div
                  className="mr-4 bg-success d-flex align-items-center justify-content-center"
                  style={{ borderRadius: '2px', width: '48px', height: '48px' }}>
                  <IconProduct size="20" color="#fff" />
                </div>
                <div>
                  <h5>Products</h5>
                  <div>5,334</div>
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="col-sm-3">
            <Card>
              <CardBody className="d-flex p-3 align-items-center">
                <div
                  className="mr-4 bg-warning d-flex align-items-center justify-content-center"
                  style={{ borderRadius: '2px', width: '48px', height: '48px' }}>
                  <IconDownload size="20" color="#fff" />
                </div>
                <div>
                  <h5>Downloads</h5>
                  <div>445</div>
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="col-sm-3">
            <Card>
              <CardBody className="d-flex p-3 align-items-center">
                <div
                  className="mr-4 bg-info d-flex align-items-center justify-content-center"
                  style={{ borderRadius: '2px', width: '48px', height: '48px' }}>
                  <IconProfit size="22" color="#fff" />
                </div>
                <div>
                  <h5>Profit</h5>
                  <div>$1,234</div>
                </div>
              </CardBody>
            </Card>
          </div>
        </Row>

        <Row>
          <div className="col-sm-4 mb-4">
            <Card>
              <CardBody>
                <h6 className="card-title text-uppercase mb-4">Server Status</h6>
                <div>
                  <p className="small">Disk Usage (72.4%)</p>
                  <Progress
                    color="primary"
                    value="72.4"
                    style={{ height: '4px' }}
                    className="mb-4"
                  />
                </div>
                <div>
                  <p className="small">CPU Usage - 26%</p>
                  <Progress color="info" value="26" style={{ height: '4px' }} className="mb-4" />
                </div>
                <div>
                  <p className="small">Memory Usage (22.2%)</p>
                  <Progress
                    color="success"
                    value="22.2"
                    style={{ height: '4px' }}
                    className="mb-4"
                  />
                </div>
                <div>
                  <p className="small">Database Used (520MB of 1GB) - 52%</p>
                  <Progress color="warning" value="52" style={{ height: '4px' }} className="mb-4" />
                </div>
                <div>
                  <p className="small">Email Account (33/50) - 66%</p>
                  <Progress color="danger" value="66" style={{ height: '4px' }} className="mb-4" />
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="col-sm-4 mb-4">
            <Card>
              <img
                src="http://i.imgur.com/4anhIlS.jpg"
                className="card-img-top"
                alt="placeholder"
                height="130"
              />
              <CardBody className="text-center">
                <img
                  src="http://i.imgur.com/0rVeh4A.jpg"
                  alt="avatar"
                  width="54"
                  height="54"
                  style={{
                    marginTop: '-4rem',
                    borderRadius: '100%',
                    border: '2px solid #eee',
                    boxShadow: '0 1px 4px rgba(0,0,0,.1)',
                  }}
                />
                <h5>Daniel Gandalf</h5>
                <p className="text-muted">Software Engineer</p>
                <div className="mb-4">
                  <a href="#na">
                    <IconFacebook size="22" color="#303F9F" />
                  </a>
                  &emsp;
                  <a href="#na">
                    <IconTwitter size="22" color="#42A5F5" />
                  </a>
                </div>
                <p>
                  <em className="font-weight-bold">Bio:</em>&nbsp;Do whatever you want to do, but
                  don't trouble anybody.
                </p>
              </CardBody>
            </Card>
          </div>
        </Row>
      </ViewContent>
    </Layout>
  );
}

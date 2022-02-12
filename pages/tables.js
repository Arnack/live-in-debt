import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Table, Th, Thead } from 'reactable';
import Layout from '../modules/layout';

const ViewHeader = () => (
  <div className="view-header">
    <header className="title text-white">
      <h1 className="h4 text-uppercase">Tables</h1>
      <p className="mb-0">Bootstrap 4 table and Reactable</p>
    </header>
  </div>
);

const ViewContent = ({ children }) => (
  <div className="view-content view-components">{children}</div>
);

const BasicTableData = [
  { first: 'John', last: 'Doe', earnings: '$304', sales: '102' },
  { first: 'Maria', last: 'Lopez', earnings: '$834', sales: '402' },
  { first: 'Sofia', last: 'Flores', earnings: '$943', sales: '542' },
  { first: 'Jean', last: 'Cooper', earnings: '$1234', sales: '891' },
];

const BasicTable = ({ data }) => (
  <table className="table">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Earnings</th>
        <th>Sales</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, i) => (
        <tr key={i}>
          <th scope="row">{i + 1}</th>
          <td>{item.first}</td>
          <td>{item.last}</td>
          <td>{item.earnings}</td>
          <td>{item.sales}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const revenueTableData = [
  { date: '15-Jan-2016', impressions: 8403, clicks: 820, sales: 334, profit: 1203 },
  { date: '16-Jan-2016', impressions: 6454, clicks: 550, sales: 234, profit: 1003 },
  { date: '17-Jan-2016', impressions: 8473, clicks: 749, sales: 245, profit: 903 },
  { date: '18-Jan-2016', impressions: 9203, clicks: 230, sales: 454, profit: 1440 },
  { date: '19-Jan-2016', impressions: 1420, clicks: 30, sales: 57, profit: 143 },
  { date: '20-Jan-2016', impressions: 4859, clicks: 90, sales: 30, profit: 403 },
  { date: '21-Jan-2016', impressions: 4453, clicks: 720, sales: 334, profit: 1102 },
  { date: '22-Jan-2016', impressions: 6454, clicks: 550, sales: 234, profit: 1003 },
  { date: '23-Jan-2016', impressions: 8473, clicks: 749, sales: 245, profit: 903 },
  { date: '24-Jan-2016', impressions: 7645, clicks: 230, sales: 454, profit: 1440 },
  { date: '25-Jan-2016', impressions: 1420, clicks: 30, sales: 57, profit: 143 },
  { date: '26-Jan-2016', impressions: 859, clicks: 25, sales: 15, profit: 99 },
];

export default function TablesPage() {
  return (
    <Layout>
      <ViewHeader />
      <ViewContent>
        <Card className="mb-4">
          <CardBody className="table-responsive">
            <h6 className="mb-4 text-uppercase">Basic Table</h6>
            <BasicTable data={BasicTableData} />
          </CardBody>
        </Card>

        <Card className="mb-4">
          <CardBody className="table-responsive">
            <h6 className="mb-4 text-uppercase">Data Table</h6>
            <Table
              className="table"
              data={revenueTableData}
              sortable={true}
              itemsPerPage={5}
              pageButtonLimit={5}>
              <Thead>
                <Th column="date">
                  <span>date</span>
                </Th>
                <Th column="impressions">
                  <span>impressions</span>
                </Th>
                <Th column="clicks">
                  <span>clicks</span>
                </Th>
                <Th column="sales">
                  <span>sales</span>
                </Th>
                <Th column="profit">
                  <span>profit ($)</span>
                </Th>
              </Thead>
            </Table>
          </CardBody>
        </Card>
      </ViewContent>
    </Layout>
  );
}

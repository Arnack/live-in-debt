import React from 'react';
import Link from 'next/link';
import { Card, CardBody, CardGroup, ListGroup, ListGroupItem } from 'reactstrap';

export default function InvoicePage() {
  return (
    <div className="view">
      <div className="view-content view-pages view-invoice view d-flex justify-content-center align-items-center flex-column">
        <Card className="mb-3 invoice-card">
          <CardBody>
            <div className="d-flex justify-content-between flex-wrap">
              <Link href="/">
                <a>
                  <svg
                    width="46px"
                    height="52px"
                    viewBox="11 4 50 52"
                    style={{ marginLeft: '-4px' }}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    {/* <polyline id="Path" stroke="#4CAF50" strokeWidth="11" fill="none" points="21 36.6942904 49.6837349 30.667532 51.5974407 16 31.3353728 16 29.3402961 16 21 36.6942904 29.3402958 55.1487999 53.5974407 52.415905"></polyline> */}
                    <path
                      id="Path"
                      stroke="#2962FF"
                      strokeWidth="12"
                      fill="none"
                      d="M26.5282909,38.9526768 C26.5282909,38.9526768 49.3408202,31.7856836 49.3408202,28.3647852 C49.3408202,24.9438868 49.5702829,11.7001695 37.0898141,17.411107 C24.6093454,23.1220444 24.821289,23.6064453 24.821289,23.6064453 C24.821289,23.6064453 22.8105177,47.2876359 26.528291,53.5093155 C30.2460643,59.7309951 52.7998045,53.5093155 54.7998045,53.5093155"></path>
                  </svg>
                  <strong className="h2 text-uppercase" style={{ color: '#212121' }}>
                    ract
                  </strong>
                </a>
              </Link>
              <div>
                <h4 className="text-uppercase">Invoice</h4>
                <h6>Invoice No - #4032</h6>
                <small>Date: 24-02-2017</small>
              </div>
            </div>
            <hr />
            <CardGroup>
              <Card>
                <CardBody>
                  <em className="text-muted">Received From:</em>
                  <h5>Eract Web Studio</h5>
                  <address>
                    22/B, Park Street Road,
                    <br />
                    New Delhi 110021, <br />
                    India.
                    <br />
                    Ph: (011)-2343444
                  </address>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <em className="text-muted">Sent To:</em>
                  <h5>John Doe</h5>
                  <address>
                    C-322, 5th Avenue Suite 600
                    <br />
                    San Francisco, CA 93821, <br />
                    U.S.
                    <br />
                    Ph: (123)-438335
                  </address>
                </CardBody>
              </Card>
            </CardGroup>
            <div className=" table-responsive">
              <table className="table-bordered table mt-4">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2400</td>
                    <td>
                      Moto G2 32GB
                      <div className="text-muted small">Lorem ipsum dolar dummy text</div>
                    </td>
                    <td>1</td>
                    <td>$449.00</td>
                    <td>$449.00</td>
                  </tr>
                  <tr>
                    <td>2401</td>
                    <td>
                      IPad Mini 32GB Wifi+Cellular
                      <div className="text-muted small">
                        Pellentesque maximus feugiat lorem at cursus.
                      </div>
                    </td>
                    <td>2</td>
                    <td>$349.00</td>
                    <td>$698.00</td>
                  </tr>
                  <tr>
                    <td>2402</td>
                    <td>
                      MacPro Retina 13"
                      <div className="text-muted small">
                        Nor again is there anyone who loves or pursues or desires.
                      </div>
                    </td>
                    <td>1</td>
                    <td>$999.00</td>
                    <td>$999.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="text-right">
              <h5 className="mb-4 mt-4">Balance Due</h5>
              <ListGroup className="d-inline-block w-50">
                <ListGroupItem className="justify-content-between">
                  <strong>Sub Total:&nbsp;</strong>$1797
                </ListGroupItem>
                <ListGroupItem className="text-primary justify-content-between">
                  <strong>Taxes(12.5%):&nbsp;</strong> $215.64
                </ListGroupItem>
                <ListGroupItem className="justify-content-between">
                  <strong>Total:&nbsp;</strong>$2013.64
                </ListGroupItem>
              </ListGroup>
            </div>
            <hr />
            <p className="text-warning small text-center">
              <strong>Note:</strong>This is a computer generated invoice. No Signature Required
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

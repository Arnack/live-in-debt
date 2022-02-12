import React from 'react';
import Link from 'next/link';
import { Form, Input, Label, FormGroup, Button, FormText, Card, CardBody } from 'reactstrap';
import IconTwitter from 'react-icons/lib/fa/twitter';
import IconFacebook from 'react-icons/lib/fa/facebook';
import IconGoogle from 'react-icons/lib/fa/google';

export default function SignInPage() {
  return (
    <div className="view">
      <div className="view-content view-pages view-session d-flex justify-content-center align-items-center flex-column">
        <Card className="mb-3 form-card">
          <CardBody>
            <header className="mb-5">
              <Link href="/">
                <a>
                  <svg
                    width="32px"
                    height="44px"
                    viewBox="11 6 50 42"
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
                  <strong className="h3 text-uppercase" style={{ color: '#212121' }}>
                    ract
                  </strong>
                </a>
              </Link>
              <p className="lead">Sign In to continue</p>
            </header>
            <Form action="/">
              <FormGroup className="mb-4">
                <Label>Email Address</Label>
                <Input type="email" placeholder="someone@xyz.com" />
              </FormGroup>
              <FormGroup className="mb-4">
                <Label>Password</Label>
                <Input type="password" placeholder="longsecret" />
                <FormText className="text-right">
                  <Link href="/pages/forget">
                    <a>Forget your password?</a>
                  </Link>
                </FormText>
              </FormGroup>
              <FormGroup className="text-right">
                <Link href="/pages/register">
                  <a className="btn btn-success">Register</a>
                </Link>{' '}
                <Button color="primary">Sign In</Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
        <p className="font-weight-bold">or sign in with...</p>
        <ul className="list-unstyled social-auth">
          <li>
            <a href="#na">
              <IconTwitter size={22} />
            </a>
          </li>
          <li>
            <a href="#na">
              <IconFacebook size={22} />
            </a>
          </li>
          <li>
            <a href="#na">
              <IconGoogle size={22} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

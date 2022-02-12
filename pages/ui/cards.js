import React from 'react';
import {
  Row,
  Col,
  Card,
  CardGroup,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter,
  CardImg,
} from 'reactstrap';
import Layout from '../../modules/layout';

const ViewHeader = () => (
  <div className="view-header">
    <header className="title text-white">
      <h1 className="h4 text-uppercase">Cards</h1>
      <p className="mb-0">Material cards in different colors and formats</p>
    </header>
  </div>
);

const CardVariantEx = () => (
  <Row className="mb-4">
    <Col md="3" xs="12" className="mb-4">
      <Card color="primary" inverse>
        <CardBody>
          This is primary card. Lorem ipsum dolar sit amet consector adipising net.
        </CardBody>
      </Card>
    </Col>
    <Col md="3" xs="12" className="mb-4">
      <Card color="success" inverse>
        <CardBody>
          This is brand success card. Lorem ipsum dolar sit amet consector adipising net.
        </CardBody>
      </Card>
    </Col>
    <Col md="3" xs="12" className="mb-4">
      <Card color="info" inverse>
        <CardBody>
          This is brand info card. Lorem ipsum dolar sit amet consector adipising net.
        </CardBody>
      </Card>
    </Col>
    <Col md="3" xs="12" className="mb-4">
      <Card color="warning" inverse>
        <CardBody>
          This is brand warning card. Lorem ipsum dolar sit amet consector adipising net.
        </CardBody>
      </Card>
    </Col>
    <Col md="3" xs="12" className="mb-4">
      <Card color="danger" inverse>
        <CardBody>
          This is brand danger card. Lorem ipsum dolar sit amet consector adipising net.
        </CardBody>
      </Card>
    </Col>
    <Col md="3" xs="12" className="mb-4">
      <Card color="success" outline>
        <CardBody>
          This is success brand oultined card. Lorem ipsum dolar sit amet consector adipising net.
        </CardBody>
      </Card>
    </Col>
    <Col md="3" xs="12" className="mb-4">
      <Card color="primary" outline>
        <CardBody>
          This is primary oultined card. Lorem ipsum dolar sit amet consector adipising net.
        </CardBody>
      </Card>
    </Col>
    <Col md="3" xs="12" className="mb-4">
      <Card color="warning" outline>
        <CardBody>
          This is warning outlined card. Lorem ipsum dolar sit amet consector adipising net.
        </CardBody>
      </Card>
    </Col>
  </Row>
);

const DefaultCard = () => (
  <Card className="mb-5">
    <CardBody>
      <CardTitle>Card Title</CardTitle>
      <CardSubtitle className="mb-2">Card Subtitle</CardSubtitle>
      <p>
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
      <a href="#na" className="card-link">
        Card link
      </a>
      <a href="#na" className="card-link">
        Another link
      </a>
    </CardBody>
    <CardFooter>This is a card footer.</CardFooter>
  </Card>
);

const CardGroupEx = () => (
  <CardGroup>
    <Card className="mb-4">
      <CardImg top src="https://unsplash.it/200/130?image=18" />
      <CardBody>
        <CardTitle>Card Title</CardTitle>
        <p>This is some card text. Lorem ipsum norem dolar adipising set et.</p>
      </CardBody>
    </Card>
    <Card className="text-center mb-4">
      <CardImg top src="https://unsplash.it/200/130/?image=16" />
      <CardBody>
        <CardTitle>Card Title</CardTitle>
        <p>
          This is a wider card with supporting text below as a natural lead-in to additional
          content. This content is a little bit longer.
        </p>
      </CardBody>
    </Card>
    <Card className="text-right mb-4">
      <CardImg top src="https://unsplash.it/200/130?image=13" />
      <CardBody>
        <CardTitle>Card Title</CardTitle>
        <p>
          This is a wider card with supporting text below as a natural lead-in to additional
          content. This card has even longer content than the first to show that equal height
          action.
        </p>
      </CardBody>
    </Card>
  </CardGroup>
);

const ViewContent = ({ children }) => (
  <div className="view-content view-components">
    <Card>
      <CardBody>{children}</CardBody>
    </Card>
  </div>
);

export default function UICardsPage(props) {
  return (
    <Layout>
      <ViewHeader />
      <ViewContent>
        <h6 className="text-uppercase mb-4">Card Invariants</h6>
        <CardVariantEx />
        <h6 className="text-uppercase mb-4">A Simple Full Width Card</h6>
        <DefaultCard />
        <h6 className="text-uppercase mb-4">Card Groups with Alignment</h6>
        <CardGroupEx />
      </ViewContent>
    </Layout>
  );
}

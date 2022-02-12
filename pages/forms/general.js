import React from 'react';
import {
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  Col,
} from 'reactstrap';
import Layout from '../../modules/layout';

const ViewHeader = () => (
  <div className="view-header">
    <header className="title text-white">
      <h1 className="h4 text-uppercase">General Forms</h1>
      <p className="mb-0">General bootstrap form elements</p>
    </header>
  </div>
);

const ViewContent = ({ children }) => (
  <div className="view-content view-components">{children}</div>
);

const FormInputs = () => (
  <Form onSubmit={(e) => e.preventDefault()}>
    <FormGroup row>
      <Label for="exampleEmail" sm={3}>
        Email
      </Label>
      <Col sm={9}>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="exampleSearch" sm={3}>
        Search
      </Label>
      <Col sm={9}>
        <Input
          type="search"
          name="search"
          id="exampleSearch"
          placeholder="type your search here."
        />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="exampleNumber" sm={3}>
        Number
      </Label>
      <Col sm={9}>
        <Input type="number" name="number" id="exampleNumber" placeholder="234" />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="exampleDate" sm={3}>
        Date
      </Label>
      <Col sm={9}>
        <Input type="date" name="date" id="exampleDate" />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="exampleColor" sm={3}>
        Color
      </Label>
      <Col sm={9}>
        <Input type="color" name="color" id="exampleColor" />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="exampleTel" sm={3}>
        Telephone
      </Label>
      <Col sm={9}>
        <Input type="tel" name="tel" readOnly value="1-(999)-(23)-(555)" id="exampleTel" />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="exampleTime" sm={3}>
        Time
      </Label>
      <Col sm={9}>
        <Input type="time" name="time" id="exampleTime" />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="exampleSelect" sm={3}>
        Select
      </Label>
      <Col sm={9}>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="exampleSelectMulti" sm={3}>
        Select Multiple
      </Label>
      <Col sm={9}>
        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </Col>
    </FormGroup>
    <FormGroup color="success" row>
      <Label for="exampleEmail" sm={3}>
        Input with success
      </Label>
      <Col sm={9}>
        <Input state="success" />
        <FormFeedback>Success! You did it!</FormFeedback>
        <FormText color="muted">Example help text that remains unchanged.</FormText>
      </Col>
    </FormGroup>
    <FormGroup color="warning" row>
      <Label for="examplePassword" sm={3}>
        Input with warning
      </Label>
      <Col sm={9}>
        <Input state="warning" />
        <FormFeedback>Whoops, check your formatting and try again.</FormFeedback>
        <FormText color="muted">Example help text that remains unchanged.</FormText>
      </Col>
    </FormGroup>
    <FormGroup color="danger" row>
      <Label for="examplePassword" sm={3}>
        Input with danger
      </Label>
      <Col sm={9}>
        <Input state="danger" />
        <FormFeedback>Oh noes! that name is already taken</FormFeedback>
        <FormText color="muted">Example help text that remains unchanged.</FormText>
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="exampleUrl" sm={3} size="lg">
        Url (Size Large)
      </Label>
      <Col sm={9}>
        <Input
          type="email"
          name="url"
          id="exampleUrl"
          placeholder="https://example.com"
          size="lg"
        />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="examplePassword" sm={3} size="sm">
        Password (Size Small)
      </Label>
      <Col sm={9}>
        <Input type="email" name="url" id="examplePassword" size="sm" />
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="examplePassword" sm={3}>
        Custom File Input
      </Label>
      <Col sm={9}>
        <Input type="file" name="url" className="custom-file-input" id="examplePassword" />
        <span className="custom-file-control"></span>
      </Col>
    </FormGroup>
    <FormGroup row>
      <Label for="exampleInputGroup" sm={3}>
        Input Group
      </Label>
      <Col sm={9}>
        <InputGroup>
          <Input placeholder="username" />
          <InputGroupAddon addonType="prepend">@example.com</InputGroupAddon>
        </InputGroup>
      </Col>
    </FormGroup>
    <FormGroup row>
      <Col sm={12} className="text-right">
        <Button color="primary">Submit</Button> <Button>Cancel</Button>
      </Col>
    </FormGroup>
  </Form>
);

const InlineForm = () => (
  <Form inline>
    <FormGroup>
      <Label for="exampleEmail">Email</Label>&nbsp;&nbsp;
      <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
    </FormGroup>
    &nbsp;&nbsp;
    <FormGroup>
      <Label for="examplePassword">Password</Label>&nbsp;&nbsp;
      <Input type="password" name="password" id="examplePassword" placeholder="it's secret" />
    </FormGroup>
    &nbsp;&nbsp;&nbsp;
    <Button>Submit</Button>
  </Form>
);

const CheckboxRadio = () => (
  <Form className="row">
    <Col>
      <FormGroup tag="fieldset">
        <legend className="col-form-legend font-weight-bold">Radio Buttons</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio2" /> Option one is this and that—be sure to include why
            it's great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio2" /> Selecting this option will deselect option one.
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio2" disabled /> Option three is disabled
          </Label>
        </FormGroup>
      </FormGroup>
    </Col>
    <Col sm={6}>
      <FormGroup>
        <legend className="col-form-legend font-weight-bold">Checkboxes</legend>
        <div>
          <Label check>
            <Input type="checkbox" />
            &nbsp;&nbsp; Check me out
          </Label>
        </div>
        <div className="has-danger">
          <Label check>
            <Input type="checkbox" />
            &nbsp;&nbsp; Checkbox with Danger
          </Label>
        </div>
        <div className="has-success">
          <Label check>
            <Input type="checkbox" />
            &nbsp;&nbsp; Checkbox with Success
          </Label>
        </div>
      </FormGroup>
    </Col>
  </Form>
);

export default function FormsPage() {
  return (
    <Layout>
      <ViewHeader />
      <ViewContent>
        <Card className="mb-4">
          <CardBody>
            <h6 className="mb-4 text-uppercase">Form Inputs</h6>
            <FormInputs />
          </CardBody>
        </Card>
        <Card className="mb-4">
          <CardBody>
            <h6 className="mb-4 text-uppercase">Inline Form</h6>
            <InlineForm />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <h6 className="mb-4 text-uppercase">Checkboxes and Radios</h6>
            <CheckboxRadio />
          </CardBody>
        </Card>
      </ViewContent>
    </Layout>
  );
}

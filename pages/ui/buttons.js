import React from 'react';
import {
  ButtonGroup,
  Button,
  ButtonToolbar,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardBody,
} from 'reactstrap';
import Layout from '../../modules/layout';

// social icons
import IconAlarm from 'react-icons/lib/md/add-alarm';
import IconStar from 'react-icons/lib/md/star';

const ViewHeader = () => (
  <div className="view-header">
    <header className="title text-white">
      <h1 className="h4 text-uppercase">Buttons</h1>
      <p className="mb-0">All button sizes, fab, default and outlined buttons</p>
    </header>
  </div>
);

const DefaultButtons = () => (
  <div className="mb-5">
    <h6 className="card-title text-uppercase">Default Buttons</h6>
    <Button color="primary" className="mb-2">
      Primary
    </Button>{' '}
    <Button color="secondary" className="mb-2">
      Secondary
    </Button>{' '}
    <Button color="success" className="mb-2">
      Success
    </Button>{' '}
    <Button color="info" className="mb-2">
      Info
    </Button>{' '}
    <Button color="warning" className="mb-2">
      Warning
    </Button>{' '}
    <Button color="danger" className="mb-2">
      Danger
    </Button>
  </div>
);

const OutlineButtons = () => (
  <div className="mb-5">
    <h6 className="card-title text-uppercase">Outline Buttons</h6>
    <Button color="primary" outline className="mb-2">
      Primary
    </Button>{' '}
    <Button color="secondary" outline className="mb-2">
      Secondary
    </Button>{' '}
    <Button color="success" outline className="mb-2">
      Success
    </Button>{' '}
    <Button color="info" outline className="mb-2">
      Info
    </Button>{' '}
    <Button color="warning" outline className="mb-2">
      Warning
    </Button>{' '}
    <Button color="danger" outline className="mb-2">
      Danger
    </Button>
  </div>
);

const ButtonSizes = () => (
  <div className="mb-5">
    <h6 className="card-title text-uppercase">Button Sizes</h6>
    <Button color="primary" size="lg" className="mb-2">
      Large Button
    </Button>{' '}
    <Button color="warning" className="mb-2">
      Normal Button
    </Button>{' '}
    <Button color="secondary" size="sm" className="mb-2">
      Small Button
    </Button>{' '}
  </div>
);

const ButtonStates = () => (
  <div className="mb-5">
    <h6 className="card-title text-uppercase">Active and Disabled State</h6>
    <Button size="lg" color="success" active className="mb-2">
      Active Button
    </Button>{' '}
    <Button size="lg" color="secondary" active href="#na" className="mb-2">
      Link
    </Button>{' '}
    <hr />
    <Button color="success" size="lg" disabled className="mb-2">
      Disabled button
    </Button>{' '}
    <Button color="secondary" size="lg" disabled className="mb-2">
      Disabled Link
    </Button>
  </div>
);

const BlockButtons = () => (
  <div className="mb-5">
    <h6 className="card-title text-uppercase">Block Buttons</h6>
    <Button color="primary" size="lg" block>
      Block level button
    </Button>
  </div>
);

const ButtonToolbarExample = () => (
  <div className="mb-5">
    <h6 className="card-title text-uppercase">Button Toolbar</h6>
    <ButtonGroup className="mb-3">
      <Button>Left</Button>
      <Button color="info">Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
    <ButtonToolbar>
      <ButtonGroup className="mr-2">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
      </ButtonGroup>
      <ButtonGroup className="mr-2">
        <Button>4</Button>
        <Button>5</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button>6</Button>
      </ButtonGroup>
    </ButtonToolbar>
  </div>
);

class ButtonGroupDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdownOpen: false };
  }
  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  };
  render() {
    return (
      <ButtonGroup vertical={this.props.vertical}>
        <Button>1</Button>
        <Button>2</Button>
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>Dropdown</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Dropdown Link</DropdownItem>
            <DropdownItem>Another Link</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </ButtonGroup>
    );
  }
}

const FabButtons = () => (
  <div className="mb-5">
    <h6 className="card-title text-uppercase">Fab Buttons</h6>
    <div className="mb-2">
      <Button className="btn-fab" size="lg">
        <IconStar size="26" color="#DD2C00" />
      </Button>{' '}
      <Button className="btn-fab">
        <IconStar size="18" color="#DD2C00" />
      </Button>{' '}
      <Button className="btn-fab" size="sm">
        <IconStar size="16" color="#DD2C00" />
      </Button>
    </div>
    <Button className="btn-fab" color="primary" size="lg">
      <IconAlarm size="26" />
    </Button>{' '}
    <Button className="btn-fab" color="success" outline size="lg">
      <IconAlarm size="26" />
    </Button>{' '}
    <Button className="btn-fab" color="warning">
      <IconAlarm size="18" />
    </Button>{' '}
    <Button className="btn-fab" color="warning" outline>
      <IconAlarm size="18" />
    </Button>{' '}
    <Button className="btn-fab" color="info" size="sm">
      <IconAlarm size="16" />
    </Button>{' '}
    <Button className="btn-fab" color="info" size="sm" outline>
      <IconAlarm size="16" />
    </Button>{' '}
    <Button className="btn-fab" color="danger" size="sm">
      <IconAlarm size="16" />
    </Button>
  </div>
);

const ViewContent = ({ children }) => (
  <div className="view-content view-components">{children}</div>
);

export default function ButtonsPage(props) {
  return (
    <Layout>
      <ViewHeader />
      <ViewContent>
        <Card>
          <CardBody>
            <DefaultButtons />
            <OutlineButtons />
            <FabButtons />
            <ButtonSizes />
            <ButtonStates />
            <BlockButtons />
            <div className="mb-5">
              <h6 className="h6 card-title text-uppercase">Button Dropdown</h6>
              <div className="mb-4">
                <ButtonGroupDropdown vertical={true} />
              </div>
              <div className="mb-5">
                <ButtonGroupDropdown />
              </div>
            </div>
            <ButtonToolbarExample />
          </CardBody>
        </Card>
      </ViewContent>
    </Layout>
  );
}

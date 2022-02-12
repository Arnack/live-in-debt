import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import Layout from '../../modules/layout';

const ViewHeader = () => (
  <div className="view-header">
    <header className="title text-white">
      <h1 className="h4 text-uppercase">Modals</h1>
      <p className="mb-0">Bootstrap modals with different pop transitions</p>
    </header>
  </div>
);

const ViewContent = ({ children }) => (
  <div className="view-content view-components">{children}</div>
);

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalClass: '',
    };
  }

  toggle = (e, str) => {
    this.setState({
      modal: !this.state.modal,
      modalClass: str,
    });
  };

  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.state.modalClass}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>{' '}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <div className="mt-4">
          <Button onClick={this.toggle}>Default</Button>{' '}
          <Button onClick={(e) => this.toggle(e, 'modalFadeInScale')}>Fade In &amp; Scale</Button>{' '}
          <Button onClick={(e) => this.toggle(e, 'modalFall')}>Fall</Button>{' '}
          <Button onClick={(e) => this.toggle(e, 'modalSlideIn')}>Slide In</Button>{' '}
          <Button onClick={(e) => this.toggle(e, 'modalRapid')}>Rapid</Button>{' '}
          <Button onClick={(e) => this.toggle(e, 'modal3DFlipHorizontal')}>
            3D Flip (Vertical)
          </Button>{' '}
          <Button onClick={(e) => this.toggle(e, 'modal3DFlipVertical')}>
            3D Flip (Horizontal)
          </Button>{' '}
        </div>
      </div>
    );
  }
}

export default function UIModalsPage(props) {
  return (
    <Layout>
      <ViewHeader />
      <ViewContent>
        <Card>
          <CardBody>
            <CardTitle className="h6 text-uppercase">Modal Effects</CardTitle>
            <p>
              Here are the some modern transition to create modal effects. Works great with
              bootstrap default modal.
            </p>
            <p>
              Available classes are: <code>modalFadeInScale</code>, <code>modalFall</code>,{' '}
              <code>modalSlideIn</code>,<code>&nbsp;modalRapid</code>,{' '}
              <code>modal3DFlipHorizontal</code> and <code>modal3DFlipVertical</code>
            </p>
            <ModalExample />
          </CardBody>
        </Card>
      </ViewContent>
    </Layout>
  );
}

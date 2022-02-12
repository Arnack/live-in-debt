import React from 'react';
import { Button, Card, CardBody, Alert, FormGroup, Label, Input, Col } from 'reactstrap';
import NotificationSystem from 'react-notification-system';
import Layout from '../../modules/layout';

const ViewHeader = () => (
  <div className="view-header">
    <header className="title text-white">
      <h1 className="h4 text-uppercase">Notification</h1>
      <p className="mb-0">Alerts and notifications system</p>
    </header>
  </div>
);

const ViewContent = ({ children }) => (
  <div className="view-content view-components">{children}</div>
);

const StaticAlerts = () => (
  <div className="mb-4">
    <Alert color="success">
      <strong>Well done!</strong> You successfully read this important alert message.
    </Alert>
    <Alert color="info">
      <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
    </Alert>
    <Alert color="warning">
      <strong>Warning!</strong> Better check yourself, you're not looking too good.
    </Alert>
    <Alert color="danger">
      <strong>Oh snap!</strong> Change a few things up and try submitting again.
    </Alert>
  </div>
);

class DismissalAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  onDismiss = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss} className="mb-4">
        I am an alert and I can be dismissed!
      </Alert>
    );
  }
}

class NotificationGenerator extends React.Component {
  constructor(props) {
    super(props);
    this._notificationSystem = null;
    this._lastNotificationAdded = null;
    this.state = {
      notification: {
        title: 'Default Title',
        message: 'Default Message',
        level: 'success',
        position: 'bc',
        dismissible: true,
      },
    };
  }
  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
  }

  notify = (e) => {
    e.preventDefault();
    let notification = this.state.notification;
    notification.onRemove = this.onRemove;
    this._lastNotificationAdded = this._notificationSystem.addNotification(notification);
    this.setState({});
  };

  changed = (e) => {
    let notification = this.state.notification,
      prop = e.target.name,
      value = e.target.value;

    notification[prop] = value;
    this.setState({
      notification: notification,
    });
  };

  onRemove = (notification) => {
    if (this._lastNotificationAdded && notification.uid === this._lastNotificationAdded.uid) {
      this._lastNotificationAdded = null;
    }
    this.setState({});
  };

  render() {
    let notification = this.state.notification;
    return (
      <Card color="info" outline>
        <CardBody>
          <FormGroup row>
            <Label sm={2}>Title:</Label>
            <Col sm={10}>
              <Input name="title" type="text" value={notification.title} onChange={this.changed} />
              <small>Leave empty to hide.</small>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Message:</Label>
            <Col sm={10}>
              <Input
                name="message"
                type="text"
                value={notification.message}
                onChange={this.changed}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Position:</Label>
            <Col sm={10}>
              <select
                className="form-control"
                name="position"
                value={notification.position}
                onChange={this.changed}>
                <option value="tl">Top left (tl)</option>
                <option value="tr">Top right (tr)</option>
                <option value="tc">Top center (tc)</option>
                <option value="bl">Bottom left (bl)</option>
                <option value="br">Bottom right (br)</option>
                <option value="bc">Bottom center (bc)</option>
                <option value="in">Invalid position</option>
              </select>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>State:</Label>
            <Col sm={10}>
              <select
                className="form-control"
                name="level"
                value={notification.level}
                onChange={this.changed}>
                <option value="success">Success (success)</option>
                <option value="error">Error (error)</option>
                <option value="warning">Warning (warning)</option>
                <option value="info">Info (info)</option>
                <option value="in">Invalid level</option>
              </select>
            </Col>
          </FormGroup>
          <FormGroup>
            <Button color="success" size="lg" onClick={this.notify}>
              Notify
            </Button>
          </FormGroup>
        </CardBody>
        <NotificationSystem ref="notificationSystem" />
      </Card>
    );
  }
}

export default function UINotificationPage(props) {
  return (
    <Layout>
      <ViewHeader />
      <ViewContent>
        <Card>
          <CardBody>
            <h6 className="text-uppercase mb-4">Static Alerts</h6>
            <StaticAlerts />
            <h6 className="text-uppercase mb-4">Dismissal Alert</h6>
            <DismissalAlert />
            <hr />
            <h6 className="text-uppercase mb-4">React Notification</h6>
            <NotificationGenerator />
          </CardBody>
        </Card>
      </ViewContent>
    </Layout>
  );
}

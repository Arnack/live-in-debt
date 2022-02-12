import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Badge,
} from 'reactstrap';

const ListGroupExample = () => (
  <div className="row">
    <div className="col-md-6 mb-4">
      <ListGroup>
        <ListGroupItem active>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
    </div>
    <div className="col-md-6 mb-4">
      <ListGroup>
        <ListGroupItem color="success">Cras justo odio</ListGroupItem>
        <ListGroupItem color="info">Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem color="warning">Morbi leo risus</ListGroupItem>
        <ListGroupItem color="danger">Porta ac consectetur ac</ListGroupItem>
      </ListGroup>
    </div>
    <div className="col-md-6 mb-4">
      <ListGroup>
        <ListGroupItem active>
          <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
          <ListGroupItemText>
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
            blandit.
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
          <ListGroupItemText>
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
            blandit.
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
          <ListGroupItemText>
            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius
            blandit.
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    </div>
    <div className="col-md-6 col-12 mb-4">
      <ListGroup>
        <ListGroupItem className="justify-content-between">
          Cras justo odio <Badge pill>14</Badge>
        </ListGroupItem>
        <ListGroupItem className="justify-content-between">
          Dapibus ac facilisis in <Badge pill>2</Badge>
        </ListGroupItem>
        <ListGroupItem className="justify-content-between">
          Morbi leo risus <Badge pill>1</Badge>
        </ListGroupItem>
      </ListGroup>
    </div>
  </div>
);

export default ListGroupExample;

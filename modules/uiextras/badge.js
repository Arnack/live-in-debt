import React from 'react';
import { Badge } from 'reactstrap';

const BadgeExample = () => (
  <div className="mb-5">
    <div>
      <Badge>default</Badge> <Badge color="primary">primary</Badge>{' '}
      <Badge color="success">success</Badge> <Badge color="info">info</Badge>{' '}
      <Badge color="warning">warning</Badge> <Badge color="danger">danger</Badge>
    </div>
    <div>
      <Badge color="default" pill>
        default
      </Badge>{' '}
      <Badge color="primary" pill>
        primary
      </Badge>{' '}
      <Badge color="success" pill>
        success
      </Badge>{' '}
      <Badge color="info" pill>
        info
      </Badge>{' '}
      <Badge color="warning" pill>
        warning
      </Badge>{' '}
      <Badge color="danger" pill>
        danger
      </Badge>
    </div>
  </div>
);

export default BadgeExample;

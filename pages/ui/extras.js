import React from 'react';
import { Card, CardBody } from 'reactstrap';
import TooltipExampleMulti from '../../modules/uiextras/tooltip';
import PopoverExampleMulti from '../../modules/uiextras/popover';
import ProgressExample from '../../modules/uiextras/progress';
import BadgeExample from '../../modules/uiextras/badge';
import PaginationExample from '../../modules/uiextras/pagination';
import ListGroupExample from '../../modules/uiextras/listgroup';
import BreadcrumbExample from '../../modules/uiextras/breadcrumb';
// Extras: Breadcrumb, Badge, Pagination, Tooltip, Popovers, Progress, ListGroup
import Layout from '../../modules/layout';

const ViewHeader = () => (
  <div className="view-header">
    <header className="title text-white">
      <h1 className="h4 text-uppercase">Extras</h1>
      <p className="mb-0">Some other ui components</p>
    </header>
  </div>
);

const ViewContent = ({ children }) => (
  <div className="view-content view-components">{children}</div>
);

export default function ExtrasPage(props) {
  return (
    <Layout>
      <ViewHeader />
      <ViewContent>
        <Card>
          <CardBody>
            <h6 className="text-uppercase mb-4">Tooltips</h6>
            <TooltipExampleMulti />
            <h6 className="text-uppercase">Popovers</h6>
            <div className="small mb-4">Click on the button to activate popover</div>
            <PopoverExampleMulti />
            <h6 className="text-uppercase mb-3">Progress Bars</h6>
            <ProgressExample />
            <h6 className="text-uppercase mb-3">Badges</h6>
            <BadgeExample />
            <h6 className="text-uppercase mb-3">Pagination</h6>
            <PaginationExample />
            <h6 className="text-uppercase mb-3">Breadcrumbs</h6>
            <BreadcrumbExample />
            <h6 className="text-uppercase mb-3">List Groups</h6>
            <ListGroupExample />
          </CardBody>
        </Card>
      </ViewContent>
    </Layout>
  );
}

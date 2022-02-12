import React from 'react';
import { Card, CardBody, Row } from 'reactstrap';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import SelectStates from '../../modules/forms/simpleSelect';
import AsyncSelect from '../../modules/forms/asyncSelect';
import Layout from '../../modules/layout';
import dynamic from 'next/dynamic';

// Editor doesn't work with SSR.
const Editor = dynamic(() => import('react-draft-wysiwyg').then((mod) => mod.Editor), {
  ssr: false,
});

const ViewHeader = () => (
  <div className="view-header">
    <header className="title text-white">
      <h1 className="h4 text-uppercase">Advanced Forms</h1>
      <p className="mb-0">Advanced form like custom select, text editor etc.</p>
    </header>
  </div>
);

const ViewContent = ({ children }) => (
  <div className="view-content view-components">{children}</div>
);

export default function FormsAdvancedPage() {
  return (
    <Layout>
      <ViewHeader />
      <ViewContent>
        <Card className="mb-4">
          <CardBody>
            <h6 className="mb-4 text-uppercase">Text Editor</h6>
            <Editor
              wrapperStyle={{ border: '1px solid #efefef', padding: '1rem' }}
              editorStyle={{ minHeight: '20em' }}
              toolbarStyle={{ fontSize: '12px' }}
            />
          </CardBody>
        </Card>

        <Card className="mb-4" style={{ minHeight: 400 }}>
          <CardBody>
            <h6 className="mb-4 text-uppercase">React Select</h6>
            <SelectStates />
            {/* <AsyncSelect /> */}
          </CardBody>
        </Card>
      </ViewContent>
    </Layout>
  );
}

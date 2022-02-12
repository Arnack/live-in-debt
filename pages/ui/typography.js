import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardGroup, Row } from 'reactstrap';
import Layout from '../../modules/layout';

const ViewHeader = () => (
  <div className="view-header">
    <header className="title text-white">
      <h1 className="h4 text-uppercase">Typography</h1>
      <p className="mb-0">Headings, stylings, text utilities, lists and much more</p>
    </header>
  </div>
);

const ViewContent = ({ children }) => (
  <div className="view-content view-components">{children}</div>
);

const DisplayStyles = () => (
  <div className="mb-5 col-md-6">
    <CardTitle className="h6 text-uppercase">Display Styles</CardTitle>
    <CardSubtitle className="mb-4 small">
      Use classes <code>display-*</code> to get the result.
    </CardSubtitle>
    <h1 className="display-1">Display 1</h1>
    <h1 className="display-2">Display 2</h1>
    <h1 className="display-3">Display 3</h1>
    <h1 className="display-4">Display 4</h1>
  </div>
);

const HeadingStyles = () => (
  <div className="mb-5 col-md-6">
    <CardTitle className="h6 text-uppercase">Heading Styles</CardTitle>
    <CardSubtitle className="mb-4 small">
      Use <code>h1-h6</code> elements or <code>.h1 to .h6</code> classes to get the desired result.
    </CardSubtitle>
    <h1>h1. First Header</h1>
    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
    <h2>
      h2. Second Header <small className="text-muted">with subhead</small>
    </h2>
    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut. </p>
    <h3>h3. Third Header</h3>
    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
    <h4>h4. Fourth Header</h4>
    <p>Nemo enim ipsam voluptatem quia voluptas sit.</p>
    <h5>h5. Fifth Header</h5>
    <p>Temporibus autem quibusdam et aut officiis.</p>
    <h6>h6. Sixth Header</h6>
  </div>
);

const InlineTextStyles = () => (
  <Card className="mb-4">
    <CardBody>
      <CardTitle className="h6 text-uppercase">Text Styles</CardTitle>
      <p className="lead">I am a lead paragraph. Slightly bigger than normal body text.</p>
      <p>
        You can use the mark tag to <mark>highlight</mark> text.
      </p>
      <p>
        <del>This line of text is meant to be treated as deleted text.</del>
      </p>
      <p>
        <s>This line of text is meant to be treated as no longer accurate.</s>
      </p>
      <p>
        <ins>This line of text is meant to be treated as an addition to the document.</ins>
      </p>
      <p>
        <u>This line of text will render as underlined</u>
      </p>
      <p>
        <small>This line of text is meant to be treated as fine print.</small>
      </p>
      <p>
        <strong>This line rendered as bold text.</strong>
      </p>
      <p>
        <em>This line rendered as italicized text.</em>
      </p>
      <p>
        <abbr title="attribute">attr</abbr>
      </p>
      <p>
        <abbr title="HyperText Markup Language" className="initialism">
          HTML
        </abbr>
      </p>
    </CardBody>
  </Card>
);

const BlockquoteStyles = () => (
  <Card className="mb-4">
    <CardBody>
      <CardTitle className="h6 text-uppercase mb-4">Blockquote Styles</CardTitle>
      <blockquote className="blockquote">
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
        </p>
      </blockquote>
      <br />
      <blockquote className="blockquote">
        <p className="mb-0">
          Add a <code>&lt;footer class="blockquote-footer"&gt;</code> for identifying the source.
          Wrap the name of the source work in <code>&lt;cite&gt;</code>.
        </p>
        <footer className="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
      <blockquote className="blockquote blockquote-reverse">
        <p className="mb-0">
          Add <code>blockquote-reverse</code> class to make reverse blockquote.
        </p>
        <footer className="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
    </CardBody>
  </Card>
);

const TypeClasses = () => (
  <Card>
    <CardBody>
      <CardTitle className="h6 text-uppercase mb-4">Type Classes</CardTitle>
      <p className="text-primary text-capitalize">Text Primary with Capitalize</p>
      <p className="text-success text-lowercase">Text Success with Lowercase</p>
      <p className="text-info text-uppercase">Text Info with Uppercase</p>
      <p className="text-muted text-left">Text Muted with Left Alignment</p>
      <p className="text-warning text-right">Text Warning with Right Alignment</p>
      <p className="text-danger text-center">Text Danger with Center Alignment</p>
      <p className="font-weight-bold">Bold text.</p>
      <p className="font-weight-normal">Normal weight text.</p>
      <p className="font-italic">Italic text.</p>
    </CardBody>
  </Card>
);

const DescriptionLists = () => (
  <Card>
    <CardBody>
      <CardTitle className="h6 text-uppercase mb-4">Description List alignment</CardTitle>
      <dl className="row">
        <dt className="col-sm-3">Description lists</dt>
        <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

        <dt className="col-sm-3">Euismod</dt>
        <dd className="col-sm-9">
          Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.
        </dd>
        <dd className="col-sm-9 offset-sm-3">Donec id elit non mi porta gravida at eget metus.</dd>

        <dt className="col-sm-3">Malesuada porta</dt>
        <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

        <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
        <dd className="col-sm-9">
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
          massa justo sit amet risus.
        </dd>

        <dt className="col-sm-3">Nesting</dt>
        <dd className="col-sm-9">
          <dl className="row">
            <dt className="col-sm-4">Nested definition list</dt>
            <dd className="col-sm-8">
              Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.
            </dd>
          </dl>
        </dd>
      </dl>
    </CardBody>
  </Card>
);

export default function TypographyPage(props) {
  return (
    <Layout>
      <ViewHeader />
      <ViewContent>
        <Card className="mb-4">
          <CardBody>
            <Row>
              <DisplayStyles />
              <HeadingStyles />
            </Row>
          </CardBody>
        </Card>

        <InlineTextStyles />
        <BlockquoteStyles />

        <CardGroup>
          <TypeClasses />
          <DescriptionLists />
        </CardGroup>
      </ViewContent>
    </Layout>
  );
}

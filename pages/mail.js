import React from 'react';
import screenfull from 'screenfull';
import Link from 'next/link';
import {
  Button,
  ButtonGroup,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Progress,
  Modal,
  ModalHeader,
  ModalBody,
  InputGroup,
  InputGroupAddon,
  Input,
} from 'reactstrap';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import dynamic from 'next/dynamic';

import IconNotification from 'react-icons/lib/md/notifications-none';
import IconFullScreen from 'react-icons/lib/md/crop-free';
import IconFace from 'react-icons/lib/md/face';
import IconMail from 'react-icons/lib/md/mail';
import IconSecurity from 'react-icons/lib/md/security';
import IconHelp from 'react-icons/lib/md/help';
import IconLogout from 'react-icons/lib/md/power-settings-new';
import IconDownload from 'react-icons/lib/md/cloud-download';
import IconCake from 'react-icons/lib/md/cake';
import IconInbox from 'react-icons/lib/fa/hdd-o';
import IconSent from 'react-icons/lib/fa/paper-plane-o';
import IconDraft from 'react-icons/lib/fa/pencil';
import IconChat from 'react-icons/lib/fa/comments-o';
import IconTrash from 'react-icons/lib/fa/trash-o';
import IconLabel from 'react-icons/lib/md/lens';
import IconBack from 'react-icons/lib/md/arrow-back';
import IconForward from 'react-icons/lib/md/arrow-forward';
import IconMenu from 'react-icons/lib/md/menu';

// Editor doesn't work with SSR.
const Editor = dynamic(() => import('react-draft-wysiwyg').then((mod) => mod.Editor), {
  ssr: false,
});

const emailLists = [
  {
    name: 'park.io',
    subject: 'Selling 40 io domains',
    summary: 'Lorem ipsum dolar sit amet consector',
    date: '22nd Dec',
  },
  {
    name: 'android.io',
    subject: 'Calling all android developers to attend a meet',
    summary:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
    date: '12th Feb',
  },
  {
    name: 'Gray Dark',
    subject: 'Blackhat SEO tactics to avoid',
    summary:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid',
    date: '14th Feb',
  },
  {
    name: 'Taptica',
    subject: 'Monetize your inventory with us',
    summary:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni',
    date: '3 min ago',
  },
  {
    name: 'formicon.io',
    subject: 'Online Form Generator',
    summary: 'molestias excepturi sint occaecati cupiditate non provident, similique sunt',
    date: '4 days ago',
  },
];

export default function MailPage() {
  const [navOpen, setNavOpen] = React.useState(false);
  const [modal, setModal] = React.useState(false);

  const toggleNav = () => {
    setNavOpen((s) => !s);
  };

  const toggleModal = () => {
    setModal((s) => !s);
  };

  return (
    <div className="view-mail">
      <Modal isOpen={modal} toggle={toggleModal} size="lg">
        <ModalHeader toggle={toggleModal}>New Message</ModalHeader>
        <ModalBody>
          <InputGroup className="mb-2">
            <InputGroupAddon>To:</InputGroupAddon>
            <Input placeholder="abc@gmail.com" />
          </InputGroup>
          <InputGroup className="mb-2">
            <InputGroupAddon>Subject:</InputGroupAddon>
            <Input placeholder="Lorem ipsum dolar sit amet." />
          </InputGroup>
          <Editor
            wrapperStyle={{ border: '1px solid #efefef', padding: '1rem' }}
            editorStyle={{ minHeight: '12em' }}
            toolbarStyle={{ fontSize: '12px' }}
          />
        </ModalBody>
      </Modal>
      <header className="mail-head d-flex align-items-center justify-content-between p-4">
        <Link href="/">
          <a style={{ marginTop: '-.4rem' }} className="hidden-sm-down">
            <svg
              width="26px"
              height="34px"
              viewBox="11 4 50 48"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg">
              {/* <polyline id="Path" stroke="#4CAF50" strokeWidth="11" fill="none" points="21 36.6942904 49.6837349 30.667532 51.5974407 16 31.3353728 16 29.3402961 16 21 36.6942904 29.3402958 55.1487999 53.5974407 52.415905"></polyline> */}
              <path
                id="Path"
                stroke="#fff"
                strokeWidth="12"
                fill="none"
                d="M26.5282909,38.9526768 C26.5282909,38.9526768 49.3408202,31.7856836 49.3408202,28.3647852 C49.3408202,24.9438868 49.5702829,11.7001695 37.0898141,17.411107 C24.6093454,23.1220444 24.821289,23.6064453 24.821289,23.6064453 C24.821289,23.6064453 22.8105177,47.2876359 26.528291,53.5093155 C30.2460643,59.7309951 52.7998045,53.5093155 54.7998045,53.5093155"></path>
            </svg>
            <strong className="h4 text-uppercase font-weight-bold" style={{ color: '#fafafa' }}>
              ract
            </strong>
          </a>
        </Link>
        <IconMenu size="24" color="#fff" className="hidden-md-up mr-3" onClick={toggleNav} />
        <form className="col-6 col-md-6 ml-auto mail-search">
          <input type="text" placeholder="Search for mails..." className="form-control" />
        </form>
        <div className="right-elems ml-auto d-flex">
          <div className="wrap hidden-sm-down">
            <IconFullScreen size="22" color="#fff" onClick={() => screenfull.toggle()} />
          </div>
          <div className="wrap notify">
            <UncontrolledDropdown>
              <DropdownToggle tag="div">
                <IconNotification size="22" color="#fff" />
                <span className="badge badge-danger">4</span>
              </DropdownToggle>

              <DropdownMenu right style={{ minWidth: '18rem' }}>
                <DropdownItem header>You have 4 new notifications</DropdownItem>
                <DropdownItem divider />
                <DropdownItem className="mb-2">
                  <p>Server Upgrade Required</p>
                  <Progress value={70} color="danger" style={{ height: '3px' }} />
                </DropdownItem>
                <DropdownItem className="d-flex align-items-center">
                  <IconDownload size="28" className="text-success" />
                  <div className="ml-3">
                    <div>5 App Downloaded</div>
                    <small className="text-muted">5 min ago</small>
                  </div>
                </DropdownItem>
                <DropdownItem className="d-flex align-items-center">
                  <IconMail size="28" className="text-warning" />
                  <div className="ml-3">
                    <div>Roni sent you a message</div>
                    <small className="text-muted">2 hours ago</small>
                  </div>
                </DropdownItem>
                <DropdownItem className="d-flex align-items-center">
                  <IconCake size="28" className="text-primary" />
                  <div className="ml-3">
                    <div>You're earned a badge</div>
                    <small className="text-muted">12 hours ago</small>
                  </div>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>

          <div className="wrap profile">
            <UncontrolledDropdown>
              <DropdownToggle tag="div">
                <img src="http://i.imgur.com/0rVeh4A.jpg" alt="avatar" />
              </DropdownToggle>
              <DropdownMenu right style={{ minWidth: '12rem' }}>
                <DropdownItem header>Balance: $993.4</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <IconFace size="16" />
                  &emsp;<a href="#na">Profile</a>
                </DropdownItem>
                <DropdownItem>
                  <IconMail size="16" />
                  &emsp;<a href="#na">Inbox</a>
                </DropdownItem>
                <DropdownItem>
                  <IconSecurity size="16" />
                  &emsp;<a href="#na">Security</a>
                </DropdownItem>
                <DropdownItem>
                  <IconHelp size="16" />
                  &emsp;<a href="#na">Help</a>
                </DropdownItem>
                <div className="text-right ml-3 mr-3 mt-2">
                  <Button block color="success" size="sm">
                    <IconLogout size="15" />
                    &emsp;Logout
                  </Button>
                </div>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
      </header>

      <nav className={`email-nav p-4 ${navOpen ? 'open' : ''}`}>
        <button className="btn btn-success btn-block mb-4" onClick={toggleModal}>
          Compose
        </button>
        <h6 className="mb-3 small text-muted">Navigation</h6>
        <ul className="list-unstyled">
          <li>
            <a href="#na" className="active">
              <IconInbox size="16" />
              <span className="text">Inbox</span>&emsp;
              <span className="badge badge-primary">15</span>
            </a>
          </li>
          <li>
            <a href="#na">
              <IconSent size="16" />
              <span className="text">Sent</span>&emsp;<span className="badge badge-success">3</span>
            </a>
          </li>
          <li>
            <a href="#na">
              <IconDraft size="16" />
              <span className="text">Drafts</span>&emsp;
              <span className="badge badge-warning">1</span>
            </a>
          </li>
          <li>
            <a href="#na">
              <IconChat size="16" />
              <span className="text">Chats</span>
            </a>
          </li>
          <li>
            <a href="#na">
              <IconTrash size="16" />
              <span className="text">Trash</span>
            </a>
          </li>
        </ul>
        <h6 className="mb-3 text-muted small">Labels</h6>
        <ul className="labels list-unstyled">
          <li>
            <span className="text">Work</span>
            <IconLabel size="10" color="#f44336" />
          </li>
          <li>
            <span className="text">Data</span>
            <IconLabel size="10" color="#1976d2" />
          </li>
          <li>
            <span className="text">Clients</span>
            <IconLabel size="10" color="#795548" />
          </li>
        </ul>
      </nav>

      <div className="email-content-wrapper">
        <ul className="email-lists list-unstyled mb-4">
          {emailLists.map((email, i) => (
            <li key={i}>
              <a href="#n">
                <div className="d-flex justify-content-between alig-items-start">
                  <h6>{email.name}</h6>
                  <span className="small">{email.date}</span>
                </div>
                <p className="subject">{email.subject}</p>
                <p className="summary small text-muted mb-0">{email.summary}</p>
              </a>
            </li>
          ))}
        </ul>

        <div className="card email-content">
          <div className="card-body">
            <header className="d-flex justify-content-between align-items-center">
              <div>
                <h5>Calling All Android Developers</h5>
                <h6>android.io</h6>
              </div>
              <div>
                <ButtonGroup className="mb-2">
                  <Button size="sm">
                    <IconTrash size="12" />
                  </Button>
                  <Button size="sm">
                    <IconBack size="12" />
                  </Button>
                  <Button size="sm">
                    <IconForward size="12" />
                  </Button>
                </ButtonGroup>
                <div className="text-info small text-bold">12th Feb</div>
              </div>
            </header>
            <div className="summary">
              <p>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis
                dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum
                necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae.
              </p>
              <blockquote className="blockquote">
                Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus
                asperiores repellat.
              </blockquote>
              <figure>
                <img src="https://placeimg.com/300/220/nature" alt="placeholder" />
                <figcaption className="text-muted small">
                  Free Random Image by placeimg.com
                </figcaption>
              </figure>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
              </p>
            </div>
            <Editor
              wrapperStyle={{ border: '1px solid #efefef', padding: '1rem' }}
              editorStyle={{ minHeight: '20em' }}
              toolbarStyle={{ fontSize: '12px' }}
            />
            <div className="mt-2 text-right">
              <Button color="success">
                <IconSent size="12" />
                &nbsp;Reply
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

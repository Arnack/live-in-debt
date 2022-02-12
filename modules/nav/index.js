import React from 'react';
import { Collapse } from 'reactstrap';
import ActiveLink from '../../elements/activeLink';
import Link from 'next/link';
import { useRouter } from 'next/router';

// icons
import IconDashboard from 'react-icons/lib/md/dashboard';
import IconWidgets from 'react-icons/lib/md/extension';
import IconUI from 'react-icons/lib/md/gradient';
import IconPages from 'react-icons/lib/md/filter-none';
import IconChart from 'react-icons/lib/md/landscape';
import IconTable from 'react-icons/lib/md/grid-on';
import IconForm from 'react-icons/lib/md/layers';
import IconDown from 'react-icons/lib/md/chevron-right';
import IconMail from 'react-icons/lib/md/email';
import ScrollArea from '../scrollbar';

const NavHead = (props) => (
  <header className="nav-head">
    <Link href="/">
      <a>
        <svg
          width="24px"
          height="30px"
          viewBox="11 4 50 52"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg">
          {/* <polyline id="Path" stroke="#4CAF50" strokeWidth="11" fill="none" points="21 36.6942904 49.6837349 30.667532 51.5974407 16 31.3353728 16 29.3402961 16 21 36.6942904 29.3402958 55.1487999 53.5974407 52.415905"></polyline> */}
          <path
            id="Path"
            strokeWidth="12"
            fill="none"
            d="M26.5282909,38.9526768 C26.5282909,38.9526768 49.3408202,31.7856836 49.3408202,28.3647852 C49.3408202,24.9438868 49.5702829,11.7001695 37.0898141,17.411107 C24.6093454,23.1220444 24.821289,23.6064453 24.821289,23.6064453 C24.821289,23.6064453 22.8105177,47.2876359 26.528291,53.5093155 C30.2460643,59.7309951 52.7998045,53.5093155 54.7998045,53.5093155"></path>
        </svg>
        <strong className="h4 text-uppercase">ract</strong>
      </a>
    </Link>
    <div className={`toggle-dot ${props.mini ? 'active' : ''}`} onClick={props.toggleNav}></div>
  </header>
);

export default function Nav(props) {
  const router = useRouter();
  const { basePath, pathname } = router;

  const [collapseBasePath, setCollapseBasePath] = React.useState(''); // set Collapse path.

  React.useEffect(() => {
    // this must be base path of collapse and must be unique for each nested nav.
    const paths = ['ui', 'forms', 'pages'];
    paths.forEach((p) => {
      const withBasePath = `${basePath}/${p}`;
      if (pathname.startsWith(withBasePath)) setCollapseBasePath(withBasePath);
    });
  }, [basePath, pathname]);

  const toggleCollapse = (p, e) => {
    setCollapseBasePath((bp) => (bp === p ? '' : p));
  };

  return (
    <nav className={`site-nav ${props.mini ? 'mini' : ''}`}>
      <NavHead {...props} />
      <ScrollArea
        className="nav-list-container"
        horizontal={false}
        verticalScrollbarStyle={{ width: '4px', marginLeft: '10px' }}>
        <ul className="list-unstyled nav-list clearfix">
          <li>
            <div className="nav-list-title">Views</div>
          </li>
          <li>
            <ActiveLink href="/" activeClassName="active">
              <a>
                <IconDashboard size="18" color="#2962FF" className="icon-dashboard" />
                <span className="name">Dashboard</span>
              </a>
            </ActiveLink>
          </li>

          <li>
            <ActiveLink href="/mail" activeClassName="active">
              <a>
                <IconMail size="18" color="#00E676" />
                <span className="name">Mail</span>
              </a>
            </ActiveLink>
          </li>

          <li>
            <ActiveLink href="/widgets" activeClassName="active">
              <a>
                <IconWidgets size="18" color="#7C4DFF" />
                <span className="name">Widgets</span>
                &emsp;
                <span
                  className="badge text-uppercase"
                  style={{ background: '#7C4DFF', color: '#fff' }}>
                  10
                </span>
              </a>
            </ActiveLink>
          </li>

          <li>
            <div className="nav-list-title">Components</div>
          </li>
          <li
            onClick={(e) => toggleCollapse(`${basePath}/ui`, e)}
            className={collapseBasePath === `${basePath}/ui` ? 'selected' : ''}>
            <ActiveLink activeClassName="active" href="">
              <a>
                <IconUI size="18" />
                <span className="name">Elements</span>
                <IconDown size="14" className="icon-down" />
              </a>
            </ActiveLink>
            <Collapse isOpen={collapseBasePath === `${basePath}/ui`}>
              <ul className="inner-drop list-unstyled">
                <li>
                  <ActiveLink href="/ui/buttons" activeClassName="active">
                    <a>Buttons</a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/ui/typography" activeClassName="active">
                    <a>Typography</a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/ui/cards" activeClassName="active">
                    <a>Cards</a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/ui/modals" activeClassName="active">
                    <a>Modals</a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/ui/notification" activeClassName="active">
                    <a>Notification</a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/ui/extras" activeClassName="active">
                    <a>Extras</a>
                  </ActiveLink>
                </li>
              </ul>
            </Collapse>
          </li>

          <li
            onClick={(e) => toggleCollapse(`${basePath}/forms`, e)}
            className={collapseBasePath === `${basePath}/forms` ? 'selected' : ''}>
            <Link href="">
              <a>
                <IconForm size="18" />
                <span className="name">Forms</span>
                <IconDown size="14" className="icon-down" />
              </a>
            </Link>
            <Collapse isOpen={collapseBasePath === `${basePath}/forms`}>
              <ul className="inner-drop list-unstyled">
                <li>
                  <ActiveLink href="/forms/general" activeClassName="active">
                    <a>General</a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/forms/advanced" activeClassName="active">
                    <a>Advanced</a>
                  </ActiveLink>
                </li>
              </ul>
            </Collapse>
          </li>

          <li>
            <ActiveLink href="/charts" activeClassName="active">
              <a>
                <IconChart size="18" />
                <span className="name">Charts</span>&emsp;
                <span className="badge badge-primary badge-chart text-uppercase">mixed</span>
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/tables" activeClassName="active">
              <a>
                <IconTable size="18" />
                <span className="name">Tables</span>
              </a>
            </ActiveLink>
          </li>

          <li
            onClick={(e) => toggleCollapse(`${basePath}/pages`, e)}
            className={collapseBasePath === `${basePath}/pages` ? 'selected' : ''}>
            <Link href="">
              <a>
                <IconPages size="18" />
                <span className="name">Pages</span>
                <IconDown size="14" className="icon-down" />
              </a>
            </Link>
            <Collapse isOpen={collapseBasePath === `${basePath}/pages`}>
              <ul className="inner-drop list-unstyled">
                <li>
                  <ActiveLink href="/pages/signin" activeClassName="active">
                    <a>Sign In</a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/pages/register" activeClassName="active">
                    <a>Register</a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/pages/forget" activeClassName="active">
                    <a>Forget Pass</a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/pages/404" activeClassName="active">
                    <a>404</a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/pages/invoice" activeClassName="active">
                    <a>Invoice</a>
                  </ActiveLink>
                </li>
              </ul>
            </Collapse>
          </li>
        </ul>
      </ScrollArea>
    </nav>
  );
}

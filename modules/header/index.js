import React from 'react';
import screenfull from 'screenfull';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Progress,
} from 'reactstrap';

// icons
import IconNotification from 'react-icons/lib/md/notifications-none';
import IconFullScreen from 'react-icons/lib/md/crop-free';
import IconSearch from 'react-icons/lib/md/search';
import IconFace from 'react-icons/lib/md/face';
import IconMail from 'react-icons/lib/md/mail';
import IconSecurity from 'react-icons/lib/md/security';
import IconHelp from 'react-icons/lib/md/help';
import IconLogout from 'react-icons/lib/md/power-settings-new';
import IconDownload from 'react-icons/lib/md/cloud-download';
import IconCake from 'react-icons/lib/md/cake';
import IconMenu from 'react-icons/lib/md/menu';

const Header = (props) => (
  <header className="site-head d-flex align-items-center justify-content-between">
    <div className="wrap mr-4">
      {/* <IconMenu size="24" color="#fff" onClick={props.toggleNav} style={{ cursor: 'pointer' }} />  */}
    </div>
    <div className="right-elems ml-auto d-flex">
      <div className="full-screen-wrapper wrap hidden-sm-down">
        <IconFullScreen size="22" color="#fff" onClick={() => screenfull.toggle()} />
      </div>
    </div>
  </header>
);

export default Header;

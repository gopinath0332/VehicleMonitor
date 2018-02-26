import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {autobind} from 'core-decorators';
import {
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap';
import util from "../../../util/appUtil";
import styles from "./header.less";


@autobind
class Header extends Component {

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  render() {
    const baseClass = ["app-header", "navbar", styles.header].join(" ");
    return (
      <header className={baseClass}>
        <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
          <span className="fa fa-bars menu-bars"/>
        </NavbarToggler>
        <NavbarBrand href="/"/>
        <NavbarToggler className="d-md-down-none" onClick={this.sidebarToggle}>
          <span className="fa fa-bars menu-bars"/>
        </NavbarToggler>
        <h4 className="app-title mr-auto">Vehicle Monitoring System</h4>
        <label className="app-user-name"> {util.getUsername()}</label>
        <NavbarToggler className="d-md-down-none" onClick={this.asideToggle}>
          <i className="fa fa-cog settings"/>
        </NavbarToggler>
      </header>
    );
  }
}

export default withRouter(Header);

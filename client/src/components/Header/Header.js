import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import styles from './Header.module.sass';
import CONSTANTS from '../../constants';
import {  clearUserStore, headerRequest } from '../../actions/actionCreator';
import Logo from '../Logo';

class Header extends React.Component {
  componentDidMount() {
    if (!this.props.data) {
      this.props.getUser();
    }
  }

    logOut = () => {
      localStorage.clear();
      this.props.clearUserStore();
      this.props.history.replace('/login');
    };

    startContests = () => {
      this.props.history.push('/startContest');
    };

    renderLoginButtons = () => {
      if (this.props.data) {
        return (
          <>
            <div className={styles.userInfo}>
              <img
                src={this.props.data.avatar === 'anon.png' ? CONSTANTS.ANONYM_IMAGE_PATH : `${CONSTANTS.publicURL}${this.props.data.avatar}`}
                alt="user"
              />
              <span>{`Hi, ${this.props.data.displayName}`}</span>
              <img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`} alt="menu" />
              <ul>
                <li>
                  <Link
                    to="/dashboard"
                    style={{ textDecoration: 'none' }}
                  >
                    <span>View Dashboard</span>
                  </Link>
                </li>
                <li><Link to="/account" style={{ textDecoration: 'none' }}><span>My Account</span></Link></li>
                <li>
                  <Link
                    to="http:/www.google.com"
                    style={{ textDecoration: 'none' }}
                  >
                    <span>Messages</span>
                  </Link>
                </li>
                <li>
                  <Link to="http:/www.google.com" style={{ textDecoration: 'none' }}><span>Affiliate Dashboard</span></Link>
                </li>
                <li><span onClick={this.logOut}>Logout</span></li>
              </ul>
            </div>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}email.png`} className={styles.emailIcon} alt="email" />
          </>
        );
      }
      return (
        <>
          <Link to="/login" style={{ textDecoration: 'none' }}><span className={styles.btn}>LOGIN</span></Link>
          <Link to="/registration" style={{ textDecoration: 'none' }}>
            <span
              className={styles.btn}
            >
              SIGN UP
            </span>
          </Link>
        </>
      );
    };

    render() {
      if (this.props.isFetching) {
        return null;
      }
      return (
        <div className={styles.headerContainer}>
          <div className={styles.fixedHeader}>
            <span className={styles.info}>Squadhelp recognized as one of the Most Innovative Companies by Inc Magazine.</span>
            <a href="http://www.google.com">Read Announcement</a>
          </div>
          <div className={styles.loginSignnUpHeaders}>
            <div className={styles.numberContainer}>
              <a className={styles.numberLink} href={`tel:${CONSTANTS.CONTACTS.PHONE}`}>
              <img src={`${CONSTANTS.STATIC_IMAGES_PATH}phone.png`} alt="phone" />
              <span>{CONSTANTS.CONTACTS.PHONE}</span></a>
            </div>
            <div className={styles.userButtonsContainer}>
              {this.renderLoginButtons()}
            </div>
          </div>
          <div className={styles.navContainer}>
            <Logo className={styles.logo}/>
            <div className={styles.leftNav}>
              <div className={styles.nav}>
                <ul>
                  <li><span>
                  <Link to='/price'>Price </Link>
                  </span></li>
                  <li>
                    <span>Name Ideas</span>
                    <img
                      src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                      alt="menu"
                    />
                    <ul>
                      <li><a href="http://www.google.com">BEAUTY</a></li>
                      <li><a href="http://www.google.com">CONSULTING</a></li>
                      <li><a href="http://www.google.com">E-COMMERS</a></li>
                      <li><a href="http://www.google.com">FASHION & CLOTHING</a></li>
                      <li><a href="http://www.google.com">FINANCE</a></li>
                      <li><a href="http://www.google.com">REAL ESTATE</a></li>
                      <li><a href="http://www.google.com">TEAC</a></li>
                      <li className={styles.last}>
                        <a href="http://www.google.com">MORE CATEGORIES</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Contents</span>
                    <img
                      src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                      alt="menu"
                    />
                    <ul>
                      <li><a href="http://www.google.com">HOW IT WORKS</a></li>
                      <li><a href="http://www.google.com">PRICING</a></li>
                      <li><a href="http://www.google.com">AGENCY SERVICE</a></li>
                      <li><a href="http://www.google.com">ACTIVE CONTESTS</a></li>
                      <li><a href="http://www.google.com">WINNERS</a></li>
                      <li><a href="http://www.google.com">LEADERBOARD</a></li>
                      <li className={styles.last}>
                        <a href="http://www.google.com">
                            BECOME A
                            CREATIVE
</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Our Work</span>
                    <img
                      src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                      alt="menu"
                    />
                    <ul>
                      <li><a href="http://www.google.com">NAMES</a></li>
                      <li><a href="http://www.google.com">TAGLINES</a></li>
                      <li><a href="http://www.google.com">LOGOS</a></li>
                      <li className={styles.last}>
                        <a href="http://www.google.com">TESTIMONIALS</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Names For Sale</span>
                    <img src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`} alt="menu" />
                    <ul>
                      <li><a href="http://www.google.com">POPULAR NAMES</a></li>
                      <li><a href="http://www.google.com">SHORT NAMES</a></li>
                      <li><a href="http://www.google.com">INTRIGUING NAMES</a></li>
                      <li><a href="http://www.google.com">NAMES BY CATEGORY</a></li>
                      <li><a href="http://www.google.com">VISUAL NAME SEARCH</a></li>
                      <li className={styles.last}>
                        <a href="http://www.google.com">
                            SELL YOUR
                            DOMAINS
</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Blog</span>
                    <img
                      src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                      alt="menu"
                    />
                    <ul>
                      <li><a href="http://www.google.com">ULTIMATE NAMING GUIDE</a></li>
                      <li><a href="http://www.google.com">POETIC DEVICES IN BUSINESS NAMING</a></li>
                      <li><a href="http://www.google.com">CROWDED BAR THEORY</a></li>
                      <li className={styles.last}>
                        <a href="http://www.google.com">ALL ARTICLES</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              {this.props.data && this.props.data.role !== CONSTANTS.CREATOR
                        && <div className={styles.startContestBtn} onClick={this.startContests}>START CONTEST</div>}
            </div>
          </div>
        </div>
      );
    }
}

const mapStateToProps = (state) => state.userStore;
const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(headerRequest()),
  clearUserStore: () => dispatch(clearUserStore()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));

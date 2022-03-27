import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import Account from "components/Account";
import Chains from "components/Chains";
import NFTBalance from "components/NFTBalance";
import NFTTokenIds from "components/NFTTokenIds";
import { Menu, Layout, Drawer, Button, Tooltip, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./style.css";
import "./App.css";
import Text from "antd/lib/typography/Text";
import Home from "components/Home";
import NewLogo from "components/NewLogo/NewLogo";
import Details from "components/Details";
import RecordImage from "./assets/RecordImage.png";
import twitterIcon from "./assets/bi_twitter.png";
import mailIcon from "./assets/carbon_email.png";
import discordIcon from "./assets/bi_discord.png";
import HomepageContent from "components/HomepageContent/HomepageContent";
import Tree from './components/Tree/Tree';
import ProfileComponent from './components/profile/ProfileComponent';
import HelpComponent from './components/HelpComponent/HelpComponent';
const { Header, Footer } = Layout;

const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  const [inputValue, setInputValue] = useState("explore");

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  const [showDropdown, setShowDropdown] = useState(false);
  const [goBack, setGoBack] = useState(false);
  const [treeClicked, settreeClicked] = useState(false);
  const onClickDropdown = () => {setShowDropdown(!showDropdown);
  setGoBack(!goBack)

}

  return (
    <Layout style={styles.layout}>
      <Router>
        <div className="bigMenu">
          <Header style={styles.header} className="appHeader">
            {/* LEFT MENU  */}
            {/* <Logo /> */}

            <NewLogo goback={goBack} />

            {/* CENTER MENU */}

            <Menu
              style={styles.menu}
              mode="horizontal"
              defaultSelectedKeys={["nftMarket"]}
            >
              {/* <Menu.Item key="nftMarket" onClick={() => setInputValue("explore")} >
              <NavLink to="/Collections" style={styles.menuItem}>Collections</NavLink>
            </Menu.Item> */}
              <Menu.Item
                key="nftMarket"
                onClick={() => console.log("Featured Tab Clicked")}
              >
                <NavLink to="/Featured" style={styles.menuItem}>
                  Featured
                </NavLink>
              </Menu.Item>
              
              <Menu.Item key="nft">
                <NavLink to="/Profile" style={styles.menuItem}>
                  Wallet
                </NavLink>
              </Menu.Item> 
            </Menu>
            <div style={styles.headerRight}>
              {/* <Chains /> */}
              <div style={styles.menuProfile} className="userProfile">
                <span><NavLink to="/UserProfile">Profile</NavLink></span>
              </div>
              <Account />
            </div>
          </Header>
        </div>

        <div className="smallMenu">
          <div className="smallMenu__navbar">
            <div className="logo">
              <NewLogo />
            </div>
            <div className="smallMenu__rightMenu">
              <div className="connectBtn">
                <Account />
              </div>

              <Tooltip>
                <div>
                  <a className="ant-dropdown-link" onClick={onClickDropdown}>
                    <MenuOutlined style={styles.menuOutline} />
                  </a>
                </div>
              </Tooltip>
            </div>
          </div>

          {showDropdown && (
            <div className="dropdownMenu">
              <div className="dropdownMenu__list">
                <div className="menuList__item menuList__item--active">
                  Featured
                </div>

                <div className="menuList__item">About</div>

                <div className="menuList__item userProfileDropdown" onClick={onClickDropdown}><span><NavLink to="/UserProfile">Profiles</NavLink></span></div>
              </div>
            </div>
          )}
        </div>
        <div style={styles.content}>
          <div>
            <Switch>
              <Route path="/About">
                <Home />
              </Route>
              <Route path="/featured">
                <HomepageContent />
              </Route>
              <Route path="/details">
                <Details />
              </Route>
              <Route path="/Profile">
                <NFTBalance />
              </Route>
              <Route path="/tree">
                <Tree />
              </Route>
              <Route path="/Collections">
                <NFTTokenIds
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                />
              </Route>

              <Route path="/UserProfile">
                <ProfileComponent />
              </Route>
              <Route path="/HelpPage">
                <HelpComponent />
              </Route>
            </Switch>
            <Redirect to="/featured" />
          </div>
        </div>
      </Router>

      <Footer style={styles.footer} className="footer">
        <div className="footerNew">
          <div className="footerBtn">
            <span>Want to work with Ently?</span>
          </div>
          <div className="footerMenu">
            <a href="https://twitter.com/entlyNFT">
              <img src={twitterIcon} loading="lazy" alt="" />
            </a>

            <a href="https://discord.com/invite/EQHR7NY4sm">
              <img src={discordIcon} loading="lazy" alt="" class="image-20" />
            </a>

            <a href="https://twitter.com/entlyNFT">
              <img src={mailIcon} loading="lazy" alt="" />
            </a>
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

// export const Logo = () => (
//   <div style={{ display: "flex" }}>
//     <img
//       src="https://uploads-ssl.webflow.com/61afaeeac657f2838b308c38/61afb342a9679780d7dfaf3c_Group%2039.png"
//       loading="lazy"
//       sizes="(max-width: 767px) 97px, (max-width: 991px) 10vw, 97px"
//       width="150"
//       srcset="https://uploads-ssl.webflow.com/61afaeeac657f2838b308c38/61afb342a9679780d7dfaf3c_Group%2039-p-500.png 500w, https://uploads-ssl.webflow.com/61afaeeac657f2838b308c38/61afb342a9679780d7dfaf3c_Group%2039-p-800.png 800w, https://uploads-ssl.webflow.com/61afaeeac657f2838b308c38/61afb342a9679780d7dfaf3c_Group%2039-p-1080.png 1080w, https://uploads-ssl.webflow.com/61afaeeac657f2838b308c38/61afb342a9679780d7dfaf3c_Group%2039-p-1600.png 1600w, https://uploads-ssl.webflow.com/61afaeeac657f2838b308c38/61afb342a9679780d7dfaf3c_Group%2039-p-2000.png 2000w, https://uploads-ssl.webflow.com/61afaeeac657f2838b308c38/61afb342a9679780d7dfaf3c_Group%2039-p-2600.png 2600w, https://uploads-ssl.webflow.com/61afaeeac657f2838b308c38/61afb342a9679780d7dfaf3c_Group%2039-p-3200.png 3200w, https://uploads-ssl.webflow.com/61afaeeac657f2838b308c38/61afb342a9679780d7dfaf3c_Group%2039.png 6430w"
//       alt=""
//       class="image-2"
//     ></img>
//   </div>
// );

const styles = {
  layout: { height: "100vh", overflow: "auto" },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#000000",
    display: "flex",
    flexWrap: "no-wrap",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Poppins, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "28px 50px",
    height: "auto",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "25px",
    alignItems: "center",
    fontSize: "24px",
    fontWeight: "400",
  },
  menu: {
    display: "flex",
    fontSize: "32px",
    fontWeight: "275",
    marginLeft: "86px",
    width: "50%",
    justifyContent: "flex-start",
    background: "transparent",

    borderBottom: "none",
  },
  menuItem: {
    color: "#FFFFFF",
  },

  menuProfile: {
    fonFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "275",
    fontSize: "32px",
    lineHeight: "47px",

    color: "#CACACA",
  },
  footer: {
    textAlign: "center",
    paddingTop: "240px",
    paddingBottom: "39px",
  },
  menuOutline: {
    fontSize: "30px",
    color: "#fff",
    fontWeight: "800",
  },
};

export default App;

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { WalletButton } from "./walletBtn";
import { NormalButton } from "../../theme/components";

const NavBarWrapper = styled.div`
  position: fixed;
  background: linear-gradient(89.66deg, #2535d9 9.12%, #ff0e64 100.7%);
  box-shadow: 0px 11px 25px rgba(0, 0, 0, 0.1);
  opacity: 1;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  z-index: 99;
  height: 60px;
  top: -60px;
  width: 100vw;
  transition: all 0.5s;

  &.active {
    top: 0;
  }

  @media (max-width: 640px) {
    // padding-left: 2rem;
    // padding-right: 2rem;
  }
`;

const Logo = styled.a`
  position: relative;

  .logo_desktop {
    display: block;
  }

  .logo_mobile {
    display: none;
  }

  img {
    height: 40px;
  }

  @media (max-width: 640px) {
    .logo_desktop {
      display: none;
    }

    .logo_mobile {
      display: block;
    }
  }
`;

export const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [active, setActive] = useState(true);
  const scrollRef = useRef(0);

  const handleScroll = () => {
    if (window.scrollY <= scrollRef.current) setActive(true);
    else setActive(false);

    scrollRef.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const gotoRequest = () => {
    navigate("/request");
  };
  const gotoFaq = () => {
    navigate("/faq");
  };

  return (
    <NavBarWrapper className={`${active ? "active" : ""}`}>
      <div className="container m-auto h-full">
        <div className="flex justify-between items-center px-2 py-2 h-full">
          <div className="flex items-center justify-center gap-8">
            <Logo href="/">
              <img
                className="logo_desktop"
                alt="pic"
                src="./assets/imgs/logo.svg"
              />

              <img
                className="logo_mobile"
                alt="pic"
                src="/assets/imgs/logo_mobile.svg"
              />
            </Logo>
          </div>
          <div>
            <NormalButton className="mr-5 hidden md:inline" onClick={gotoFaq}>
              FAQ
            </NormalButton>
            <NormalButton
              className="mr-5 hidden md:inline"
              onClick={gotoRequest}
            >
              Add Your Own Collection
            </NormalButton>
            <div className="px-1 inline md:hidden">
              <Menu>
                <MenuHandler>
                  <NormalButton>Menu</NormalButton>
                </MenuHandler>
                <MenuList>
                  <MenuItem onClick={gotoFaq}> FAQ </MenuItem>
                  <MenuItem onClick={gotoRequest}>
                    {" "}
                    Add Your Own Collection{" "}
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
            <WalletButton />
          </div>
        </div>
      </div>
    </NavBarWrapper>
  );
};

export default NavBar;

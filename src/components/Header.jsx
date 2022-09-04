import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const HeaderSec = styled.header`
  background-color: #f2f2f2;
  padding: 2rem 5%;
  position: relative;

  .flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      font-size: 2.3rem;
      font-weight: 500;
      text-transform: capitalize;
      letter-spacing: 0.1rem;
      cursor: pointer;
    }

    .navbar {
      @media (max-width: 768px) {
        position: absolute;
        top: 100%;
        background: #fff;
        width: 90%;
        z-index: 2000;
        padding: 1rem;
        transition: all 0.35s ease-in-out;
        clip-path: circle(0.4% at 100% 0);

        &.active {
          clip-path: circle(141.2% at 100% 0);
        }
        a {
          display: block;
          margin: 1rem 1rem;
          font-weight: 550;
        }
      }
      a {
        font-size: 1.8rem;
        color: #111;
        text-transform: capitalize;
        margin-right: 3rem;
        outline: none;
      }

      button {
        padding: 1.4rem 2.8rem;
        background: #49ad09;
        text-transform: capitalize;
        color: #fff;
        font-size: 1.6rem;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        box-shadow: 0px 100px 80px rgba(49, 49, 49, 0.1),
          0px 64.8148px 46.8519px rgba(49, 49, 49, 0.0759259),
          0px 38.5185px 25.4815px rgba(49, 49, 49, 0.0607407),
          0px 20px 13px rgba(49, 49, 49, 0.05),
          0px 8.14815px 6.51852px rgba(49, 49, 49, 0.0392593),
          0px 1.85185px 3.14815px rgba(49, 49, 49, 0.0240741);
      }
    }

    .icon {
      display: none;
      @media (max-width: 768px) {
        display: block;
      }
      font-size: 2.4rem;
      margin-left: 2rem;
      color: #222 !important;
    }
  }
`;

function Header() {
  const [open, setOpen] = useState(false);

  const navOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    document.addEventListener("mousedown", () => {
      setOpen(false);
    });
  });

  return (
    <HeaderSec>
      <div className="flex">
        <label className="logo"> web.dev </label>

        <nav className={open ? "navbar active" : "navbar"}>
          <a href="/"> home </a>
          <a href="/"> about </a>
          <a href="/"> testimonials </a>
          <a href="/"> contact </a>
          <a href="/"> sign in </a>
          <button> sign up </button>
        </nav>
        {!open ? (
          <AiOutlineMenu className="icon" onClick={navOpen} />
        ) : (
          <AiOutlineClose className="icon" onClick={navOpen} />
        )}
      </div>
    </HeaderSec>
  );
}

export default Header;

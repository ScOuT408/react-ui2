import React from "react";
import styled from "styled-components";

const HeroSec = styled.div`
  height: 80vh;
  background-color: #f2f2f2;

  .main__box {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding-top: 8rem;
    position: relative;
    .left-img {
      height: 37rem;
      width: 90%;

      @media (max-width: 768px) {
        height: 25rem;
      }

      @media (max-width: 550px) {
        display: none;
      }
      img {
        height: 100%;
      }
    }
    .right-img {
      height: 37rem;

      @media (max-width: 768px) {
        height: 25rem;
      }

      @media (max-width: 550px) {
        display: none;
      }
      img {
        height: 100%;
      }
    }

    .mid__text {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;

      @media (max-width: 550px) {
        transform: translate(-50%, 40%);
      }

      @media (max-width: 450px) {
        transform: translate(-50%, 70%);
      }

      h2 {
        font-size: 5.5rem;
        line-height: 1.2;
        font-weight: 600;
        text-transform: capitalize;
        margin-bottom: 1rem;

        @media (max-width: 768px) {
          font-size: 3.5rem;
        }

        span {
          color: #49ad09;
        }
      }

      .para {
        max-width: 50rem;
        width: 100%;
        font-size: 1.8rem;
        margin-bottom: 2rem;

        @media (max-width: 768px) {
          font-size: 1.5rem;
        }
      }

      .flex_btns {
        max-width: 35rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        button {
          padding: 1.2rem 3.2rem;
          background: #49ad09;
          text-transform: capitalize;
          color: #fff;
          font-size: 1.6rem;
          letter-spacing: 0.1rem;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          box-shadow: 0px 100px 80px rgba(49, 49, 49, 0.1),
            0px 64.8148px 46.8519px rgba(49, 49, 49, 0.0759259),
            0px 38.5185px 25.4815px rgba(49, 49, 49, 0.0607407),
            0px 20px 13px rgba(49, 49, 49, 0.05),
            0px 8.14815px 6.51852px rgba(49, 49, 49, 0.0392593),
            0px 1.85185px 3.14815px rgba(49, 49, 49, 0.0240741);

          @media (max-width: 768px) {
            padding: 1rem 2rem;
            font-size: 1.3rem;
          }
        }

        a {
          font-size: 1.6rem;
          text-transform: capitalize;
          text-decoration: underline;
          color: #222;
        }
      }
    }
  }
`;

function Hero() {
  return (
    <HeroSec>
      <div className="main__box">
        <div className="left-img">
          <img src="./images/hero-1.png" alt="" />
        </div>
        <div className="mid__text">
          <h2>
            we Devlope <br /> <span> shopify </span> sites
          </h2>
          <div className="para">
            Slingback fabric heels. Thin wraparound ankle strap. <br /> Squared
            heel and toe. Pointed toes. Padded insole with <br /> geometrical
            design.
          </div>
          <div className="flex_btns">
            <button> contact us </button>
            <a href="/"> watch video &#8594; </a>
          </div>
        </div>
        <div className="right-img">
          <img src="./images/hero-2.png" alt="" />
        </div>
      </div>
    </HeroSec>
  );
}

export default Hero;

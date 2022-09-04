import React from "react";
import styled from "styled-components";
import { BsCheckCircleFill } from "react-icons/bs";

const PriceCardSec = styled.div`
  margin-top: 5rem;
  border: 0.1rem solid #ededed;
  padding: 3rem 1rem;
  filter: drop-shadow(0px 20px 40px rgba(191, 191, 191, 0.16));

  &:nth-child(1) button {
    background: transparent !important;
    color: #313131 !important;
    border: 0.1rem solid #ededed !important;
    box-shadow: none !important;
  }

  &:nth-child(2) {
    background: #ffffff;
    box-shadow: 0px 100px 80px rgba(49, 49, 49, 0.1);
    border: none;
  }

  &:nth-child(3) button {
    margin-top: 5.5rem;
    background: transparent !important;
    color: #313131 !important;
    border: 0.1rem solid #ededed !important;
    box-shadow: none !important;
  }

  h3 {
    font-size: 2.2rem;
    color: #313131;
    text-transform: capitalize;
  }

  h1 {
    font-size: 4.5rem;
    text-transform: capitalize;
  }

  .main_box {
    margin-left: 5rem;
    margin-bottom: 4rem;
    .option_box {
      display: flex;
      align-items: center;
      /* justify-content: center; */
      gap: 1rem;
      max-width: 25rem;
      width: 100%;
      margin: 0.5rem auto;

      .check {
        font-size: 1.2rem;
      }

      p {
        font-size: 1.4rem;
      }
    }
  }

  .button_div {
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4rem;

    @media (max-width: 440px) {
      margin-top: 1rem;
    }

    button {
      padding: 1.2rem 3.2rem;
      background: #49ad09;
      text-transform: capitalize;
      color: #fff;
      font-size: 1.6rem;
      border: none;
      border-radius: 0.5rem;
      letter-spacing: 0.1rem;
      cursor: pointer;
      box-shadow: 0px 100px 80px rgba(49, 49, 49, 0.1),
        0px 64.8148px 46.8519px rgba(49, 49, 49, 0.0759259),
        0px 38.5185px 25.4815px rgba(49, 49, 49, 0.0607407),
        0px 20px 13px rgba(49, 49, 49, 0.05),
        0px 8.14815px 6.51852px rgba(49, 49, 49, 0.0392593),
        0px 1.85185px 3.14815px rgba(49, 49, 49, 0.0240741);
    }
  }
`;

function PriceCard({
  heading,
  price,
  opt_1,
  opt_2,
  opt_3,
  opt_4,
  opt_5,
  button_text,
}) {
  return (
    <PriceCardSec>
      <h3> {heading} </h3>
      {price === "custom" ? <h1> custom </h1> : <h1> ${price} </h1>}
      <div className="main_box">
        {price !== "custom" ? (
          <>
            <div className="option_box">
              <BsCheckCircleFill className="check" />
              <p>{opt_1}</p>
            </div>
            <div className="option_box">
              <BsCheckCircleFill className="check" />
              <p>{opt_2}</p>
            </div>
            <div className="option_box">
              <BsCheckCircleFill className="check" />
              <p>{opt_3}</p>
            </div>
            <div className="option_box">
              <BsCheckCircleFill className="check" />
              <p>{opt_4}</p>
            </div>
            <div className="option_box">
              <BsCheckCircleFill className="check" />
              <p>{opt_5}</p>
            </div>
          </>
        ) : (
          <>
            <div className="option_box">
              <BsCheckCircleFill className="check" />
              <p>{opt_1}</p>
            </div>
            <div className="option_box">
              <BsCheckCircleFill className="check" />
              <p>{opt_2}</p>
            </div>
            <div className="option_box">
              <BsCheckCircleFill className="check" />
              <p>{opt_3}</p>
            </div>
          </>
        )}
      </div>
      <div className="button_div">
        {button_text ? (
          <button> contact us </button>
        ) : (
          <button> request demo </button>
        )}
      </div>
    </PriceCardSec>
  );
}

export default PriceCard;

import React from "react";
import styled from "styled-components";

const GrowSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 3rem;

  h1 {
    font-size: 4rem;
    text-align: center;
    line-height: 48.5px;
    color: #313131 !important;
    margin-bottom: 2rem;
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
      padding: 1.2rem 3.5rem;
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

function Grow() {
  return (
    <GrowSec>
      <h1>
        Need a little more <br /> home to grow?
      </h1>

      <div className="button_div">
        <button> contact us </button>
      </div>
    </GrowSec>
  );
}

export default Grow;

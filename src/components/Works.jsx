import React from "react";
import styled from "styled-components";
import WorkCard from "./WorkCard";

const ServiceSec = styled.div`
  margin-top: 15rem;

  @media (max-width: 550px) {
    margin-top: 5rem;
  }
  .heading {
    width: 100%;
    text-align: center;
    text-transform: capitalize;

    h4 {
      font-size: 1.7rem;
      margin-bottom: 1.3rem;
    }

    h1 {
      font-size: 3.8rem;
    }
  }

  .card__container {
    max-width: 810px;
    display: grid;
    margin: 3rem auto;
    @media (max-width: 670px) {
      margin: 0 0 !important;
    }

    .grid_box {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 0 2.5rem;
      margin-top: 4rem;

      @media (max-width: 670px) {
        grid-template-columns: 1fr;
        margin: 4rem auto !important;
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
  }
`;

function Service() {
  return (
    <ServiceSec>
      <div className="heading">
        <h4> our work </h4>
        <h1> Our Portfolio </h1>
      </div>

      <div className="card__container">
        <div className="grid_box">
          <WorkCard image="./images/work-1.png" />
          <WorkCard image="./images/work-2.png" />
          <WorkCard image="./images/work-3.png" />
          <WorkCard image="./images/work-4.png" />
        </div>
        <div className="button_div">
          <button> all projects </button>
        </div>
      </div>
    </ServiceSec>
  );
}

export default Service;

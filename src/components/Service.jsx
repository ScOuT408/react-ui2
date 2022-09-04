import React from "react";
import styled from "styled-components";
import Card from "./Card";

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
    max-width: 680px;
    display: grid;
    margin: 3rem auto;

    .grid_box {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.8rem;
      padding: 0 2.5rem;

      @media (max-width: 650px) {
        grid-template-columns: 1fr;
      }
    }

    .button_div {
      margin-top: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        padding: 1.2rem 3.2rem;
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
  }
`;

function Service() {
  return (
    <ServiceSec>
      <div className="heading">
        <h4> what we do? </h4>
        <h1> Our Specialization </h1>
      </div>

      <div className="card__container">
        <div className="grid_box">
          <Card
            image="./images/webflow.png"
            heading="Webflow Development"
            para="Really boy law county she unable her sister. Feet you off its like like six. Among six are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly."
            link="Read More"
          />
          <Card
            image="./images/shopify.png"
            heading="Shopify Development"
            para="Really boy law county she unable her sister. Feet you off its like like six. Among six are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly."
            link="Read More"
          />
          <Card
            image="./images/figma.png"
            heading="Figma Web Designing"
            para="Really boy law county she unable her sister. Feet you off its like like six. Among six are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly."
            link="Read More"
          />
          <Card
            image="./images/php.png"
            heading="Php Development"
            para="Really boy law county she unable her sister. Feet you off its like like six. Among six are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly."
            link="Read More"
          />
        </div>
        <div className="button_div">
          <button> learn more </button>
        </div>
      </div>
    </ServiceSec>
  );
}

export default Service;

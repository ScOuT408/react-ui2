import React from "react";
import styled from "styled-components";
import PriceCard from "./PriceCard";

const PricingSec = styled.div`
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

  .price__container {
    max-width: 1100px;
    display: grid;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 8rem !important;

    .price_box {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
      padding: 0 2rem;

      @media (max-width: 775px) {
        grid-template-columns: 1fr 1fr;
      }

      @media (max-width: 550px) {
        grid-template-columns: 1fr;
      }
    }
  }
`;

function Pricing() {
  return (
    <PricingSec>
      <div className="heading">
        <h4> pricing </h4>
        <h1> pricing policy </h1>
      </div>

      <div className="price__container">
        <div className="price_box">
          <PriceCard
            heading="for starter"
            price="1400"
            opt_1="Feedback Categorization"
            opt_2="Features prioritization"
            opt_3="Real-time collaboration"
            opt_4="Feedback loop notifications"
            opt_5="Real-time collaboration"
          />
          <PriceCard
            heading="for teams"
            price="2900"
            opt_1="Feedback Categorization"
            opt_2="Essential dev tools integrations"
            opt_3="Real-time collaboration"
            opt_4="Feedback loop notifications"
            opt_5="Real-time collaboration"
          />
          <PriceCard
            heading="for company"
            price="custom"
            opt_1="Feedback Categorization"
            opt_2="Essential dev tools integrations"
            opt_3="Real-time collaboration"
            button_text="contact us"
          />
        </div>
      </div>
    </PricingSec>
  );
}

export default Pricing;

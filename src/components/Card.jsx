import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 0.1rem solid #ededed;

  &:nth-child(1) {
    background: #ffffff;
    border: none;
    box-shadow: 0px 100px 80px rgba(49, 49, 49, 0.1);
  }

  &:nth-child(1) .link {
    color: #49ad09 !important;
  }

  .flex_header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;

    .img_box {
      height: 3.5rem;

      img {
        object-fit: cover;
        height: 100%;
      }
    }

    h3 {
      font-size: 1.6rem;
      text-transform: capitalize;
    }
  }

  .para {
    font-size: 1.6rem;
    line-height: 1.8;
    margin-bottom: 1rem;
  }

  .link {
    color: #313131 !important;
    font-size: 1.6rem;
    text-decoration: underline;
  }
`;

function Card({ image, heading, para, link }) {
  return (
    <CardDiv>
      <div className="flex_header">
        <div className="img_box">
          <img src={image} alt="webflow" />
        </div>
        <h3> {heading} </h3>
      </div>
      <div className="para">{para}</div>
      <a href="/" className="link">
        {link}
      </a>
    </CardDiv>
  );
}

export default Card;

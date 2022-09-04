import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  padding: 1.5rem;
  border-radius: 0.5rem;

  @media (max-width: 670px) {
    width: 100%;
  }

  &:nth-child(1) {
    transform: translateY(-4rem);

    @media (max-width: 670px) {
      transform: translateY(0);
    }
  }

  &:nth-child(3) {
    transform: translateY(-3rem);
    @media (max-width: 670px) {
      transform: translateY(0);
    }
  }

  .img_box {
    width: 35rem;

    @media (max-width: 400px) {
      width: 30rem;

      img {
        object-fit: cover;
        width: 100%;
      }
    }

    img {
      object-fit: cover;
      width: 100%;
    }
  }
`;

function WorkCard({ image }) {
  return (
    <CardDiv>
      <div className="img_box">
        <img src={image} alt="webflow" />
      </div>
    </CardDiv>
  );
}

export default WorkCard;

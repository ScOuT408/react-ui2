import React from "react";
import styled from "styled-components";

const CreditSec = styled.div`
  width: 100%;
  margin-top: 4rem;
  border-top: 0.1rem solid #ededed;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 2rem;

    h2 {
      text-transform: capitalize;
      font-size: 2rem;
      text-align: center;
      margin-bottom: 1rem;

      span {
        color: #49ad09;
      }
    }
  }
`;

function Credit() {
  return (
    <CreditSec>
      <div className="content">
        <h2>
          designed by <span> biswajeet dash </span> || copyright &#169;2022. all
          rights reserved
        </h2>
      </div>
    </CreditSec>
  );
}

export default Credit;

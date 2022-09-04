import React from "react";
import styled from "styled-components";

const CompanySec = styled.div`
  margin-top: 4rem;

  .img_container {
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
    gap: 2rem;

    @media (max-width: 768px) {
      flex-wrap: wrap !important;
      line-height: 5;
      /* justify-content: flex-start !important; */
    }

    .logo_box {
      width: 10rem;

      img {
        width: 100%;
      }
    }
  }
`;

function Company() {
  return (
    <section>
      <CompanySec>
        <div className="img_container">
          <div className="logo_box">
            <img src="./images/Logo-1.png" alt="logo-1" />
          </div>
          <div className="logo_box">
            <img src="./images/Logo-2.png" alt="logo-1" />
          </div>
          <div className="logo_box">
            <img src="./images/Logo-3.png" alt="logo-1" />
          </div>
          <div className="logo_box">
            <img src="./images/Logo-4.png" alt="logo-1" />
          </div>
          <div className="logo_box">
            <img src="./images/Logo-5.png" alt="logo-1" />
          </div>
        </div>
      </CompanySec>
    </section>
  );
}

export default Company;

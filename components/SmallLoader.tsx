import React from "react";
import styled from "styled-components";

const SmallLoader = () => {
  return (
    <StyledWrapper>
      <div className="loader" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader {
    border: 4px solid rgba(0, 0, 0, 0.5);
    border-left-color: transparent;
    border-radius: 50%;
  }

  .loader {
    border: 4px solid rgba(0, 0, 0, 0.5);
    border-left-color: transparent;
    width: 15px;
    height: 15px;
  }

  .loader {
    border: 4px solid rgba(0, 0, 0, 0.5);
    border-left-color: transparent;
    width: 15px;
    height: 15px;
    animation: spin89345 1s linear infinite;
  }

  @keyframes spin89345 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default SmallLoader;

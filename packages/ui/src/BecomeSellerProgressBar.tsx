import React from "react";
// @ts-ignore
import { ProgressBar, Step } from "react-step-progress-bar";

export const BecomeSellerProgressBar = ({ page, onPageNumberClick }: {page: string, onPageNumberClick: (arg: string) => void}) => {
  var stepPercentage = 0;
  if (page === "personalInfo") {
    stepPercentage = 16;
  } else if (page === "professionalInfo") {
    stepPercentage = 49.5;
  } else if (page === "avatar") {
    stepPercentage = 82.5;
  } else if (page === "preview") {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  return (
    
    <ProgressBar percent={stepPercentage}>
      <Step>
        {({ accomplished, index }: any) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("1")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }: any) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("2")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }:any) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("3")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }:any) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("4")}
          >
            {index + 1}
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};
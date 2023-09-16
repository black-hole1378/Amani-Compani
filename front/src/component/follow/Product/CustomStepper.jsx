import React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import styled from "@emotion/styled";
import PortContainer from "./Port";
const StyledStepper = styled("ul")({
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "space-around",
  padding: 0,
  width: "100%",
});
const StyledStepperStep = styled("li")({
  position: "relative",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "space-around",
  alignItems: "center",
  width: "100%",
});
const StyledStepperStepIndex = styled("div")(({ currentStep, done }) => ({
  width: "30px",
  height: "30px",
  lineHeight: "30px",
  borderRadius: "50%",
  background: currentStep || done ? "green !important" : "#f44336",
  color: currentStep || done ? "#fff" : "#dad6d6",
  textAlign: "center",
  marginBottom: "5px",
}));

const StyledLabelContainer = styled("div")({
  display: "flex",
  flexFlow: "column nowrap",
  alignItems: "center",
});

function CustomStepper({ product }) {
  const date1 = new Date(
    product.attributes.port_label.data.attributes.port1_date
  );
  const date2 = new Date(
    product.attributes.port_label.data.attributes.port3_date
  );
  const duration = (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24);
  const steps = ["First", "second", "third"];
  const current_day = new Date().getDate();
  function StepContent({ done, index }) {
    return done ? "✓" : index + 1;
  }

  let reminder = (current_day * 100) / duration;
  const current = Math.floor(reminder / 33);

  const progress = Math.floor(
    (((current_day * 100) / duration / 33.33) % 1) * 100
  );

  const ProgressBar = ({ current, step, progress }) => {
    let value = 0;
    if (current + 1 === step) {
      value = progress;
    } else if (current >= step) {
      value = 100;
    }

    return (
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          "&.MuiLinearProgress-root": {
            flex: "1 1 auto",
            position: "absolute",
            top: 12,
            left: "calc(-50% + 20px)",
            right: "calc(50% + 20px)",
            backgroundColor: "#bbdefb",
          },
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#2196f3",
          },
        }}
      />
    );
  };

  function renderStep(label, key) {
    const { current, progress } = this;
    const done = key <= current;
    const currentStep = key === current;
    return (
      <StyledStepperStep key={key}>
        <StyledLabelContainer>
          <StyledStepperStepIndex currentStep={currentStep} done={done}>
            <StepContent done={done} index={key} />
          </StyledStepperStepIndex>
        </StyledLabelContainer>
        {!!key && (
          <ProgressBar current={current} step={key} progress={progress} />
        )}
      </StyledStepperStep>
    );
  }

  return (
    <StyledStepper>
      {steps.map(renderStep, { current, progress })}
    </StyledStepper>
  );
}

CustomStepper.propTypes = {
  steps: PropTypes.array.isRequired,
  current: PropTypes.number.isRequired,
  progress: PropTypes.number,
};

export default CustomStepper;

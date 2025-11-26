import React from "react";

function ProgressSteps({currentStep, steps}) {
	return(
        <>
            <div className="flex justify-between items-center mx-auto">
                {steps.map((step,index) => {
                    const icon = step.icon;
                    const isCompleted = index < currentStep;
                    const isCurrent = index === currentStep;

                    return (
						<div key={step.id} className="flex items-center flex-1">
							<div className="flex flex-col items-center">
								{isCompleted ? (
									<i className="fa-solid fa-check"></i>
								) : (
									icon
								)}
							</div>
						</div>
					);
                })}
            </div>
        </>
    );
}

export default ProgressSteps;

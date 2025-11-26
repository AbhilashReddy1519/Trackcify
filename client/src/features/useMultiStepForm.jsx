import { useState } from "react";
import {
	credentialsInfoSchema,
	goalsInfoSchema,
	measurementsInfoSchema,
	personalInfoSchema,
} from "../validation/data";

const stepSchemas = [
	personalInfoSchema,
	goalsInfoSchema,
	measurementsInfoSchema,
	credentialsInfoSchema,
];

export const steps = [
			{
				id: "personal",
				name: "Personal Info",
				icon: <i className="fa-solid fa-user-pen"></i>,
			},
			{
				id: "goals",
				name: "Goals Info",
				icon: <i className="fa-solid fa-bullseye"></i>,
			},
			{
				id: "measurements",
				name: "Measurements Info",
				icon: <i className="fa-solid fa-weight-scale"></i>,
			},
			{
				id: "credentials",
				name: "Credentials Info",
				icon: <i className="fa-regular fa-user"></i>,
			},
		];

export function useMultiStepForm() {
	const [currentStep, setCurrentStep] = useState(0);
	const [formData, setFormData] = useState({
		// Personal Info
		firstName: "",
		lastName: "",
		email: "",
        age: "",
		gender: "",
        phone: "",
		// Goals Info
		fitnessGoal: [],
        mainGoal: "",
		// Measurements Info
		height: 0,
		weight: 0,
		// Credentials Info
        username: "",
		password: "",

	});
	const [isSubmitted, setIsSubmitted] = useState(false);

	const isFirstStep = currentStep === 0;
	const isLastStep = currentStep === steps.length - 1;

	const getCurrentStepSchema = () => stepSchemas[currentStep];

	const goToNextStep = () => {
		if (!isLastStep) setCurrentStep((prev) => prev + 1);
	};

	const goToPerviousStep = () => {
		if (!isFirstStep) setCurrentStep((prev) => prev - 1);
	};

	const updateFormData = (newData) => {
		setFormData((prev) => ({ ...prev, ...newData }));
	};

	const submitForm = (data) => {
		console.log("SignUp Successful", data);
		setIsSubmitted(true);
	};

	const resetForm = () => {
		setFormData({});
		setCurrentStep(0);
		setIsSubmitted(false);
	};

	return {
		currentStep,
		formData,
		isFirstStep,
		isLastStep,
		isSubmitted,
		steps,
		getCurrentStepSchema,
		goToNextStep,
		goToPerviousStep,
		updateFormData,
		submitForm,
		resetForm,
	};
}

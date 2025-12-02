// src/components/public/steps.jsx
import React from "react";
import FormField from "../ui/FormField";

const PersonalInfoStep = ({ register, errors }) => {
	return (
		<div className="space-y-4">
			<h1 className="text-center text-2xl">Personal Information</h1>

			<div className="grid grid-cols-2 gap-4">
				<FormField
					id="firstName"
					label="First Name:"
					register={register}
					errors={errors}
					placeholder="Enter your first name"
				/>
				<FormField
					id="lastName"
					label="Last Name:"
					register={register}
					errors={errors}
					placeholder="Enter your last name"
				/>
			</div>

			<FormField
				id="email"
				label="Email:"
				register={register}
				errors={errors}
				placeholder="Enter your email"
			/>

			<FormField
				id="phone"
				label="Phone Number:"
				type="number"
				register={register}
				errors={errors}
				placeholder="Enter your phone number (eg: 1234567890)"
			/>
		</div>
	);
};

const GoalsInfoStep = ({ register, errors }) => {
	return <div>GoalsInfoStep</div>;
};

const MeasurementsInfoStep = ({ register, errors }) => {
	return <div>MeasurementsInfoStep</div>;
};

const CredentialsInfoStep = ({ register, errors }) => {
	return <div>CredentialsInfoStep</div>;
};

export {
	PersonalInfoStep,
	GoalsInfoStep,
	MeasurementsInfoStep,
	CredentialsInfoStep,
};

import React from "react";
import FormField from "../ui/FormField";

const PersonalInfoStep = ({ register, errors }) => {
	return (
		<>
			<div className="space-y-4">
				<h1 className="text-center text-2xl">Personal Information</h1>
				<div className="grid grid-cols-2 gap-4">
					<FormField
						id={"firstName"}
						label={"First Name: "}
						errors={errors}
						{...register("firstName")}
						placeholder="Enter your first name"
					/>
					<FormField
						id={"lastName"}
						label={"Last Name: "}
						errors={errors}
						{...register("lastName")}
						placeholder="Enter your last name"
					/>
				</div>
				<FormField 
					id="email"
					label={"Email: "}
					errors={errors}
					{...register("email")}
					placeholder="Enter your email"
				/>

				<FormField 
					id={"phone"}
					placeholder="Enter your phone number (eg: 1234567890)"
					label={"Phone Number: "}
					errors={errors}
					{...register("phone")}
				/>
			</div>
		</>
	);
};

const GoalsInfoStep = () => {
	return <div>GoalsInfoStep</div>;
};

const MeasurementsInfoStep = () => {
	return <div>MeasurementsInfoStep</div>;
};

const CredentialsInfoStep = () => {
	return <div>CredentialsInfoStep</div>;
};

export {
	PersonalInfoStep,
	GoalsInfoStep,
	MeasurementsInfoStep,
	CredentialsInfoStep,
};

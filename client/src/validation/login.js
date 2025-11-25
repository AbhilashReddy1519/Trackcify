import { z } from "zod";

export const signUpScheme = z.object({
	name: z.object({
		firstName: z.string().min(1, "FirstName is required"),
		lastName: z.string().min(1, "LastName is required"),
	}),
	email: z.email("Email is required").string("Email must be string"),
	username: z
		.string()
		.max(16, "Username cannot be greater than 16")
		.min(4, "Username must be greater than 4 characters"),
	gender: z.enum(["male", "female", "other"], "Gender is required"),
	age: z
		.number("Age should be number")
		.min(10, "Minimum age must be greater than 10"),
	weight: z.number("Weight must be number").max(300, "Invalid input"),
	height: z.number("Height must be number").max(300, "Invalid input"),
	password: z
		.string("password must be string")
		.min(8, "Password must be min eight characters")
		.max(16, "password must ne max 16 characters")
		.regex(
			/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-+]).{8,}$/,
			"Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character (e.g., !@#$%^&*).",
		),
});

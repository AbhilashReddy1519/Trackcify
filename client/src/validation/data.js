import { z } from 'zod';

export const personalInfoSchema = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  phone: z
    .string()
    .regex(/^\d{10}$/, 'Phone number is not valid should be only 10 numbers'),
});

// you can keep your other schemas as they are for now
export const goalsInfoSchema = z.object({
  goals: z
    .array(z.string('Should be string'))
    .min(1, 'Minimum one goal is required'),
  mainGoal: z.string().min(1, 'Main goal is required'),
});

export const measurementsInfoSchema = z.object({
  height: z.coerce
    .number({ invalid_type_error: 'Height must be number' })
    .min(1, 'Height required')
    .max(300, 'Invalid input'),
  weight: z.coerce
    .number({ invalid_type_error: 'Weight must be number' })
    .min(1, 'Weight required')
    .max(300, 'Invalid input'),
  age: z.coerce
    .number({ invalid_type_error: 'Age should be number' })
    .min(10, 'Minimum age must be greater than 10'),
  gender: z.enum(['male', 'female', 'other'], {
    message: 'Gender is required',
  }),
});

export const credentialsInfoSchema = z.object({
  username: z
    .string()
    .max(16, 'Username cannot be greater than 16')
    .min(4, 'Username must be greater than 4 characters'),
  password: z
    .string('password must be string')
    .min(8, 'Password must be min eight characters')
    .max(16, 'password must ne max 16 characters')
    .regex(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-+]).{8,}$/,
      'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character (e.g., !@#$%^&*).'
    ),
});

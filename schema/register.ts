import * as zod from 'zod';

export const registerFormSchema = zod.object({
    name: zod
    .string()
    .min(3, { message: 'Please enter your first name' }),
  email: zod
    .string()
    .min(3, { message: 'Please enter your email' })
    .email({ message: 'Invalid email address' }),
  password: zod
    .string()
    .min(1, {
      message: 'Please enter your password',
    })
    .min(4, {
      message: 'Password must be at least 4 characters long',
    }),
});

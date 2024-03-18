import z from 'zod';

export const signupInput = z.object({
  username: z.string().email(),
  password: z.string().min(6),
  name: z.string(),
});

export const signinInput = z.object({
  username: z.string().email(),
  password: z.string().min(6),
});

export const createBlogInput = z.object({
  title: z.string(),
  contnent: z.string(),
});

export const updateBlogInput = z.object({
  title: z.string().optional(),
  contnent: z.string().optional(),
});
export type SignupInput = z.infer<typeof signupInput>;
export type SinginInput = z.infer<typeof signinInput>;
export type CreateBlogInput = z.infer<typeof createBlogInput>;
export type UpdateBlogInput = z.infer<typeof updateBlogInput>;

import { z } from "zod";

export const formAddSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  type: z.string().min(2, {
    message: "Type must be at least 2 characters.",
  }),
  price: z.coerce.number().gte(10000, {
    message: "Price must be at least 10000 VND.",
  }),
  sale: z.coerce.number().lte(60, {
    message: "Sale must be less than 60%.",
  }),

  image: z.any().refine((val) => val !== undefined, "File is required"),

  listImages: z.any(),
  tags: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  description: z.string(),
});

export const formEditSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  type: z.string().min(2, {
    message: "Type must be at least 2 characters.",
  }),
  price: z.coerce.number().gte(10000, {
    message: "Price must be at least 10000 VND.",
  }),
  sale: z.coerce.number().lte(60, {
    message: "Sale must be less than 60%.",
  }),

  image: z.any(),

  listImages: z.any(),
  tags: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  description: z.string(),
});

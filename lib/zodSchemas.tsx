export const CourseStatus = ['DRAFT', 'PUBLISHED', 'ARCHIVED'] as const;
export const CourseLevel = ['BEGINNER', 'INTERMEDIATE', 'ADVANCED'] as const;
export const CourseCategory = ["Development","IT & Software" ,"Design", "Marketing", "Business", "Finance", "Health", "Lifestyle", "Education" ,"Personal Development","Teaching & Academics"] as const;
import { z } from "zod";

export const courseSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Title is required and must be at least 2 characters long." })
    .max(100, { message: "Title must be less than 100 characters." }),

  description: z
    .string()
    .min(3, { message: "Description is required and must be at least 3 characters long." })
    .max(1000, { message: "Description must be less than 1000 characters." }),

  fileKey: z
    .string()
    .min(2, { message: "A valid file key is required." }),

  price: z
    .number()
    .min(1, { message: "Price must be a positive number greater than zero." }),

  duration: z
    .number()
    .int({ message: "Duration must be a whole number." })
    .min(1, { message: "Duration must be a positive integer (in minutes or hours)." }),

  level: z.enum(CourseLevel, {
    message: "Please select a valid course level (BEGINNER, INTERMEDIATE, ADVANCED).",
  }),

  category: z
    .enum(CourseCategory, {
        message: "Please select a valid course category."
    }),
  smallDescription: z
    .string()
    .min(3, { message: "Small description is required and must be at least 3 characters long." })
    .max(200, { message: "Small description must be less than 200 characters." }),

  slug: z
    .string()
    .min(3, { message: "Slug is required and must be at least 3 characters long." }),

  status: z.enum(CourseStatus, {
    message: "Please select a valid course status (DRAFT, PUBLISHED, ARCHIVED).",
  }),
});

export type courseSchemaType = z.infer<typeof courseSchema>;
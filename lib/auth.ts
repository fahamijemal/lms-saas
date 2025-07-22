import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { emailOTP } from "better-auth/plugins"
// If your Prisma file is located elsewhere, you can change the path
import { prisma } from "./db";
import { env } from "./env";
import { resend } from "./resend";
 
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    socialProviders: {
        github: { 
            clientId:env.GITHUB_CLIENT_ID, 
            clientSecret:env.GITHUB_CLIENT_SECRET, 
        }, 
    },
    plugins:[
        emailOTP({
            async sendVerificationOTP({ email, otp }) { 
                await resend.emails.send({
                    from: 'lms-saas<onboarding@resend.dev>',
                    to: [email],
                    subject: 'lms-saas verify your email',
                    html:`<p> your OTP is <strong>${otp}</strong> </p>`
                 });
            }, 
        }) 
    ]
});
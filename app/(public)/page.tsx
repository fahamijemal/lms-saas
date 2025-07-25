"use client"
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ui/themeToggle";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { title } from "process";
import { toast } from "sonner";
interface featureProps{

}
const features=[
  {
    title: "Comprehensive Courses",
    description: "Access a wide range of courses covering various subjects, from programming to design.",
    icon: "📚"
  },
  {
    title: "Interactive Learning",
    description: "Engage with interactive content, quizzes, and assignments to enhance your understanding.",
    icon: "🖥️"
  },
  {
    title: "Progress Tracking",
    description: "Monitor your learning journey with progress tracking and performance analytics.",
    icon: "📈"
  },
  {
    title: "Community Support",
    description: "Join a vibrant community of learners and instructors for discussions and support.",
    icon: "🤝"
  }
]

export default function Home() {
  const { data: session} = authClient.useSession() 
  return (
    <>
    <section className="relative py-20">
        <div className="flex flex-col items-center text-center space-y-8">
            <Badge variant="outline">The Future of Online Education </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Elevate your Learning Experience</h1>
            <p className="max-w-[700px] text-muted-foreground text-xl" >Discover a new way to learn with our modern , interactive Learning management system. Access high-quality courses anytime ,anywhere.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link 
             href="/courses" 
             className={buttonVariants({
              size:"lg",
            })}
             >
             Explore Courses
            </Link>
            <Link 
             href="/login" 
             className={buttonVariants({
              size:"lg",
              variant: "outline",
              })}>
             Sign in
            </Link>
        </div>
    </section>
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-">
      {features.map((feature, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="text-4xl mb-4">{feature.icon}</div>
            <CardTitle>{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </section>
    </>
  );
}

"use client" 
import Link from "next/dist/client/link";
import Logo from "@/public/logo.png";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/themeToggle";
import { authClient } from "@/lib/auth-client";
import { buttonVariants } from "@/components/ui/button";
import { UserDropdown } from "./UserDropdown";
const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Dashboard", href: "/dashboard" },

];
export function Navbar(){
    const { data:session,isPending}=authClient.useSession();
    return(
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-[backdrop-filter]:bg-background/60">
            <div>
                <Link href="/">
                <Image src={Logo} alt="Logo" className="size-9 "/>
                <span className="font-bold">Kuusaa Barnootaa</span>
                </Link>
                {/* Desktop Navigation */}
                <nav className="hidden md:flex md:flex-1 md:items-center md:justify-between">
                    <div className="flex items-center space-x-2">
                        {navigationItems.map((item) =>(
                            <Link 
                             key={item.name} 
                             href={item.href} 
                             className="text-sm font-medium transition-colors hover:text-primary"
                             >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center space-x-4"> 
                        <ThemeToggle />
                        {isPending ? null:session ?(
                            <UserDropdown email={session.user.email} name={session.user.name} image={session.user.image || ""} />
                        ):(
                            <>
                            <Link href="/login" className={buttonVariants({variant:"secondary"})}>
                                Log in
                            </Link>
                            <Link href="/register" className={buttonVariants()}>
                                Get Started
                            </Link>
                            </>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    )
}
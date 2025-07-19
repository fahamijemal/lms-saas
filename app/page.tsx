"use client"
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/themeToggle";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


export default function Home() {
  const router=useRouter();
  async function signOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
          toast.success("SignOut successfully!");
        }
      },
    });
  }
  const { data: session} = authClient.useSession() 
  return (
    <div className="padding-24">
      <h1 className="text-2xl font-bold text-red-500">Hello world</h1>
      <ThemeToggle/>
      {session ? (
        <div>
          <p>{session.user.name}</p>
          <Button onClick={signOut}>Logout</Button>
        </div>
      ):(
        <Button>Login</Button>
      )}
    </div>
  );
}

import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/lib/utils"; 
import Link from "next/link";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
              <Link href={"https://www.kwaty.com/about"}>Home</Link>
              <Link href={"https://www.kwaty.com/pricing"}>Pricing</Link>  
            </div>
            {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
          </div>
        </nav>

        <div className="flex-1 flex flex-col gap-20 max-w-5xl p-5">
          <main className="flex-1 flex flex-col gap-6 px-4">
            <h1>Engine</h1>
          </main>
        </div>


        <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-4 py-4">
          <ThemeSwitcher />
        </footer>
      </div>
    </main>
  );
}

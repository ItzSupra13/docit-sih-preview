import { FileText } from "lucide-react"
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex items-center gap-3 md:justify-start">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <FileText className="h-5 w-5 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold gradient-text">Doc It</h1>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden lg:block bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <img
          src="/login.png"
          alt="Dashboard Preview"
          className="absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8">
          <div className="glass-effect rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-2">Transform Document Overloading</h3>
            <p className="text-sm text-muted-foreground">
              Streamline document management with intelligent decision support and automated optimization.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

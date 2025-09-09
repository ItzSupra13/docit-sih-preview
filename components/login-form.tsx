"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Chrome, Facebook } from "lucide-react"
import { useRouter } from "next/navigation"

export function LoginForm({ className, ...props }: React.ComponentProps<"form">) {
  const router = useRouter()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string
    console.log("Logging in as:", email)
    localStorage.setItem("email", email)

    router.push("/dashboard")
  }

  return (
    <Card className="glass-effect">
      <CardHeader className="text-center">
        <Badge variant="outline" className="w-fit mx-auto mb-4">
          Smart India Hackathon 2025
        </Badge>
        <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
        <CardDescription>Sign in to access dashboard</CardDescription>
      </CardHeader>
      <CardContent>
        <form className={cn("space-y-4", className)} onSubmit={handleSubmit} {...props}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="admin@docit.com"
                required
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Button variant="link" className="px-0 font-normal text-sm h-auto">
                  Forgot password?
                </Button>
              </div>
              <Input id="password" name="password" type="password" required className="h-11" />
            </div>
            <Button type="submit" className="w-full h-11 text-base font-medium">
              Sign In
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-11 bg-transparent">
                <Chrome className="mr-2 h-4 w-4" />
                Google
              </Button>
              <Button variant="outline" className="h-11 bg-transparent">
                <Facebook className="mr-2 h-4 w-4" />
                Facebook
              </Button>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Button variant="link" className="px-0 font-normal h-auto">
              Contact Administrator
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

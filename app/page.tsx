"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Mail, Shield, Zap } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    // Simulate login - in real app would authenticate with Pi Network
    window.location.href = "/inbox"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-amber-500 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-600 to-amber-500 rounded-full flex items-center justify-center">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-amber-500 bg-clip-text text-transparent">
              Pimail
            </CardTitle>
            <CardDescription className="text-sm">Secure Web3 Email by Pi Network</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="space-y-2">
              <Shield className="w-6 h-6 mx-auto text-purple-600" />
              <p className="text-xs text-muted-foreground">Secure</p>
            </div>
            <div className="space-y-2">
              <Zap className="w-6 h-6 mx-auto text-amber-500" />
              <p className="text-xs text-muted-foreground">Fast</p>
            </div>
            <div className="space-y-2">
              <Mail className="w-6 h-6 mx-auto text-purple-600" />
              <p className="text-xs text-muted-foreground">Free</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Pi Network Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="username@pimail.network"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>

          <Button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-purple-600 to-amber-500 hover:from-purple-700 hover:to-amber-600"
          >
            Sign In to Pimail
          </Button>

          <div className="text-center space-y-2">
            <Button variant="link" className="text-sm">
              Create Pi Network Account
            </Button>
            <p className="text-xs text-muted-foreground">Powered by Pi Network Blockchain</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

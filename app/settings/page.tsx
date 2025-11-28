"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, User, Shield, HardDrive, Smartphone, LogOut, Crown, Coins, ChevronRight, Zap } from "lucide-react"
import Link from "next/link"

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true)
  const [autoSync, setAutoSync] = useState(true)
  const [biometric, setBiometric] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b p-4">
        <div className="flex items-center space-x-3">
          <Link href="/inbox">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-lg font-semibold">Settings</h1>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Profile Card */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <Avatar className="w-16 h-16">
                <AvatarFallback className="bg-gradient-to-r from-purple-600 to-amber-500 text-white text-lg">
                  JD
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">John Doe</h3>
                <p className="text-sm text-gray-600">john.doe@pimail.network</p>
                <div className="flex items-center space-x-2 mt-2">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                    <Crown className="w-3 h-3 mr-1" />
                    Pioneer
                  </Badge>
                  <Badge variant="secondary" className="bg-amber-100 text-amber-700">
                    <Coins className="w-3 h-3 mr-1" />
                    125.5π
                  </Badge>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </CardContent>
        </Card>

        {/* Storage Card */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <HardDrive className="w-5 h-5 text-purple-600" />
                <CardTitle className="text-base">Storage</CardTitle>
              </div>
              <Button variant="outline" size="sm">
                Upgrade
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>2.3 GB used of 15 GB</span>
                <span className="text-purple-600">15% used</span>
              </div>
              <Progress value={15} className="h-2" />
              <p className="text-xs text-gray-600">
                Upgrade to 50GB with Pi tokens or refer 5 friends for free upgrade
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Account Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span>Account</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Profile Information</p>
                <p className="text-sm text-gray-600">Update your personal details</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Aliases</p>
                <p className="text-sm text-gray-600">Manage your email addresses</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Import Contacts</p>
                <p className="text-sm text-gray-600">From other email services</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>Security</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Two-Factor Authentication</p>
                <p className="text-sm text-gray-600">Extra security for your account</p>
              </div>
              <Switch checked={true} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Biometric Login</p>
                <p className="text-sm text-gray-600">Use fingerprint or face ID</p>
              </div>
              <Switch checked={biometric} onCheckedChange={setBiometric} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Blockchain Verification</p>
                <p className="text-sm text-gray-600">Pi Network identity verification</p>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                Active
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* App Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center space-x-2">
              <Smartphone className="w-5 h-5" />
              <span>App Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Push Notifications</p>
                <p className="text-sm text-gray-600">Get notified of new emails</p>
              </div>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Auto-Sync</p>
                <p className="text-sm text-gray-600">Automatically sync emails</p>
              </div>
              <Switch checked={autoSync} onCheckedChange={setAutoSync} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Dark Mode</p>
                <p className="text-sm text-gray-600">Switch to dark theme</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Advanced Features */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center space-x-2">
              <Zap className="w-5 h-5 text-purple-600" />
              <span>Advanced Features</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link href="/smart-features">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Smart Features</p>
                  <p className="text-sm text-gray-600">AI-powered email assistance</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </Link>
            <Link href="/filters">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Filters</p>
                  <p className="text-sm text-gray-600">Automatic email organization</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </Link>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Templates</p>
                <p className="text-sm text-gray-600">Saved email templates</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Vacation Responder</p>
                <p className="text-sm text-gray-600">Auto-reply when away</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </CardContent>
        </Card>

        {/* Pi Network Integration */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center space-x-2">
              <Coins className="w-5 h-5 text-amber-500" />
              <span>Pi Network</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Mining Rewards</p>
                <p className="text-sm text-gray-600">Earn Pi for using Pimail</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Referral Program</p>
                <p className="text-sm text-gray-600">Invite friends and earn Pi</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Wallet Integration</p>
                <p className="text-sm text-gray-600">Connect your Pi wallet</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </CardContent>
        </Card>

        {/* Sign Out */}
        <Card>
          <CardContent className="p-4">
            <Button variant="outline" className="w-full text-red-600 border-red-200 hover:bg-red-50 bg-transparent">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </CardContent>
        </Card>

        {/* App Info */}
        <div className="text-center text-xs text-gray-500 py-4">
          <p>Pimail v1.0.0</p>
          <p>Powered by Pi Network Blockchain</p>
        </div>
      </div>
    </div>
  )
}

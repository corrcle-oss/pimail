"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Zap, Brain, Shield, Clock, Filter, Tag, Coins } from "lucide-react"
import Link from "next/link"

export default function SmartFeaturesPage() {
  const [smartReply, setSmartReply] = useState(true)
  const [smartCompose, setSmartCompose] = useState(true)
  const [priorityInbox, setPriorityInbox] = useState(true)
  const [autoFilter, setAutoFilter] = useState(true)
  const [piMining, setPiMining] = useState(true)

  const smartFeatures = [
    {
      icon: Brain,
      title: "AI Smart Reply",
      description: "Get intelligent reply suggestions powered by Pi Network AI",
      enabled: smartReply,
      toggle: setSmartReply,
      piCost: "0.1π per month",
    },
    {
      icon: Zap,
      title: "Smart Compose",
      description: "AI-powered email composition with context awareness",
      enabled: smartCompose,
      toggle: setSmartCompose,
      piCost: "0.2π per month",
    },
    {
      icon: Filter,
      title: "Priority Inbox",
      description: "Automatically identify and prioritize important emails",
      enabled: priorityInbox,
      toggle: setPriorityInbox,
      piCost: "Free",
    },
    {
      icon: Tag,
      title: "Auto-Labeling",
      description: "Automatically categorize emails with smart labels",
      enabled: autoFilter,
      toggle: setAutoFilter,
      piCost: "0.05π per month",
    },
    {
      icon: Coins,
      title: "Pi Mining Rewards",
      description: "Earn Pi tokens for reading emails and engagement",
      enabled: piMining,
      toggle: setPiMining,
      piCost: "Earn 0.01π daily",
    },
  ]

  const filters = [
    { name: "Promotions", count: 23, color: "bg-green-100 text-green-700" },
    { name: "Social", count: 12, color: "bg-blue-100 text-blue-700" },
    { name: "Updates", count: 8, color: "bg-purple-100 text-purple-700" },
    { name: "Forums", count: 5, color: "bg-orange-100 text-orange-700" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b p-4">
        <div className="flex items-center space-x-3">
          <Link href="/settings">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-lg font-semibold">Smart Features</h1>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* AI Features */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Brain className="w-5 h-5 text-purple-600" />
              <span>AI-Powered Features</span>
            </CardTitle>
            <CardDescription>Enhance your email experience with Pi Network AI</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {smartFeatures.map((feature, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-start space-x-3">
                  <feature.icon className="w-5 h-5 text-purple-600 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-medium">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                    <Badge variant="outline" className="mt-1 text-xs">
                      {feature.piCost}
                    </Badge>
                  </div>
                </div>
                <Switch checked={feature.enabled} onCheckedChange={feature.toggle} />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Email Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-blue-600" />
              <span>Smart Filters</span>
            </CardTitle>
            <CardDescription>Automatically organize your emails</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {filters.map((filter, index) => (
                <div key={index} className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{filter.name}</span>
                    <Badge className={filter.color}>{filter.count}</Badge>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-3 bg-transparent">
              <Tag className="w-4 h-4 mr-2" />
              Create Custom Filter
            </Button>
          </CardContent>
        </Card>

        {/* Snooze & Schedule */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-amber-600" />
              <span>Time Management</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h3 className="font-medium">Smart Snooze</h3>
                <p className="text-sm text-gray-600">Snooze emails until the right time</p>
              </div>
              <Button variant="outline" size="sm">
                Configure
              </Button>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h3 className="font-medium">Send Later</h3>
                <p className="text-sm text-gray-600">Schedule emails for optimal delivery</p>
              </div>
              <Button variant="outline" size="sm">
                Configure
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Security Features */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-red-600" />
              <span>Advanced Security</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h3 className="font-medium">Confidential Mode</h3>
                <p className="text-sm text-gray-600">Send self-destructing emails</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h3 className="font-medium">Blockchain Verification</h3>
                <p className="text-sm text-gray-600">Verify sender identity with Pi Network</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h3 className="font-medium">Read Receipts</h3>
                <p className="text-sm text-gray-600">Track when emails are opened</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Pi Network Integration */}
        <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-amber-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Coins className="w-5 h-5 text-purple-600" />
              <span>Pi Network Benefits</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-white rounded-lg border">
              <h3 className="font-medium text-purple-700">Email Mining</h3>
              <p className="text-sm text-gray-600">Earn 0.01π for every email you read</p>
              <Badge className="mt-1 bg-purple-100 text-purple-700">Today: +0.25π earned</Badge>
            </div>
            <div className="p-3 bg-white rounded-lg border">
              <h3 className="font-medium text-amber-700">Referral Rewards</h3>
              <p className="text-sm text-gray-600">Earn 1π for each friend you invite</p>
              <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                Invite Friends
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

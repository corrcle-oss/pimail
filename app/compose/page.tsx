"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Send,
  Paperclip,
  ImageIcon,
  Smile,
  MoreHorizontal,
  Clock,
  Eye,
  Zap,
  Calendar,
  Shield,
} from "lucide-react"
import Link from "next/link"

export default function ComposePage() {
  const [to, setTo] = useState("")
  const [cc, setCc] = useState("")
  const [bcc, setBcc] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [showCcBcc, setShowCcBcc] = useState(false)
  const [isConfidential, setIsConfidential] = useState(false)
  const [scheduleMode, setScheduleMode] = useState(false)
  const [scheduledTime, setScheduledTime] = useState("")
  const [priority, setPriority] = useState("normal")
  const [template, setTemplate] = useState("none")
  const [smartSuggestions] = useState([
    "Thank you for your email.",
    "I'll get back to you soon.",
    "Please find the attached document.",
    "Looking forward to hearing from you.",
  ])

  const templates = [
    { id: "meeting", name: "Meeting Request", content: "Hi,\n\nI'd like to schedule a meeting to discuss..." },
    { id: "followup", name: "Follow Up", content: "Hi,\n\nI wanted to follow up on our previous conversation..." },
    {
      id: "introduction",
      name: "Introduction",
      content: "Hi,\n\nI hope this email finds you well. I'm reaching out to introduce...",
    },
  ]

  const handleSend = () => {
    if (scheduleMode && scheduledTime) {
      alert(`Email scheduled for ${scheduledTime}`)
    } else {
      alert("Email sent successfully!")
    }
    window.location.href = "/inbox"
  }

  const insertSuggestion = (suggestion: string) => {
    setMessage((prev) => prev + (prev ? "\n\n" : "") + suggestion)
  }

  const loadTemplate = (templateId: string) => {
    const selectedTemplate = templates.find((t) => t.id === templateId)
    if (selectedTemplate) {
      setMessage(selectedTemplate.content)
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-white border-b p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/inbox">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="text-lg font-semibold">Compose</h1>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={() => setScheduleMode(!scheduleMode)}>
              <Clock className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsConfidential(!isConfidential)}>
              <Eye className={`w-5 h-5 ${isConfidential ? "text-red-500" : ""}`} />
            </Button>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Compose Form */}
      <div className="flex-1 p-4 space-y-4">
        {/* Template Selector */}
        <Card>
          <CardContent className="p-3">
            <div className="flex items-center space-x-2">
              <Label className="text-sm">Template:</Label>
              <Select
                value={template}
                onValueChange={(value) => {
                  setTemplate(value)
                  loadTemplate(value)
                }}
              >
                <SelectTrigger className="w-40 h-8">
                  <SelectValue placeholder="None" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  {templates.map((t) => (
                    <SelectItem key={t.id} value={t.id}>
                      {t.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Priority & Schedule Options */}
        <div className="flex space-x-2">
          <Card className="flex-1">
            <CardContent className="p-3">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <Label className="text-sm">Priority:</Label>
                <Select value={priority} onValueChange={setPriority}>
                  <SelectTrigger className="w-24 h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {scheduleMode && (
            <Card className="flex-1">
              <CardContent className="p-3">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <Input
                    type="datetime-local"
                    value={scheduledTime}
                    onChange={(e) => setScheduledTime(e.target.value)}
                    className="h-8 text-xs"
                  />
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Email Fields */}
        <div className="space-y-2">
          <Label htmlFor="to" className="text-sm font-medium">
            To
          </Label>
          <div className="flex space-x-2">
            <Input
              id="to"
              type="email"
              placeholder="recipient@pimail.network"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="border-0 border-b border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-purple-600"
            />
            <Button variant="ghost" size="sm" onClick={() => setShowCcBcc(!showCcBcc)}>
              Cc/Bcc
            </Button>
          </div>
        </div>

        {showCcBcc && (
          <>
            <div className="space-y-2">
              <Label htmlFor="cc" className="text-sm font-medium">
                Cc
              </Label>
              <Input
                id="cc"
                type="email"
                placeholder="cc@pimail.network"
                value={cc}
                onChange={(e) => setCc(e.target.value)}
                className="border-0 border-b border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-purple-600"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bcc" className="text-sm font-medium">
                Bcc
              </Label>
              <Input
                id="bcc"
                type="email"
                placeholder="bcc@pimail.network"
                value={bcc}
                onChange={(e) => setBcc(e.target.value)}
                className="border-0 border-b border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-purple-600"
              />
            </div>
          </>
        )}

        <div className="space-y-2">
          <Label htmlFor="subject" className="text-sm font-medium">
            Subject
          </Label>
          <Input
            id="subject"
            placeholder="Email subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="border-0 border-b border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-purple-600"
          />
        </div>

        <div className="space-y-2 flex-1">
          <Label htmlFor="message" className="text-sm font-medium">
            Message
          </Label>
          <Textarea
            id="message"
            placeholder="Write your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[200px] border-0 resize-none focus-visible:ring-0 px-0"
          />
        </div>

        {/* Smart Suggestions */}
        <Card>
          <CardContent className="p-3">
            <Label className="text-sm font-medium mb-2 block">Smart Suggestions:</Label>
            <div className="flex flex-wrap gap-2">
              {smartSuggestions.map((suggestion, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="cursor-pointer hover:bg-purple-50"
                  onClick={() => insertSuggestion(suggestion)}
                >
                  {suggestion}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Confidential Mode */}
        {isConfidential && (
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-red-600" />
                  <span className="text-sm font-medium text-red-700">Confidential Mode</span>
                </div>
                <Switch checked={isConfidential} onCheckedChange={setIsConfidential} />
              </div>
              <p className="text-xs text-red-600 mt-2">
                This email will require additional verification to open and will expire after 7 days.
              </p>
            </CardContent>
          </Card>
        )}

        {/* Formatting Tools */}
        <div className="flex items-center space-x-4 py-2 border-t">
          <Button variant="ghost" size="sm">
            <ImageIcon className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm">
            <Paperclip className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm">
            <Smile className="w-5 h-5" />
          </Button>
        </div>

        {/* Pi Network Security Notice */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
          <p className="text-xs text-purple-700">
            🔒 This email will be secured with Pi Network blockchain encryption
            {isConfidential && " and confidential mode protection"}
          </p>
        </div>
      </div>

      {/* Send Button */}
      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <Button
            onClick={handleSend}
            className="flex-1 bg-gradient-to-r from-purple-600 to-amber-500 hover:from-purple-700 hover:to-amber-600"
            disabled={!to || !subject}
          >
            <Send className="w-4 h-4 mr-2" />
            {scheduleMode ? "Schedule Send" : "Send Email"}
          </Button>
          <Button variant="outline" className="px-4 bg-transparent">
            Save Draft
          </Button>
        </div>
      </div>
    </div>
  )
}

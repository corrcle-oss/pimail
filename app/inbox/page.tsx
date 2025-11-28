"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Mail,
  Plus,
  Menu,
  Settings,
  Archive,
  Trash2,
  Star,
  Wifi,
  Bell,
  BellOff,
  Eye,
  MoreHorizontal,
  Clock,
  Tag,
} from "lucide-react"
import Link from "next/link"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const emails = [
  {
    id: 1,
    sender: "Pi Core Team",
    subject: "Welcome to Pimail - Your Web3 Email is Ready!",
    preview: "Thank you for joining Pimail. Your decentralized email account is now active...",
    time: "2m ago",
    unread: true,
    starred: false,
    important: true,
    labels: ["Pi Network", "Welcome"],
    hasAttachment: false,
    isConfidential: false,
    snoozed: false,
    category: "primary",
  },
  {
    id: 2,
    sender: "mining@pinetwork.com",
    subject: "Daily Mining Rewards Summary",
    preview: "Your Pi mining session has been completed. Total Pi earned today: 0.25π...",
    time: "1h ago",
    unread: true,
    starred: true,
    important: true,
    labels: ["Mining", "Rewards"],
    hasAttachment: true,
    isConfidential: false,
    snoozed: false,
    category: "primary",
  },
  {
    id: 3,
    sender: "security@pimail.network",
    subject: "Account Security Update",
    preview: "Your Pimail account security has been enhanced with blockchain verification...",
    time: "3h ago",
    unread: false,
    starred: false,
    important: false,
    labels: ["Security"],
    hasAttachment: false,
    isConfidential: true,
    snoozed: false,
    category: "primary",
  },
  {
    id: 4,
    sender: "promotions@cryptoexchange.com",
    subject: "🚀 Trade Pi Tokens - Special Offer",
    preview: "Start trading Pi tokens with zero fees for the first month...",
    time: "2h ago",
    unread: false,
    starred: false,
    important: false,
    labels: ["Promotions"],
    hasAttachment: false,
    isConfidential: false,
    snoozed: false,
    category: "promotions",
  },
  {
    id: 5,
    sender: "noreply@socialnetwork.com",
    subject: "You have 3 new connections",
    preview: "John, Sarah, and Mike want to connect with you...",
    time: "4h ago",
    unread: false,
    starred: false,
    important: false,
    labels: ["Social"],
    hasAttachment: false,
    isConfidential: false,
    snoozed: false,
    category: "social",
  },
  {
    id: 6,
    sender: "support@pimail.network",
    subject: "Storage Upgrade Available",
    preview: "Increase your Pimail storage to 50GB with Pi tokens. Special offer for early adopters...",
    time: "1d ago",
    unread: false,
    starred: true,
    important: false,
    labels: ["Storage", "Upgrade"],
    hasAttachment: false,
    isConfidential: false,
    snoozed: true,
    category: "primary",
  },
]

export default function InboxPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedEmails, setSelectedEmails] = useState<number[]>([])
  const [activeTab, setActiveTab] = useState("primary")

  const toggleEmailSelection = (emailId: number) => {
    setSelectedEmails((prev) => (prev.includes(emailId) ? prev.filter((id) => id !== emailId) : [...prev, emailId]))
  }

  const filteredEmails = emails.filter((email) => {
    if (activeTab === "all") return true
    return email.category === activeTab
  })

  const handleBulkAction = (action: string) => {
    console.log(`Performing ${action} on emails:`, selectedEmails)
    setSelectedEmails([])
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              <Menu className="w-5 h-5" />
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-amber-500 rounded-full flex items-center justify-center">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-lg bg-gradient-to-r from-purple-600 to-amber-500 bg-clip-text text-transparent">
                Pimail
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 text-xs text-green-600">
              <Wifi className="w-3 h-3" />
              <span>Pi Network</span>
            </div>
            <Link href="/settings">
              <Button variant="ghost" size="sm">
                <Settings className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Tabs for Email Categories */}
        <div className="bg-white border-b">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="px-4">
            <TabsList className="grid w-full grid-cols-4 mb-4">
              <TabsTrigger value="primary" className="text-xs">
                Primary
              </TabsTrigger>
              <TabsTrigger value="social" className="text-xs">
                Social
              </TabsTrigger>
              <TabsTrigger value="promotions" className="text-xs">
                Promotions
              </TabsTrigger>
              <TabsTrigger value="all" className="text-xs">
                All
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Bulk Actions Bar */}
        {selectedEmails.length > 0 && (
          <div className="bg-blue-50 border-b p-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{selectedEmails.length} selected</span>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" onClick={() => handleBulkAction("archive")}>
                  <Archive className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleBulkAction("delete")}>
                  <Trash2 className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleBulkAction("star")}>
                  <Star className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" onClick={() => setSelectedEmails([])}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Email List */}
        <ScrollArea className="flex-1">
          <div className="divide-y">
            {filteredEmails.map((email) => (
              <div
                key={email.id}
                className={`p-4 hover:bg-gray-100 transition-colors ${email.unread ? "bg-blue-50" : "bg-white"}`}
              >
                <div className="flex items-start space-x-3">
                  {/* Selection Checkbox */}
                  <input
                    type="checkbox"
                    checked={selectedEmails.includes(email.id)}
                    onChange={() => toggleEmailSelection(email.id)}
                    className="mt-2 rounded border-gray-300"
                  />

                  <Avatar className="w-10 h-10 flex-shrink-0">
                    <AvatarFallback className="bg-gradient-to-r from-purple-600 to-amber-500 text-white text-sm">
                      {email.sender.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <Link href={`/email/${email.id}`} className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center space-x-2">
                        <p className={`text-sm truncate ${email.unread ? "font-semibold" : "font-medium"}`}>
                          {email.sender}
                        </p>
                        {email.important && <Bell className="w-3 h-3 text-amber-500 fill-current" />}
                        {email.isConfidential && <Eye className="w-3 h-3 text-red-500" />}
                      </div>
                      <div className="flex items-center space-x-2 flex-shrink-0">
                        {email.snoozed && <Clock className="w-4 h-4 text-blue-500" />}
                        {email.starred && <Star className="w-4 h-4 text-amber-500 fill-current" />}
                        <span className="text-xs text-gray-500">{email.time}</span>
                      </div>
                    </div>

                    <p className={`text-sm mb-1 ${email.unread ? "font-medium" : "text-gray-900"}`}>{email.subject}</p>

                    <p className="text-xs text-gray-600 line-clamp-2 mb-2">{email.preview}</p>

                    {/* Labels */}
                    <div className="flex items-center space-x-2">
                      {email.labels.map((label) => (
                        <Badge key={label} variant="secondary" className="text-xs">
                          {label}
                        </Badge>
                      ))}
                      {email.unread && (
                        <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                          New
                        </Badge>
                      )}
                    </div>
                  </Link>

                  {/* Quick Actions */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Archive className="w-4 h-4 mr-2" />
                        Archive
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Clock className="w-4 h-4 mr-2" />
                        Snooze
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Tag className="w-4 h-4 mr-2" />
                        Add Label
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <BellOff className="w-4 h-4 mr-2" />
                        Mute
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Floating Action Button */}
        <Link href="/compose">
          <Button
            size="lg"
            className="fixed bottom-6 right-6 rounded-full w-14 h-14 bg-gradient-to-r from-purple-600 to-amber-500 hover:from-purple-700 hover:to-amber-600 shadow-lg"
          >
            <Plus className="w-6 h-6" />
          </Button>
        </Link>

        {/* Bottom Navigation */}
        <div className="bg-white border-t">
          <div className="flex items-center justify-around py-2">
            <Button variant="ghost" size="sm" className="flex-col space-y-1 h-auto py-2">
              <Mail className="w-5 h-5 text-purple-600" />
              <span className="text-xs text-purple-600">Inbox</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex-col space-y-1 h-auto py-2">
              <Star className="w-5 h-5" />
              <span className="text-xs">Starred</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex-col space-y-1 h-auto py-2">
              <Archive className="w-5 h-5" />
              <span className="text-xs">Archive</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex-col space-y-1 h-auto py-2">
              <Trash2 className="w-5 h-5" />
              <span className="text-xs">Trash</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

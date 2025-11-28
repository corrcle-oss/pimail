"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ArrowLeft, Reply, ReplyAll, Forward, Star, Archive, Trash2, MoreVertical, Shield } from "lucide-react"
import Link from "next/link"

export default function EmailDetailPage() {
  const email = {
    id: 1,
    sender: "Pi Core Team",
    senderEmail: "team@pinetwork.com",
    subject: "Welcome to Pimail - Your Web3 Email is Ready!",
    time: "2 minutes ago",
    content: `Dear Pi Pioneer,

Welcome to Pimail - the world's first truly decentralized email service powered by the Pi Network blockchain!

Your Pimail account is now active and ready to use. Here's what makes Pimail special:

🔒 **Blockchain Security**: Every email is encrypted and secured using Pi Network's blockchain technology
📧 **Decentralized Storage**: Your emails are stored across the Pi Network, ensuring maximum uptime and security  
💎 **Pi Token Integration**: Earn Pi tokens for using Pimail and referring friends
🌍 **Global Access**: Access your emails from anywhere in the world with full synchronization
📱 **Mobile First**: Optimized for mobile devices with offline capabilities

**Getting Started:**
1. Complete your profile setup
2. Import contacts from other email services
3. Start sending secure, blockchain-verified emails
4. Invite friends to join the Pi Network email revolution

**Storage & Features:**
- 15GB free storage (expandable with Pi tokens)
- Advanced spam protection powered by AI
- End-to-end encryption for all messages
- Integration with Pi Network ecosystem apps

Thank you for being part of the Pi Network community and helping us build the future of decentralized communication.

Best regards,
The Pi Core Team

---
This email was sent via Pimail - Secure Web3 Email
Powered by Pi Network Blockchain Technology`,
    starred: false,
    verified: true,
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
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              <Star className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <Archive className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <Trash2 className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <MoreVertical className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Email Header */}
      <div className="p-4 border-b">
        <div className="flex items-start space-x-3">
          <Avatar className="w-12 h-12">
            <AvatarFallback className="bg-gradient-to-r from-purple-600 to-amber-500 text-white">PC</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h2 className="font-semibold text-lg">{email.sender}</h2>
              {email.verified && (
                <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                  <Shield className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              )}
            </div>
            <p className="text-sm text-gray-600 mb-1">{email.senderEmail}</p>
            <p className="text-xs text-gray-500">{email.time}</p>
          </div>
        </div>
        <h1 className="text-xl font-semibold mt-4 mb-2">{email.subject}</h1>

        {/* Blockchain Security Badge */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mt-3">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-purple-600" />
            <span className="text-xs text-purple-700 font-medium">Blockchain Verified & Encrypted</span>
          </div>
        </div>
      </div>

      {/* Email Content */}
      <ScrollArea className="flex-1 p-4">
        <div className="prose prose-sm max-w-none">
          <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">{email.content}</div>
        </div>
      </ScrollArea>

      {/* Action Buttons */}
      <div className="p-4 border-t bg-gray-50">
        <div className="flex space-x-2">
          <Button variant="outline" className="flex-1 bg-transparent">
            <Reply className="w-4 h-4 mr-2" />
            Reply
          </Button>
          <Button variant="outline" className="flex-1 bg-transparent">
            <ReplyAll className="w-4 h-4 mr-2" />
            Reply All
          </Button>
          <Button variant="outline" className="flex-1 bg-transparent">
            <Forward className="w-4 h-4 mr-2" />
            Forward
          </Button>
        </div>
      </div>
    </div>
  )
}

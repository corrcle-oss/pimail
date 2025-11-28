"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Plus, Trash2, Edit, Zap } from "lucide-react"
import Link from "next/link"

export default function FiltersPage() {
  const [filters, setFilters] = useState([
    {
      id: 1,
      name: "Pi Network Updates",
      condition: "From contains 'pinetwork.com'",
      action: "Apply label 'Pi Network' and mark as important",
      enabled: true,
      emails: 45,
    },
    {
      id: 2,
      name: "Promotions Filter",
      condition: "Subject contains 'offer', 'sale', or 'discount'",
      action: "Move to Promotions tab",
      enabled: true,
      emails: 123,
    },
    {
      id: 3,
      name: "Social Media",
      condition: "From contains social media domains",
      action: "Move to Social tab and mute notifications",
      enabled: true,
      emails: 67,
    },
    {
      id: 4,
      name: "Spam Blocker",
      condition: "Contains suspicious keywords",
      action: "Move to Spam folder",
      enabled: true,
      emails: 234,
    },
  ])

  const [showCreateFilter, setShowCreateFilter] = useState(false)
  const [newFilter, setNewFilter] = useState({
    name: "",
    condition: "",
    action: "",
    enabled: true,
  })

  const toggleFilter = (id: number) => {
    setFilters(filters.map((filter) => (filter.id === id ? { ...filter, enabled: !filter.enabled } : filter)))
  }

  const deleteFilter = (id: number) => {
    setFilters(filters.filter((filter) => filter.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/smart-features">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <h1 className="text-lg font-semibold">Email Filters</h1>
          </div>
          <Button onClick={() => setShowCreateFilter(true)} className="bg-gradient-to-r from-purple-600 to-amber-500">
            <Plus className="w-4 h-4 mr-2" />
            Create Filter
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Filter Stats */}
        <Card>
          <CardContent className="p-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-purple-600">{filters.length}</p>
                <p className="text-sm text-gray-600">Active Filters</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">
                  {filters.reduce((sum, filter) => sum + filter.emails, 0)}
                </p>
                <p className="text-sm text-gray-600">Emails Filtered</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-amber-600">{filters.filter((f) => f.enabled).length}</p>
                <p className="text-sm text-gray-600">Enabled</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Create Filter Form */}
        {showCreateFilter && (
          <Card>
            <CardHeader>
              <CardTitle>Create New Filter</CardTitle>
              <CardDescription>Automatically organize your emails with custom rules</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="filter-name">Filter Name</Label>
                <Input
                  id="filter-name"
                  placeholder="e.g., Important Clients"
                  value={newFilter.name}
                  onChange={(e) => setNewFilter({ ...newFilter, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label>When email meets these conditions:</Label>
                <div className="flex space-x-2">
                  <Select>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Field" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="from">From</SelectItem>
                      <SelectItem value="to">To</SelectItem>
                      <SelectItem value="subject">Subject</SelectItem>
                      <SelectItem value="body">Body</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="contains">Contains</SelectItem>
                      <SelectItem value="equals">Equals</SelectItem>
                      <SelectItem value="starts">Starts with</SelectItem>
                      <SelectItem value="ends">Ends with</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input placeholder="Value" className="flex-1" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Take these actions:</Label>
                <div className="space-y-2">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select action" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="label">Apply label</SelectItem>
                      <SelectItem value="folder">Move to folder</SelectItem>
                      <SelectItem value="important">Mark as important</SelectItem>
                      <SelectItem value="star">Add star</SelectItem>
                      <SelectItem value="delete">Delete</SelectItem>
                      <SelectItem value="forward">Forward to</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button
                  onClick={() => setShowCreateFilter(false)}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-amber-500"
                >
                  Create Filter
                </Button>
                <Button variant="outline" onClick={() => setShowCreateFilter(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Existing Filters */}
        <div className="space-y-3">
          {filters.map((filter) => (
            <Card key={filter.id}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-medium">{filter.name}</h3>
                      <Badge variant="outline" className="text-xs">
                        {filter.emails} emails
                      </Badge>
                      {filter.enabled ? (
                        <Badge className="bg-green-100 text-green-700 text-xs">Active</Badge>
                      ) : (
                        <Badge variant="secondary" className="text-xs">
                          Disabled
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-1">
                      <strong>When:</strong> {filter.condition}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Then:</strong> {filter.action}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch checked={filter.enabled} onCheckedChange={() => toggleFilter(filter.id)} />
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => deleteFilter(filter.id)}>
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Smart Filter Suggestions */}
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-purple-600" />
              <span>Smart Suggestions</span>
            </CardTitle>
            <CardDescription>AI-powered filter recommendations based on your email patterns</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-white rounded-lg border">
              <h4 className="font-medium">Newsletter Auto-Archive</h4>
              <p className="text-sm text-gray-600">Automatically archive newsletters after 30 days</p>
              <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                Create Filter
              </Button>
            </div>
            <div className="p-3 bg-white rounded-lg border">
              <h4 className="font-medium">VIP Contacts</h4>
              <p className="text-sm text-gray-600">Mark emails from your most frequent contacts as important</p>
              <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                Create Filter
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

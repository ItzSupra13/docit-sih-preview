"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Toaster } from "@/components/ui/sonner"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  FileText,
  Upload,
  User,
  BarChart3,
  Settings,
  Bell,
  Search,
  Filter,
  Download,
  Eye,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react"
import { toast } from "sonner"

interface FileItem {
  id: number
  name: string
  size: string
  type: string
  role: string
  status: "pending" | "approved" | "rejected"
  priority: "high" | "medium" | "low"
  file: File
  uploadDate: string
}

const ROLES = ["Admin", "Editor", "Viewer", "Maintenance"]
const STATUSES = ["pending", "approved", "rejected"]
const PRIORITIES = ["high", "medium", "low"]

export default function DashboardPage() {
  const [email, setEmail] = useState("")
  const [files, setFiles] = useState<FileItem[]>([])
  const [fileInput, setFileInput] = useState<File | null>(null)
  const [selectedRole, setSelectedRole] = useState<string>("")
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const storedEmail = localStorage.getItem("email") || "admin@docit.com"
    setEmail(storedEmail)

    const sampleFiles: FileItem[] = [
      {
        id: 1,
        name: "Maintenance_Report_Q4.pdf",
        size: "2.4 MB",
        type: "PDF Document",
        role: "Editor",
        status: "approved",
        priority: "high",
        file: new File([], "sample.pdf"),
        uploadDate: "2025-01-15",
      },
      {
        id: 2,
        name: "Vehicle_Utilization_Analytics.xlsx",
        size: "1.8 MB",
        type: "Spreadsheet",
        role: "Admin",
        status: "pending",
        priority: "medium",
        file: new File([], "sample.xlsx"),
        uploadDate: "2025-01-14",
      },
    ]
    setFiles(sampleFiles)
  }, [])

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setFileInput(e.target.files[0])
    }
  }

  function handleUpload(e: React.FormEvent) {
    e.preventDefault()
    if (!fileInput || !selectedRole) return

    const newFile: FileItem = {
      id: files.length + 1,
      name: fileInput.name,
      size: `${(fileInput.size / 1024).toFixed(1)} KB`,
      type: fileInput.type || "Document",
      role: selectedRole,
      status: "pending",
      priority: "medium",
      file: fileInput,
      uploadDate: new Date().toISOString().split("T")[0],
    }

    setFiles([newFile, ...files])
    setFileInput(null)
    setSelectedRole("")

    toast.success(`Document uploaded successfully: ${newFile.name}`)
  }

  const filteredFiles = files.filter((file) => {
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === "all" || file.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "rejected":
        return <AlertTriangle className="h-4 w-4 text-red-600" />
      default:
        return <Clock className="h-4 w-4 text-yellow-600" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "destructive"
      case "medium":
        return "secondary"
      default:
        return "outline"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Toaster />

      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary-foreground" />
                </div>
                <h1 className="text-xl font-bold gradient-text">Doc It</h1>
              </div>
              <Badge variant="outline">Dashboard</Badge>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2 text-sm">
                <User className="h-4 w-4" />
                <span className="font-medium">{email}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{files.length}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{files.filter((f) => f.status === "pending").length}</div>
              <p className="text-xs text-muted-foreground">Requires attention</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Analysis Efficiency</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94.2%</div>
              <p className="text-xs text-muted-foreground">+2.1% optimization</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">System Health</CardTitle>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">Optimal</div>
              <p className="text-xs text-muted-foreground">All systems operational</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-40">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2">
            {ROLES.map((role) => (
              <Badge key={role} variant="secondary" className="cursor-pointer hover:bg-primary/10">
                {role}
              </Badge>
            ))}
          </div>
        </div>

        <Card className="glass-effect">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5" />
              Document Upload
            </CardTitle>
            <CardDescription>Upload documents for processing and analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleUpload} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="file">Select Document</Label>
                  <Input
                    id="file"
                    type="file"
                    onChange={handleFileChange}
                    className="cursor-pointer"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.csv"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Department</Label>
                  <Select onValueChange={setSelectedRole} value={selectedRole}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      {ROLES.map((role) => (
                        <SelectItem key={role} value={role}>
                          {role}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button type="submit" disabled={!fileInput || !selectedRole} className="w-full sm:w-auto">
                <Upload className="h-4 w-4 mr-2" />
                Upload Document
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Document Management</CardTitle>
            <CardDescription>Track and manage all documents and their processing status</CardDescription>
          </CardHeader>
          <CardContent>
            {filteredFiles.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  {searchTerm || filterStatus !== "all"
                    ? "No documents match your filters"
                    : "No documents uploaded yet"}
                </p>
              </div>
            ) : (
              <div className="overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Document</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Size</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredFiles.map((file) => (
                      <TableRow key={file.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <div>
                              <div className="font-medium">{file.name}</div>
                              <div className="text-sm text-muted-foreground">{file.type}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{file.role}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {getStatusIcon(file.status)}
                            <span className="capitalize">{file.status}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={getPriorityColor(file.priority) as any}>{file.priority}</Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{file.size}</TableCell>
                        <TableCell className="text-muted-foreground">{file.uploadDate}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

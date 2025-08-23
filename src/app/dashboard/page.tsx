"use client";

import { useAuth } from '@/context/auth-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, Check, Clock, FileText } from 'lucide-react';
import CreateAssignmentForm from '@/components/teacher/create-assignment-form';
import AssignmentList from '@/components/student/assignment-list';

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">
          Welcome back, {user?.displayName?.split(' ')[0]}!
        </h1>
        <p className="text-muted-foreground">
          Here's a quick overview of your {user?.role === 'teacher' ? 'classroom' : 'assignments'}.
        </p>
      </div>

      {user?.role === 'teacher' ? <TeacherDashboard /> : <StudentDashboard />}
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold font-headline mb-4">
            {user?.role === 'teacher' ? 'Quick Create' : 'Your Assignments'}
        </h2>
        {user?.role === 'teacher' ? <CreateAssignmentForm /> : <AssignmentList />}
      </div>
    </div>
  );
}

function TeacherDashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Assignments</CardTitle>
          <Book className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12</div>
          <p className="text-xs text-muted-foreground">+2 since last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Submissions Received</CardTitle>
          <FileText className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">153</div>
          <p className="text-xs text-muted-foreground">+45 since last week</p>
        </CardContent>
      </Card>
    </div>
  );
}

function StudentDashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Pending Assignments</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">3</div>
          <p className="text-xs text-muted-foreground">1 due this week</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Completed Assignments</CardTitle>
          <Check className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">9</div>
          <p className="text-xs text-muted-foreground">2 completed this week</p>
        </CardContent>
      </Card>
    </div>
  );
}

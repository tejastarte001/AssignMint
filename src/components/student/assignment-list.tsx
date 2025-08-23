"use client";

import { useState } from 'react';
import type { Assignment } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns';

const mockAssignments: Assignment[] = [
  {
    id: 'as-1',
    title: 'History of Ancient Rome',
    description: 'Write a 1000-word essay on the key factors that led to the fall of the Western Roman Empire. Please cite at least 5 academic sources.',
    dueDate: new Date(new Date().setDate(new Date().getDate() + 5)),
    teacherId: 'teacher-1',
    teacherName: 'Dr. Evelyn Reed',
    createdAt: new Date(new Date().setDate(new Date().getDate() - 2)),
  },
  {
    id: 'as-2',
    title: 'Algebra II: Problem Set 4',
    description: 'Complete all even-numbered problems from chapter 4 of the textbook. Show all your work for full credit.',
    dueDate: new Date(new Date().setDate(new Date().getDate() + 3)),
    teacherId: 'teacher-1',
    teacherName: 'Dr. Evelyn Reed',
    createdAt: new Date(new Date().setDate(new Date().getDate() - 4)),
  },
  {
    id: 'as-3',
    title: 'Biology Lab Report: Cellular Mitosis',
    description: 'Submit your formal lab report for the cellular mitosis experiment conducted last week. Follow the standard lab report format.',
    dueDate: new Date(new Date().setDate(new Date().getDate() + 10)),
    teacherId: 'teacher-1',
    teacherName: 'Dr. Evelyn Reed',
    createdAt: new Date(new Date().setDate(new Date().getDate() - 1)),
  },
   {
    id: 'as-4',
    title: 'Literary Analysis of "The Great Gatsby"',
    description: 'Analyze the theme of the American Dream in F. Scott Fitzgerald\'s "The Great Gatsby".',
    dueDate: new Date(new Date().setDate(new Date().getDate() - 2)), // Past due
    teacherId: 'teacher-1',
    teacherName: 'Dr. Evelyn Reed',
    createdAt: new Date(new Date().setDate(new Date().getDate() - 14)),
  },
];

const mockSubmissionsStatus: Record<string, 'completed' | 'pending'> = {
    'as-3': 'completed',
    'as-4': 'completed'
};


export default function AssignmentList() {
  const [assignments] = useState<Assignment[]>(mockAssignments);
  
  const getStatus = (assignmentId: string): 'completed' | 'pending' => {
    return mockSubmissionsStatus[assignmentId] || 'pending';
  }
  
  const isPastDue = (date: Date) => new Date() > date && getStatus(date.toISOString()) === 'pending';


  if (assignments.length === 0) {
    return (
      <div className="text-center py-12 border-dashed border-2 rounded-lg">
        <h3 className="text-xl font-semibold">No Assignments Yet!</h3>
        <p className="text-muted-foreground">Great job staying on top of your work. New assignments will appear here.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {assignments.map((assignment) => {
        const status = getStatus(assignment.id);
        const pastDue = isPastDue(assignment.dueDate);
        return (
            <Card key={assignment.id}>
                <CardHeader>
                    <CardTitle className="font-headline text-lg">{assignment.title}</CardTitle>
                    <CardDescription>Assigned by {assignment.teacherName}</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>Due: {format(assignment.dueDate, 'PPP')}</span>
                    </div>
                     <Badge variant={status === 'completed' ? 'default' : pastDue ? 'destructive' : 'secondary'} className={status === 'completed' ? 'bg-green-500' : ''}>
                        {status === 'completed' ? 'Completed' : pastDue ? 'Past Due' : 'Pending'}
                     </Badge>
                </CardContent>
                <CardFooter>
                    <Button asChild variant="link" className="p-0 h-auto">
                        <Link href={`/dashboard/assignments/${assignment.id}`}>
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        );
      })}
    </div>
  );
}

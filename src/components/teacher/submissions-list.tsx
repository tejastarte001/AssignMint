"use client";

import { useState } from 'react';
import type { Submission } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Link as LinkIcon, Download } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

const mockSubmissions: Submission[] = [
  {
    id: 'sub-1',
    assignmentId: 'as-1',
    assignmentTitle: 'History of Ancient Rome',
    studentId: 'student-1',
    studentName: 'Charlie Brown',
    submittedAt: new Date(new Date().setDate(new Date().getDate() - 1)),
    content: 'Here is my essay on the fall of the Roman Empire.',
    fileURL: '#',
    fileName: 'roman-empire-essay.pdf',
    isShared: true,
    status: 'completed',
  },
  {
    id: 'sub-2',
    assignmentId: 'as-2',
    assignmentTitle: 'Algebra II: Problem Set 4',
    studentId: 'student-2',
    studentName: 'Lucy van Pelt',
    submittedAt: new Date(new Date().setDate(new Date().getDate() - 2)),
    content: 'Please find my solutions attached.',
    fileURL: '#',
    fileName: 'problem-set-4.pdf',
    isShared: true,
    status: 'completed',
  },
    {
    id: 'sub-3',
    assignmentId: 'as-3',
    assignmentTitle: 'Biology Lab Report',
    studentId: 'student-3',
    studentName: 'Linus van Pelt',
    submittedAt: new Date(new Date().setDate(new Date().getDate() - 3)),
    content: 'My report on cellular mitosis.',
    fileURL: '#',
    fileName: 'mitosis-report.pdf',
    isShared: true,
    status: 'completed',
  },
];

export default function SubmissionsList() {
  const [submissions] = useState<Submission[]>(mockSubmissions);

  if (submissions.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold">No Submissions Yet</h3>
        <p className="text-muted-foreground">When students share their work, it will appear here.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {submissions.map((submission) => (
        <Card key={submission.id} className="flex flex-col">
          <CardHeader>
            <div className="flex items-start justify-between">
                <div>
                    <CardTitle className="font-headline text-lg">{submission.assignmentTitle}</CardTitle>
                    <CardDescription>Submitted by {submission.studentName}</CardDescription>
                </div>
                <Avatar className="h-10 w-10 border">
                    <AvatarImage src={`https://placehold.co/40x40.png`} alt={submission.studentName} data-ai-hint="avatar person" />
                    <AvatarFallback>{submission.studentName.charAt(0)}</AvatarFallback>
                </Avatar>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="space-y-4">
                <p className="text-sm text-muted-foreground italic">"{submission.content}"</p>
                {submission.fileURL && (
                    <div className="flex items-center gap-2 rounded-md border p-3">
                        <FileText className="h-6 w-6 text-primary" />
                        <div className="flex-grow">
                            <p className="text-sm font-medium">{submission.fileName}</p>
                            <p className="text-xs text-muted-foreground">PDF Document</p>
                        </div>
                        <Button variant="ghost" size="icon" asChild>
                            <a href={submission.fileURL} download>
                                <Download className="h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
             <Badge variant="secondary">Reviewed</Badge>
            <span>
              {formatDistanceToNow(submission.submittedAt, { addSuffix: true })}
            </span>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

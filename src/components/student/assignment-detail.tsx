"use client";

import type { Assignment } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { UploadCloud, Send } from 'lucide-react';
import { format } from 'date-fns';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AssignmentDetailProps {
  assignment: Assignment;
}

export default function AssignmentDetail({ assignment }: AssignmentDetailProps) {
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Assignment Submitted!",
            description: "Your work has been successfully submitted.",
        })
    }
  return (
    <div className="space-y-6">
        <Button variant="ghost" asChild className='-ml-4'>
            <Link href="/dashboard/assignments">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Assignments
            </Link>
        </Button>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{assignment.title}</CardTitle>
              <CardDescription>
                Assigned by {assignment.teacherName} &bull; Due on {format(assignment.dueDate, 'PPP')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-base whitespace-pre-wrap">{assignment.description}</p>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Submit Your Work</CardTitle>
              <CardDescription>Upload your file and add any comments.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="comments">Comments (Optional)</Label>
                  <Textarea id="comments" placeholder="Add any notes for your teacher..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="file-upload">Upload File</Label>
                  <div className="flex items-center justify-center w-full">
                    <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-card hover:bg-muted">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <UploadCloud className="w-8 h-8 mb-4 text-muted-foreground" />
                            <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-muted-foreground">PDF, DOCX, or image files</p>
                        </div>
                        <Input id="file-upload" type="file" className="hidden" />
                    </label>
                </div> 
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <Label htmlFor="share-switch" className="flex flex-col space-y-1">
                    <span>Share with Teacher</span>
                    <span className="font-normal leading-snug text-muted-foreground text-xs">
                      Your submission is private by default.
                    </span>
                  </Label>
                  <Switch id="share-switch" />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Send className="mr-2 h-4 w-4" />
                  Submit Assignment
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

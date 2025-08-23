import SubmissionsList from '@/components/teacher/submissions-list';

export default function SubmissionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline">Student Submissions</h1>
        <p className="text-muted-foreground">Review assignments shared by your students.</p>
      </div>
      <SubmissionsList />
    </div>
  );
}

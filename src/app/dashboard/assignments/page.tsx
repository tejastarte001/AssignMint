import AssignmentList from '@/components/student/assignment-list';

export default function AssignmentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline">Your Assignments</h1>
        <p className="text-muted-foreground">Here are all the assignments from your teachers. Click to view details and submit your work.</p>
      </div>
      <AssignmentList />
    </div>
  );
}

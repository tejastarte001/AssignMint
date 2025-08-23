import CreateAssignmentForm from '@/components/teacher/create-assignment-form';

export default function CreateAssignmentPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline">Create a New Assignment</h1>
        <p className="text-muted-foreground">Fill out the details below to post a new assignment for your students.</p>
      </div>
      <CreateAssignmentForm />
    </div>
  );
}

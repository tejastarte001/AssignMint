import AssignmentDetail from '@/components/student/assignment-detail';

// This is a server component, but in a real app it would fetch data.
const mockAssignments = [
  {
    id: 'as-1',
    title: 'History of Ancient Rome',
    description: 'Write a 1000-word essay on the key factors that led to the fall of the Western Roman Empire. Please cite at least 5 academic sources. Your essay should be well-structured with an introduction, body paragraphs with supporting evidence, and a conclusion. Pay attention to grammar and spelling.',
    dueDate: new Date(new Date().setDate(new Date().getDate() + 5)),
    teacherId: 'teacher-1',
    teacherName: 'Dr. Evelyn Reed',
    createdAt: new Date(new Date().setDate(new Date().getDate() - 2)),
  },
  {
    id: 'as-2',
    title: 'Algebra II: Problem Set 4',
    description: 'Complete all even-numbered problems from chapter 4 of the textbook. Show all your work for full credit. Scan your completed work and upload it as a single PDF file.',
    dueDate: new Date(new Date().setDate(new Date().getDate() + 3)),
    teacherId: 'teacher-1',
    teacherName: 'Dr. Evelyn Reed',
    createdAt: new Date(new Date().setDate(new Date().getDate() - 4)),
  },
  {
    id: 'as-3',
    title: 'Biology Lab Report: Cellular Mitosis',
    description: 'Submit your formal lab report for the cellular mitosis experiment conducted last week. Follow the standard lab report format. Include a hypothesis, materials, procedure, results, and conclusion.',
    dueDate: new Date(new Date().setDate(new Date().getDate() + 10)),
    teacherId: 'teacher-1',
    teacherName: 'Dr. Evelyn Reed',
    createdAt: new Date(new Date().setDate(new Date().getDate() - 1)),
  },
   {
    id: 'as-4',
    title: 'Literary Analysis of "The Great Gatsby"',
    description: 'Analyze the theme of the American Dream in F. Scott Fitzgerald\'s "The Great Gatsby". Your analysis should be 2-3 pages, double-spaced.',
    dueDate: new Date(new Date().setDate(new Date().getDate() - 2)), // Past due
    teacherId: 'teacher-1',
    teacherName: 'Dr. Evelyn Reed',
    createdAt: new Date(new Date().setDate(new Date().getDate() - 14)),
  },
];


export default function AssignmentDetailPage({ params }: { params: { id: string } }) {
  const assignment = mockAssignments.find(a => a.id === params.id);

  if (!assignment) {
    return <div>Assignment not found.</div>;
  }

  return <AssignmentDetail assignment={assignment} />;
}

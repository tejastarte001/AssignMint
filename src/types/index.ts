export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  role: 'teacher' | 'student';
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  teacherId: string;
  teacherName: string;
  createdAt: Date;
}

export interface Submission {
  id: string;
  assignmentId: string;
  assignmentTitle: string;
  studentId: string;
  studentName: string;
  submittedAt: Date;
  content: string;
  fileURL?: string;
  fileName?: string;
  isShared: boolean;
  status: 'completed' | 'pending';
}

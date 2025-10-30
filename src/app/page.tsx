import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Users, BookOpen, Share2 } from 'lucide-react';
import { Logo } from '@/components/icons/logo';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold font-headline text-foreground">AssignMint</h1>
        </Link>
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="bg-accent hover:bg-accent/90">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-headline text-foreground">
              Streamline Your Classroom Workflow
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              AssignMint is the modern solution for teachers and students to manage assignments seamlessly. Focus on learning, not logistics.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/signup">Get Started for Free</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="absolute inset-0 bg-secondary/50 transform -skew-y-3 z-0"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold font-headline text-foreground">Effortless for Teachers, Empowering for Students</h3>
                <p className="mt-4 text-muted-foreground">
                  From creation to submission, AssignMint simplifies every step of the assignment process. Our platform provides powerful tools for assignment creation, distribution, and grading.
                </p>
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  <Card className="text-left">
                    <CardHeader>
                      <CheckCircle className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Easy Assignment Creation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      Create assignments with rich text formatting, file attachments, and customizable deadlines.
                    </CardContent>
                  </Card>
                  <Card className="text-left">
                    <CardHeader>
                      <Share2 className="h-8 w-8 text-primary mb-2" />
                      <CardTitle>Instant Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                      Share assignments with your entire class or specific students with just one click.
                    </CardContent>
                  </Card>
                </div>
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold font-headline">Create & Distribute Instantly</h4>
                      <p className="text-muted-foreground text-sm">Teachers can create detailed assignments and notify the entire class in just a few clicks.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold font-headline">Private Submissions</h4>
                      <p className="text-muted-foreground text-sm">Students work and submit in a private space, sharing with the teacher only when they're ready.</p>
                    </div>
                  </li>
                   <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent mt-1 shrink-0" />
                    <div>
                      <h4 className="font-semibold font-headline">Real-time Updates</h4>
                      <p className="text-muted-foreground text-sm">Stay in the loop with instant notifications for new assignments and submissions.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl">
                 <Image src="https://placehold.co/600x400.png" alt="AssignMint dashboard screenshot" layout="fill" objectFit="cover" data-ai-hint="dashboard user interface" />
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-headline text-foreground">Features for a Better Learning Environment</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-accent/20 text-accent rounded-full h-12 w-12 flex items-center justify-center">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline pt-4">Role-Based Access</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">
                Dedicated interfaces for Teachers and Students ensure everyone has the tools they need.
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                 <div className="mx-auto bg-accent/20 text-accent rounded-full h-12 w-12 flex items-center justify-center">
                  <BookOpen className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline pt-4">Flexible Submissions</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">
                Supports text, PDF, and image uploads to accommodate various assignment types.
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                 <div className="mx-auto bg-accent/20 text-accent rounded-full h-12 w-12 flex items-center justify-center">
                  <Share2 className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline pt-4">Controlled Sharing</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">
                Students maintain privacy and control over when they share their work with teachers.
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                 <div className="mx-auto bg-accent/20 text-accent rounded-full h-12 w-12 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline pt-4">Progress Tracking</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">
                Monitor assignment completion and student progress in real-time.
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-secondary/30 py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-bold font-headline text-foreground mb-6">
                Ready to Transform Your Teaching Experience?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of educators who are already using AssignMint to streamline their classroom workflow.
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/signup">Get Started Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/features">Features</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/about">About</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/docs">Documentation</Link></li>
                <li><Link href="/guides">Guides</Link></li>
                <li><Link href="/support">Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="https://twitter.com/assignmint">Twitter</Link></li>
                <li><Link href="https://linkedin.com/company/assignmint">LinkedIn</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} AssignMint. All rights reserved.</p>
          </div>
        </div>
      </footer>
                  <CheckCircle className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline pt-4">Easy Tracking</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-sm">
                Dashboards provide a clear overview of pending, completed, and shared assignments.
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} AssignMint. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

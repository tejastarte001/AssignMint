"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { cn } from "@/lib/utils";
import {
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Logo } from "@/components/icons/logo";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  PlusCircle,
  BookCheck,
  Book,
  User as UserIcon,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

const teacherNavItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/create-assignment", label: "Create Assignment", icon: PlusCircle },
  { href: "/dashboard/submissions", label: "Submissions", icon: BookCheck },
];

const studentNavItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/assignments", label: "Assignments", icon: Book },
];

export default function DashboardSidebar() {
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const { toggleSidebar, state } = useSidebar();
  
  const navItems = user?.role === 'teacher' ? teacherNavItems : studentNavItems;

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Logo className="h-7 w-7 text-primary" />
            <span className={cn("font-bold font-headline text-lg", state === 'collapsed' && 'hidden')}>AssignMint</span>
          </Link>
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={toggleSidebar}>
            {state === 'expanded' ? <PanelLeftClose /> : <PanelLeftOpen />}
          </Button>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} legacyBehavior passHref>
                <SidebarMenuButton
                  isActive={pathname === item.href}
                  tooltip={item.label}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Profile">
              <UserIcon className="h-5 w-5" />
              <span>Profile</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={logout} tooltip="Log Out">
              <LogOut className="h-5 w-5" />
              <span>Log Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
}

// /app/admin/layout.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  ShoppingBag, 
  Settings, 
  BarChart3, 
  FileText, 
  LogOut, 
  ChevronLeft, 
  Menu,
  Bell,
  User,
  PawPrint
} from 'lucide-react';
import { colors } from '@/lib/theme/colors';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { 
      label: 'Dashboard', 
      href: '/admin', 
      icon: <LayoutDashboard className="w-5 h-5" /> 
    },
    { 
      label: 'Users', 
      href: '/admin/users', 
      icon: <Users className="w-5 h-5" /> 
    },
    { 
      label: 'Products', 
      href: '/admin/products', 
      icon: <ShoppingBag className="w-5 h-5" /> 
    },
    { 
      label: 'Analytics', 
      href: '/admin/analytics', 
      icon: <BarChart3 className="w-5 h-5" /> 
    },
    { 
      label: 'Reports', 
      href: '/admin/reports', 
      icon: <FileText className="w-5 h-5" /> 
    },
    { 
      label: 'Settings', 
      href: '/admin/settings', 
      icon: <Settings className="w-5 h-5" /> 
    },
  ];

  return (
    <div className="flex h-screen bg-neutral-background">
      {/* Sidebar */}
      <div className={`${
        collapsed ? 'w-16' : 'w-64'
      } bg-white shadow-md transition-all duration-300 flex flex-col`}>
        {/* Logo and Collapse Button */}
        <div className="flex items-center justify-between h-16 px-4 border-b">
          {!collapsed && (
            <Link href="/admin" className="flex items-center">
              <div className="h-8 w-8 rounded-full flex items-center justify-center mr-2" style={{ background: `linear-gradient(135deg, ${colors.primary.main}, ${colors.accent.features})` }}>
                <PawPrint className="h-5 w-5 text-white" />
              </div>
              <span className="font-semibold text-lg" style={{ color: colors.primary.main }}>PetPalace</span>
            </Link>
          )}
          <button 
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-md hover:bg-neutral-background"
            style={{ color: colors.neutral.lightText }}
          >
            {collapsed ? (
              <Menu className="h-5 w-5" />
            ) : (
              <ChevronLeft className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto pt-4">
          <ul className="space-y-1 px-2">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={`flex items-center px-3 py-2 rounded-md transition-colors`}
                    style={{
                      backgroundColor: isActive ? `${colors.primary.light}20` : 'transparent',
                      color: isActive ? colors.primary.main : colors.neutral.text
                    }}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {!collapsed && <span>{item.label}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* User Profile and Logout */}
        <div className={`p-3 border-t ${collapsed ? 'items-center' : ''}`}>
          {collapsed ? (
            <div className="flex flex-col items-center space-y-2">
              <div className="h-8 w-8 rounded-full flex items-center justify-center" style={{ backgroundColor: `${colors.secondary.light}30` }}>
                <User className="h-4 w-4" style={{ color: colors.secondary.dark }} />
              </div>
              <Link href="/admin/logout" className="p-2 rounded-md" style={{ color: colors.accent.premium }}>
                <LogOut className="h-5 w-5" />
              </Link>
            </div>
          ) : (
            <div className="flex flex-col space-y-3">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full flex items-center justify-center mr-2" style={{ backgroundColor: `${colors.secondary.light}30` }}>
                  <User className="h-4 w-4" style={{ color: colors.secondary.dark }} />
                </div>
                <div>
                  <p className="text-sm font-medium"  style={{ color: colors.neutral.text }}>Admin User</p>
                  <p className="text-xs" style={{ color: colors.neutral.lightText }}>admin@petpalace.com</p>
                </div>
              </div>
              <Link 
                href="/admin/logout" 
                className="flex items-center px-3 py-2 rounded-md hover:bg-red-50"
                style={{ color: colors.accent.premium }}
              >
                <LogOut className="h-5 w-5 mr-2" />
                <span>Log Out</span>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6">
          <h1 className="text-xl font-semibold" style={{ color: colors.neutral.text }}>Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 rounded-full hover:bg-neutral-background">
              <Bell className="h-5 w-5" style={{ color: colors.neutral.lightText }} />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full" style={{ backgroundColor: colors.accent.premium }}></span>
            </button>
            <div 
              className="h-8 w-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${colors.primary.light}20` }}
            >
              <User className="h-4 w-4" style={{ color: colors.primary.main }} />
            </div>
          </div>
        </header>
        
        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-neutral-background">
          {children}
        </main>
      </div>
    </div>
  );
}
'use client'

import { X, LogIn, LogOut, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import Image from "next/image"
import { useTheme } from "next-themes"
import { redirect } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"


type SidebarProps = {
    isOpen: boolean
    onClose: () => void // 👈 add onClose prop
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
    const { theme, setTheme, resolvedTheme, systemTheme } = useTheme()
    const { user, isAuthenticated, signOut } = useAuth()

    return (
        <aside
            className={cn(
                "fixed top-0 left-0 z-40 h-screen w-64 bg-white shadow-lg border-r border-primary/20 p-4 transition-transform duration-300 ease-in-out",
                isOpen ? "translate-x-0" : "-translate-x-full",  'dark:bg-gray-900'
            )}
        >
            <div className="flex justify-end mb-4">
                <Button variant="ghost" onClick={onClose} size="icon">
                    <X className="h-5 w-5" />
                </Button>
            </div>
            <nav className="flex flex-col">
                <div onClick={() => { onClose(); redirect('/'); }} className="flex cursor-pointer items-center gap-2 py-2 px-1 dark:text-white text-gray-700 dark:hover:text-primary hover:text-primary hover:opacity-80 transition hover:bg-primary/10">
                    <Image
                        src="/images/btn/home_btn.png"
                        alt="Menu"
                        width={30}
                        height={30}
                        className="transition mr-[1rem]"
                    />
                    Home
                </div>
                <div onClick={() => { onClose(); redirect('/pages/2'); }} className="flex cursor-pointer items-center gap-2 py-2 px-1 text-gray-700 dark:text-white dark:hover:text-primary hover:text-primary hover:opacity-80 transition hover:bg-primary/10">
                    <Image
                        src="/images/btn/contents_btn.png"
                        alt="Menu"
                        width={30}
                        height={30}
                        className="hover:opacity-80 transition mr-[1rem]"
                    />
                    Contents
                </div>
                <div onClick={() => { onClose(); setTheme(resolvedTheme === "dark" ? "light" : "dark") }} className="flex cursor-pointer items-center gap-2 py-2 px-1 text-gray-700 dark:text-white dark:hover:text-primary hover:text-primary hover:opacity-80 transition hover:bg-primary/10">
                    <Image
                        src="/images/btn/colormode_btn.png"
                        alt="Menu"
                        width={30}
                        height={30}
                        className="hover:opacity-80 transition mr-[1rem]"
                    />
                    Change Theme
                </div>
                
                {/* Authentication Section */}
                <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-4">
                    {isAuthenticated ? (
                        <>
                            <div className="flex items-center gap-2 py-2 px-1 text-gray-700 dark:text-white">
                                <User className="w-5 h-5 mr-2" />
                                <span className="text-sm font-medium">Welcome, {user?.name}</span>
                            </div>
                                                         <div 
                                 onClick={() => { 
                                     onClose(); 
                                     signOut(); 
                                 }} 
                                 className="flex cursor-pointer items-center gap-2 py-2 px-1 text-gray-700 dark:text-white dark:hover:text-red-600 hover:text-red-600 hover:opacity-80 transition hover:bg-red-100"
                             >
                                <LogOut className="w-5 h-5 mr-2" />
                                Sign Out
                            </div>
                        </>
                    ) : (
                        <>
                                                         <div onClick={() => { onClose(); redirect('/signin'); }} className="flex cursor-pointer items-center gap-2 py-2 px-1 text-gray-700 dark:text-white dark:hover:text-primary hover:text-primary hover:opacity-80 transition hover:bg-primary/10">
                                 <LogIn className="w-5 h-5 mr-2" />
                                 Sign In
                             </div>
                             <div onClick={() => { onClose(); redirect('/signup'); }} className="flex cursor-pointer items-center gap-2 py-2 px-1 text-gray-700 dark:text-white dark:hover:text-primary hover:text-primary hover:opacity-80 transition hover:bg-primary/10">
                                <User className="w-5 h-5 mr-2" />
                                Sign Up
                            </div>
                        </>
                    )}
                </div>
            </nav>
        </aside>
    )
}

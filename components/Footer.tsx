"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-deep-forest text-white/90 mt-auto py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand Column */}
                    <div className="md:col-span-1 space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white overflow-hidden">
                                <Image src="/logo-png.png" alt="Logo" width={32} height={32} />
                            </div>
                            <span className="text-xl font-bold tracking-tight">UrbanFlow</span>
                        </div>
                        <p className="text-sm text-white/70">
                            Empowering smart cities with real-time data insights and sustainable solutions.
                        </p>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 className="font-semibold mb-4 text-leaf-green">Product</h4>
                        <ul className="space-y-2 text-sm text-white/70">
                            <li><Link href="/" className="hover:text-white transition-colors">Overview</Link></li>
                            <li><Link href="/mobility" className="hover:text-white transition-colors">Mobility</Link></li>
                            <li><Link href="/energy" className="hover:text-white transition-colors">Energy Grid</Link></li>
                            <li><Link href="/health" className="hover:text-white transition-colors">Health System</Link></li>
                            <li><Link href="/environment" className="hover:text-white transition-colors">Environment</Link></li>
                            <li><Link href="/agriculture" className="hover:text-white transition-colors">Agriculture</Link></li>
                            <li><Link href="/education" className="hover:text-white transition-colors">Education</Link></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h4 className="font-semibold mb-4 text-leaf-green">Resources</h4>
                        <ul className="space-y-2 text-sm text-white/70">
                            <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">API Reference</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter / Social */}
                    <div>
                        <h4 className="font-semibold mb-4 text-leaf-green">Connect</h4>
                        <div className="flex gap-4 mb-6">
                            <a href="#" className="hover:text-leaf-green transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="hover:text-leaf-green transition-colors"><Github size={20} /></a>
                        </div>
                        <div className="text-xs text-white/50">
                            © {new Date().getFullYear()} UrbanFlow Inc. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

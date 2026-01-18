"use client";

import { usePathname } from "next/navigation";
import { MdSearch, MdNotifications, MdPerson, MdSettings } from "react-icons/md";

export function Navbar() {
    const pathname = usePathname();

    // Helper to format pathname into a readable title
    const getPageTitle = (path: string) => {
        if (path === "/") return "Overview";
        // Remove leading slash and capitalize first letter
        const segment = path.substring(1);
        return segment.charAt(0).toUpperCase() + segment.slice(1);
    };

    return (
        <header className="h-20 px-8 flex items-center justify-between bg-mint-white/50 backdrop-blur-sm sticky top-0 z-40 border-b border-deep-teal/5">
            {/* Left: Page Title */}
            <div>
                <h1 className="text-2xl font-bold text-deep-teal tracking-tight">
                    {getPageTitle(pathname)}
                </h1>
                <p className="text-sm text-deep-teal/60 font-medium">
                    City Monitor Dashboard
                </p>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-4">
                {/* Search Bar */}
                <div className="relative group hidden md:block">
                    <MdSearch
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-deep-teal/40 group-focus-within:text-deep-teal/80 transition-colors"
                        size={20}
                    />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-10 pr-4 py-2 bg-white rounded-xl border border-deep-teal/10 focus:outline-none focus:ring-2 focus:ring-deep-teal/20 focus:border-deep-teal/30 w-64 text-sm text-deep-teal placeholder:text-deep-teal/30 transition-all shadow-sm"
                    />
                </div>

                <div className="h-8 w-px bg-deep-teal/10 mx-2 hidden md:block" />

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                    <button className="p-2.5 rounded-xl hover:bg-deep-teal/5 text-deep-teal/70 hover:text-deep-teal transition-colors relative group">
                        <MdNotifications size={22} />
                        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-action-red rounded-full border-2 border-mint-white"></span>
                    </button>

                    <button className="p-2.5 rounded-xl hover:bg-deep-teal/5 text-deep-teal/70 hover:text-deep-teal transition-colors">
                        <MdSettings size={22} />
                    </button>

                    {/* Profile Dropdown Trigger */}
                    <button className="ml-2 flex items-center gap-3 pl-2 pr-3 py-1.5 rounded-xl hover:bg-deep-teal/5 transition-all text-left">
                        <div className="w-9 h-9 rounded-full bg-deep-teal/10 flex items-center justify-center text-deep-teal font-bold border border-deep-teal/5">
                            JD
                        </div>
                        <div className="hidden lg:block relative top-[-1px]">
                            <div className="text-sm font-bold text-deep-teal leading-none mb-0.5">Jane Doe</div>
                            <div className="text-xs text-deep-teal/60 font-medium">City Administrator</div>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
}

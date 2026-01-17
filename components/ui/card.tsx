import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    noPadding?: boolean;
}

export function Card({ children, className, noPadding = false, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "bg-white rounded-2xl shadow-lg shadow-black/5 hover:shadow-black/10 transition-shadow duration-300 border border-black/5 overflow-hidden",
                !noPadding && "p-6",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

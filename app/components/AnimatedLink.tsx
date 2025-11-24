import Link from "next/link";
import { ReactNode } from "react";

type AnimatedLinkProps = {
    href: string;
    children: ReactNode;
    className?: string;
};

export default function AnimatedLink({
                                         href,
                                         children,
                                         className = "",
                                     }: AnimatedLinkProps) {
    return (
        <Link
            href={href}
            className={`
        relative inline-block
        before:content-['']
        before:absolute before:-bottom-1 before:left-0
        before:h-[2px] before:w-0
        before:bg-current
        before:transition-all before:duration-300 before:ease-out
        hover:before:w-full
        ${className}
      `}
        >
            {children}
        </Link>
    );
}

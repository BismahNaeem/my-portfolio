 import Link from "next/link";
 import { AlignJustify } from "lucide-react";
 import {
     Sheet,
     SheetContent,
     SheetDescription,
    SheetHeader,
     SheetTitle,
     SheetTrigger,
 } from "@/components/ui/sheet";

function Header() {
    return (
        <header className="header">
            <div>
                <h1 className="logo">Portfolio</h1>
            </div>
            <ul className="nav-buttons">
                <li><Link href="/">HOME</Link></li>
                <li><Link href="/about">ABOUT</Link></li>
                <li><Link href="/skills">SKILLS</Link></li>
                <li><Link href="/projects">PROJECTS</Link></li>
            </ul>
            <Sheet>
                <SheetTrigger className="sheet-trigger"><AlignJustify /></SheetTrigger>
                <SheetContent className="sheet-content">
                    <ul>
                        <li><Link href="/">HOME</Link></li>
                        <li><Link href="/about">ABOUT</Link></li>
                        <li><Link href="/skills">SKILLS</Link></li>
                        <li><Link href="/projects">PROJECTS</Link></li>
                    </ul>
                    <SheetHeader>
                        <SheetTitle></SheetTitle>
                        <SheetDescription></SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet> 
        </header>
    );
}

export default Header;

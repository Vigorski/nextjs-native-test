'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

const navigationLinks = [
	{ href: "/", label: "Links Group 1" },
	{ href: "/", label: "Links Group 2" },
];

export const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className="px-5">
			<div className="container mx-auto py-6">
				<div className="flex items-center justify-between">
					<Link href="/">
						<Image 
							src="/nt-logo-black-text.svg" 
							alt="Logo" 
							width={158} 
							height={29}
							priority
						/>
					</Link>

					<nav className="hidden md:flex items-center space-x-4">
						{navigationLinks.map((link) => (
							<Link 
								key={link.label}
								href={link.href}
								className="text-sm font-medium hover:text-primary transition-colors"
							>
								{link.label}
							</Link>
						))}
					</nav>

					<Button 
						className="hidden md:flex bg-primary text-white rounded-full" 
						size="lg"
					>
						Get started
					</Button>

					<Sheet open={open} onOpenChange={setOpen}>
						<SheetTrigger asChild>
							<Button
								variant="ghost"
								size="icon-lg"
								className="md:hidden"
								aria-label="Toggle menu"
							>
								<Menu className="size-6" />
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="w-[80%] sm:w-[400px] p-4">
							<SheetHeader>
								<SheetTitle>
									<Image 
										src="/nt-logo-black-text.svg" 
										alt="Logo" 
										width={120} 
										height={22}
									/>
								</SheetTitle>
							</SheetHeader>
							<nav className="flex flex-col gap-4 p-4">
								{navigationLinks.map((link) => (
									<Link
										key={link.label}
										href={link.href}
										onClick={() => setOpen(false)}
										className="text-md font-medium hover:text-primary transition-colors"
									>
										{link.label}
									</Link>
								))}
								<Button 
									className="bg-primary text-white rounded-full mt-20 w-full" 
									size="lg"
									onClick={() => setOpen(false)}
								>
									Get started
								</Button>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
};
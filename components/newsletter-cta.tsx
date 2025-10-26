'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ActionInput } from '@/components/common/action-input';
import {
	DialogHeader,
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
} from './ui/dialog';

export function NewsletterCTA() {
	const [open, setOpen] = useState(false);

	const handleSubscribe = () => {
		setOpen(true);
	};

	return (
		<>
			<section className="w-full bg-brand-midnight-blue py-18 px-4 border-t border-gray-200 relative">
				<div className="absolute inset-0 pointer-events-none overflow-hidden">
					<Image
						src="/star.svg"
						alt="Star"
						width={122}
						height={122}
						className="hidden sm:block absolute bottom-10 right-20 opacity-60"
					/>
				</div>
				<div className="container mx-auto max-w-2xl text-center space-y-8">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
						Never miss out our&nbsp;
						<span className="text-primary">latest news</span>
					</h2>

					<ActionInput
						onSubmit={handleSubscribe}
						placeholder="Email address"
						buttonText="Sign up"
					/>
					<p className="text-lg text-white">
						By submitting this form, you will receive emails from Native Teams.
						<br />
						For details, view our&nbsp;
						<Link
							href="/"
							className="text-primary hover:underline">
							Privacy Policy
						</Link>
						.
					</p>
				</div>
			</section>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent className="sm:max-w-[335px] flex flex-col items-center justify-center py-10 px-5">
					<Image
						src="/nt-logo.svg"
						alt="Native Teams"
						width={118}
						height={126}
						className="w-auto"
					/>

					<DialogHeader className="space-y-4 mt-2">
						<DialogTitle className="text-2xl font-bold text-center">
							<span>Thank you for</span>
							<br />
							<span> signing up!</span>
						</DialogTitle>
						<DialogDescription className="text-base text-center">
							Your email has been added to our list. Stay tuned for more news,
							and be the first to hear from us.
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</>
	);
}
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer/footer';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
});

export const metadata: Metadata = {
	title: {
		default: 'Native Teams Blog',
		template: '%s | Native Teams Blog'
	},
	description: 'Resources, tips and tricks about the modern way of working.',
	keywords: ['news', 'blog', 'native teams', 'technology', 'business'],
	authors: [{ name: 'Igor Veleski' }],
	openGraph: {
		title: 'Native Teams Blog',
		description: 'Resources, tips and tricks about the modern way of working',
		type: 'website',
		locale: 'en_US',
	},
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<div className="min-h-screen bg-background">
					<Header />
					<main>{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}

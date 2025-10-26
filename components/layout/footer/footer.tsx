import Image from 'next/image';
import Link from 'next/link';
import { Accordion } from '@/components/ui/accordion';
import { FooterLink } from './footer-link';
import {
	FooterLinkSectionDesktop,
	FooterLinkSectionMobile
} from './footer-link-section';

const footerLinks = [
	{
		title: 'Platform',
		links: [
			{ href: '#', label: 'Employer of Record' },
			{ href: '#', label: 'PEO Services' },
			{ href: '#', label: 'Company as a Service' },
			{ href: '#', label: 'Work Payments' },
			{ href: '#', label: 'Global Payroll' },
			{ href: '#', label: 'Tax Management' },
			{ href: '#', label: 'Expenses Management' }
		]
	},
	{
		title: 'Information',
		links: [
			{ href: '#', label: 'Legal Entity' },
			{ href: '#', label: 'Client Invoicing' },
			{ href: '#', label: 'Payment Requests' },
			{ href: '#', label: 'Global Mobility' },
			{ href: '#', label: 'Employees Benefits' },
			{ href: '#', label: 'For Startups' }
		]
	},
	{
		title: 'Company',
		links: [
			{ href: '#', label: 'About' },
			{ href: '#', label: 'Our Countries' },
			{ href: '#', label: 'Affiliates' },
			{ href: '#', label: 'Partnerships' },
			{ href: '#', label: 'Charity' },
			{ href: '#', label: 'Data & Security' },
			{ href: '#', label: 'Book a demo' },
			{ href: '#', label: 'Contact' }
		]
	}
];

export function Footer() {
	return (
		<footer className="w-full bg-brand-blue">
			<div className="container mx-auto px-4 pt-11 pb-16 md:py-25">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
					<div>
						<Link
							href="/"
							className="inline-block">
							<Image
								src="/nt-logo-white-text.svg"
								alt="Native Teams"
								width={212}
								height={40}
								className="w-auto"
							/>
						</Link>
					</div>

					<div className="md:hidden col-span-1">
						<Accordion
							type="multiple"
							className="w-full">
							{footerLinks.map(section => (
								<FooterLinkSectionMobile
									key={section.title}
									title={section.title}
									links={section.links}
								/>
							))}
						</Accordion>
					</div>

					<div className="hidden md:contents">
						{footerLinks.map(section => (
							<FooterLinkSectionDesktop
								key={section.title}
								title={section.title}
								links={section.links}
							/>
						))}
					</div>
				</div>
			</div>

			<div className="border-t border-white/10">
				<div className="container mx-auto pt-6 pb-16">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<p className="text-sm text-white/60">&copy; Native Teams Limited</p>
						<div className="flex items-center gap-2 text-sm text-white/60">
							<FooterLink
								href="#"
								label="Cookie Policy"
							/>
							<span>|</span>
							<FooterLink
								href="#"
								label="Privacy Policy"
							/>
							<span>|</span>
							<FooterLink
								href="#"
								label="Terms & Conditions"
							/>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

// components/layout/footer.tsx
import Image from 'next/image';
import Link from 'next/link';

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

interface FooterLinkProps {
	href: string;
	children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => (
	<Link
		href={href}
		className="text-sm text-white/60 hover:text-white transition-colors">
		{children}
	</Link>
);

interface FooterLinkType {
	href: string;
	label: string;
}

interface FooterSectionProps {
	title: string;
	links: FooterLinkType[];
}

const FooterSection = ({ title, links }: FooterSectionProps) => (
	<div>
		<h3 className="text-sm font-bold uppercase mb-4 text-white">{title}</h3>
		<ul className="space-y-3">
			{links.map(link => (
				<li key={link.label}>
					<FooterLink href={link.href}>{link.label}</FooterLink>
				</li>
			))}
		</ul>
	</div>
);

export function Footer() {
	return (
		<footer className="w-full bg-brand-blue">
			<div className="container mx-auto px-4 py-25">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
					<div>
						<Link
							href="/"
							className="inline-block">
							<Image
								src="/nt-logo-white-text.svg"
								alt="Native Teams"
								width={150}
								height={40}
								className="h-10 w-auto"
							/>
						</Link>
					</div>

					{footerLinks.map(section => (
						<FooterSection
							key={section.title}
							title={section.title}
							links={section.links}
						/>
					))}
				</div>
			</div>

			<div className="border-t border-white/10">
				<div className="container mx-auto pt-6 pb-16">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<p className="text-sm text-white/60">&copy; Native Teams Limited</p>
						<div className="flex items-center gap-2 text-sm text-white/60">
							<FooterLink href="#">Cookie Policy</FooterLink>
							<span>|</span>
							<FooterLink href="#">Privacy Policy</FooterLink>
							<span>|</span>
							<FooterLink href="#">Terms & Conditions</FooterLink>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

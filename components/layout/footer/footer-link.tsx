import Link from "next/link";

export interface FooterLinkProps {
	href: string;
	label: string;
}

export const FooterLink = ({ href, label }: FooterLinkProps) => (
	<Link
		href={href}
		className="text-sm text-white/60 hover:text-white transition-colors">
		{label}
	</Link>
);
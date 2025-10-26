import { FooterLink, type FooterLinkProps } from "./footer-link";

interface FooterLinkListProps {
	links: FooterLinkProps[];
}

export const FooterLinkList = ({ links }: FooterLinkListProps) => (
	<ul className="space-y-3">
		{links.map(link => (
			<li key={link.label}>
				<FooterLink
					href={link.href}
					label={link.label}
				/>
			</li>
		))}
	</ul>
);
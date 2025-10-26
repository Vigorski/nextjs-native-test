import { AccordionItem, AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import { type FooterLinkProps } from "./footer-link";
import { FooterLinkList } from "./footer-link-list";

interface FooterLinkSectionProps {
	title: string;
	links: FooterLinkProps[];
}

export const FooterLinkSectionDesktop = ({ title, links }: FooterLinkSectionProps) => (
	<div>
		<h3 className="text-sm font-bold uppercase mb-4 text-white">{title}</h3>
		<FooterLinkList links={links} />
	</div>
);

export const FooterLinkSectionMobile = ({ title, links }: FooterLinkSectionProps) => (
	<AccordionItem
		value={`item-${title}`}
		className="border-0">
		<AccordionTrigger className="justify-start text-sm font-bold uppercase text-white">
			{title}
		</AccordionTrigger>
		<AccordionContent className="pt-2">
			<FooterLinkList links={links} />
		</AccordionContent>
	</AccordionItem>
);
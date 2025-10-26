import Link from "next/link";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";

interface ReadMoreCTAProps {
	articleUrl: string;
}

export const ReadMoreCTA = ({ articleUrl }: ReadMoreCTAProps) => {
	return (
		<section className="my-12 pt-8 px-5">
			<div className="bg-accent p-6 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
				<div className="sm:text-left text-center">
					<p className="font-semibold mb-1">Read the original article</p>
					<p className="text-sm text-muted-foreground">
						Visit the source for the complete experience
					</p>
				</div>
				<Button
					size="lg"
					className="rounded-full w-full sm:w-auto"
					asChild>
					<Link
						href={articleUrl}
						target="_blank">
						View Original
						<ExternalLink className="h-4 w-4" />
					</Link>
				</Button>
			</div>
		</section>
	);
};
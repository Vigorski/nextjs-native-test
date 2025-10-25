import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

export const Header = () => {
	return (
		<header>
			<div className="container mx-auto py-6">
				<div className="flex items-center justify-between">
					<Link href="/">
						<Image src="/nt-logo-black-text.svg" alt="Logo" width={158} height={29} />
					</Link>
					<div className="flex items-center space-x-4">
						<Link href="/">
							Links Group 1
						</Link>
						<Link href="/">
							Links Group 2
						</Link>
					</div>
					<Button className="bg-primary text-white rounded-full" size="lg">
						Get started
					</Button>
				</div>
			</div>
		</header>
	);
};
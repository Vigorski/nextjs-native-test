import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function InfoCTA() {
	return (
		<section className="px-16 bg-accent py-32 relative">
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				<Image
					src="/nt-logo-primary.svg"
					alt="Native Teams Logo"
					width={300}
					height={300}
					className="absolute top-0 left-0 h-full opacity-10"
				/>
				<Image
					src="/star.svg"
					alt="Star"
					width={64}
					height={64}
					className="absolute top-10 right-20 opacity-60"
				/>
			</div>
			<div className="container mx-auto text-center">
				<h2 className="text-3xl lg:text-5xl font-bold mb-5">
					Explore Native Teams today
				</h2>

				<p className="text-lg lg:text-xl text-center mb-5 max-w-[800px] mx-auto">
					Unlock the full potential of your teams and elevate your business or
					personal growth with Native Teams. Explore our platform today and
					start your journey towards success.
				</p>

				<Button
					size="lg"
					className="text-lg px-8 py-6 group rounded-full">
					Learn more
				</Button>
			</div>
		</section>
	);
}

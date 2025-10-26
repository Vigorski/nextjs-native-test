import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface InfoCTAProps {
	theme?: 'light' | 'dark';
}

export function InfoCTA({ theme = 'light' }: InfoCTAProps) {
	return (
		<section className={cn('px-5 sm:px-16 bg-accent py-15 sm:py-32 relative', theme === 'dark' ? 'bg-brand-midnight-blue' : 'bg-accent')}>
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				<Image
					src="/nt-logo-primary.svg"
					alt="Native Teams Logo"
					width={300}
					height={300}
					className={cn('hidden sm:block absolute top-0 left-0 h-full w-auto opacity-10', theme === 'dark' ? 'opacity-18' : 'opacity-10')}
				/>
				<Image
					src="/star.svg"
					alt="Star"
					width={64}
					height={64}
					className="absolute top-5 sm:top-10 right-10 sm:right-20 opacity-60 w-[40px] h-[40px] sm:w-[64px] sm:h-[64px]"
				/>
			</div>
			<div className="container mx-auto text-center">
				<h2 className={cn('text-3xl lg:text-5xl font-bold mb-5', theme === 'dark' ? 'text-white' : 'text-black')}>
					Explore Native Teams today
				</h2>

				<p className={cn('text-lg lg:text-xl text-center mb-5 max-w-[800px] mx-auto', theme === 'dark' ? 'text-white' : 'text-black')}>
					Unlock the full potential of your teams and elevate your business or
					personal growth with Native Teams. Explore our platform today and
					start your journey towards success.
				</p>

				<Button
					size="lg"
					className="text-lg px-8 py-6 group rounded-full w-full sm:w-auto">
					Learn more
				</Button>
			</div>
		</section>
	);
}

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ActionInputProps {
	onSubmit: (query: string) => void;
	placeholder: string;
	buttonText: string;
}

export const ActionInput = ({
	onSubmit,
	placeholder = 'Search for posts',
	buttonText = 'Search'
}: ActionInputProps) => {
	const [value, setValue] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const trimmedValue = value.trim();

		if (trimmedValue) {
			onSubmit(trimmedValue);
			setValue('');
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="w-full max-w-2xl relative flex flex-col sm:flex-row">
			<Input
				id="search"
				type="text"
				placeholder={placeholder}
				value={value}
				onChange={e => setValue(e.target.value)}
				className="h-12 text-base rounded-full"
			/>
			<Button
				type="submit"
				size="xl"
				className="static sm:absolute mt-4 sm:mt-0 right-0 top-0 h-12 px-12 rounded-full">
				{buttonText}
			</Button>
		</form>
	);
};

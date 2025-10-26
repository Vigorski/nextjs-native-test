import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function encodeUrl(url: string) {
	return Buffer.from(url).toString('base64url');
}

export function decodeUrl(encodedUrl: string) {
	return Buffer.from(encodedUrl, 'base64url').toString('utf-8');
}
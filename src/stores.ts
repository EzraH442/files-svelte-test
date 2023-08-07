import { writable } from 'svelte/store';

export interface mFile {
	id: string;
	name: string;
}

const fileNames = writable<mFile[]>([]);

export { fileNames };

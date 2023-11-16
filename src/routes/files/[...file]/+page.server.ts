import { gatewayUrl } from '$env/static/private';
import { extractFileName, extractFolderName } from '$lib/util';
import type { mFile } from '../../../stores';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, cookies, params }) => {
	const urlparams = new URLSearchParams({ prefix: `${params.file}/` ?? '', delimiter: '/' });
	const url = `${gatewayUrl}/list?${urlparams}`;
	const res = await fetch(url, {
		headers: {
			Authorization: `Bearer ${cookies.get('session_id')}`
		}
	});
	const resData = await res.json();

	const files = resData.files.map((f: { id: string; name: string }) => {
		const file: mFile = {
			id: f.id,
			path: f.name,
			name: f.id ? extractFileName(f.name) : extractFolderName(f.name)
		};
		return file;
	});

	const token = cookies.get('session_id') ?? '';

	return { data: { files, token, path: params.file } };
};

export const ssr = false;

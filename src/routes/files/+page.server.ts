import { gatewayUrl } from '$env/static/private';
import { extractFileName, extractFolderName } from '$lib/util';
import type { mFile } from '../../stores';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, cookies }) => {
	const urlparams = new URLSearchParams({ prefix: '', delimiter: '/' });
	const url = `${gatewayUrl}/list?${urlparams}`;

	const res = await fetch(url, {
		headers: {
			Authorization: `Bearer ${cookies.get('session_id')}`
		}
	});
	const resData = await res.json();

	if (resData.status == 401) {
		console.log(resData);
		return { data: [] };
	}

	const data = resData.files.map((f: { id: string; name: string }) => {
		const file: mFile = {
			id: f.id,
			path: f.name,
			name: f.id ? extractFileName(f.name) : extractFolderName(f.name)
		};
		return file;
	});

	return { data };
};

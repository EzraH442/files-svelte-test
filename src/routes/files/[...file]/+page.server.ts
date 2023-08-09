import { gatewayUrl } from '$env/static/private';
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
	const data = await res.json();
	const files = data.files as mFile[];

	const token = cookies.get('session_id') ?? '';

	return { data: { files, token } };
};

import { gatewayUrl } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, cookies }) => {
	const urlparams = new URLSearchParams({ prefix: '', delimiter: '/' });
	const url = `${gatewayUrl}/list?${urlparams}`;

	const res = await fetch(url, {
		headers: {
			Authorization: `Bearer ${cookies.get('session_id')}`
		}
	});
	const data = await res.json();

	return { data };
};

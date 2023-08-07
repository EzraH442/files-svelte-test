import { gatewayUrl } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, cookies, params }) => {
	const urlparams = new URLSearchParams({ prefix: `${params.file}/` ?? '', delimiter: '/' });
	const url = `${gatewayUrl}/list?${urlparams}`;

	console.log(url);

	const res = await fetch(url, {
		headers: {
			Authorization: `Bearer ${cookies.get('session_id')}`
		}
	});
	const data = await res.json();
	console.log(JSON.stringify(data).toString().substring(0, 500));

	return { data };
};

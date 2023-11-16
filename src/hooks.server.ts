import { makeVerifyRequest } from '$lib/requests';
import { redirect } from '@sveltejs/kit';
import { decode } from 'jsonwebtoken';

export const handle = async ({ event, resolve }) => {
	const token = event.cookies.get('session_id');

	if (event.url.pathname.startsWith('/files')) {
		if (!token) {
			throw redirect(303, '/login');
		} else {
			const verifyResponse = await makeVerifyRequest(new URLSearchParams({ token }));

			console.log(verifyResponse);
			if (verifyResponse.valid) {
				event.locals.user = {
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					email: decode(token)?.email ?? ''
				};
			} else {
				event.cookies.delete('session_id', { path: '/' });
				throw redirect(303, '/login');
			}
		}
	}

	const query = event.url.searchParams.get('signout');

	if (Boolean(query) == true) {
		event.cookies.delete('session_id', { path: '/' });
	}

	return resolve(event);
};

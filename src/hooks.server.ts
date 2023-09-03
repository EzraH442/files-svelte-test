import { makeVerifyRequest } from '$lib/requests';
import { redirect } from '@sveltejs/kit';
import { decode } from 'jsonwebtoken';

export const handle = async ({ event, resolve }) => {
	const protectedRoutes = ['/files'];

	const token = event.cookies.get('session_id');

	if (protectedRoutes.includes(event.url.pathname) && !token) {
		throw redirect(303, '/');
	}

	const verifyResponse = await makeVerifyRequest(new URLSearchParams({ token: token ?? '' }));

	if (verifyResponse.valid) {
		event.locals.user = {
			isAuthenticated: true,
			// @ts-ignore
			email: decode(token!)?.email ?? ''
		};
	} else {
		event.cookies.delete('session_id', { path: '/' });
		if (protectedRoutes.includes(event.url.pathname)) {
			throw redirect(303, '/login');
		}
	}

	const query = event.url.searchParams.get('signout');

	if (Boolean(query) == true) {
		event.cookies.delete('session_id', { path: '/' });
	}

	return resolve(event);
};

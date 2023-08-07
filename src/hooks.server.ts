import { makeVerifyRequest } from '$lib/requests';
import { redirect } from '@sveltejs/kit';
import { decode } from 'jsonwebtoken';

export const handle = async ({ event, request, resolve }) => {
	const protectedRoutes = ['/files'];

	console.log('run handle', event.url.pathname);
	const token = event.cookies.get('session_id');
	console.log('session token is', token);

	console.log('protected?', protectedRoutes.includes(event.url.pathname));
	if (protectedRoutes.includes(event.url.pathname) && !token) {
		console.log('misisng token');
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
		if (protectedRoutes.includes(event.url.pathname)) {
			throw redirect(303, '/');
		}
	}

	const query = event.url.searchParams.get('signout');

	if (Boolean(query) == true) {
		await event.cookies.delete('session_id', { path: '/' });
	}

	return resolve(event);
};

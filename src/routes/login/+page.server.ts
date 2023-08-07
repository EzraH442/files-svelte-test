import { makeLoginRequest } from '$lib/requests';
import { redirect, type Actions } from '@sveltejs/kit';
import { dev } from '$app/environment';

export const actions: Actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();

		const email = data.get('email')?.toString() ?? '';
		const password = data.get('password')?.toString() ?? '';
		const token = data.get('h-captcha-response')?.toString() ?? '';

		const res = await makeLoginRequest(new URLSearchParams({ email, password, captcha: token }));

		if (res.success && res.token) {
			cookies.set('session_id', res.token, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: !dev,
				maxAge: 60 * 60 * 24 * 7 // one week
			});

			throw redirect(303, '/files');
		}
	}
};

export const ssr = false;

import { authUrl } from '$env/static/private';

interface JWTResponse {
	success: boolean;
	token?: string;
	err?: string;
}

const makeLoginRequest = async (body: URLSearchParams) => {
	const loginResponse = await fetch(`${authUrl}/auth`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body
	}).then((res) => res.json());

	return loginResponse as JWTResponse;
};

interface VerifyResponse {
	valid: boolean;
	error?: string;
}

const makeVerifyRequest = async (body: URLSearchParams) => {
	const verifyResponse = await fetch(`${authUrl}/verify`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body
	}).then((res) => res.json());

	return verifyResponse as VerifyResponse;
};
export { makeLoginRequest, makeVerifyRequest };

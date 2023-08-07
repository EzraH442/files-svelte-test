import x from 'jsonwebtoken';

const parseJwt = (token: string) => {
	const buff = x.decode(token);
	return payload;
};

export default parseJwt;

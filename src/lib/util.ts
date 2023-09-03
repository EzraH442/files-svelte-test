const imageRegex = /\.(JPEG|PNG|JPG|GIF)$/i;
const videoRegex = /\.(MOV|MPV|MP4)$/i;

export const isImage = (fileName: string) => {
	return imageRegex.test(fileName);
};

export const isVideo = (fileName: string) => {
	return videoRegex.test(fileName);
};

export const extractFolderName = (path: string) => {
	return path.substring(path.substring(0, path.length - 1).lastIndexOf('/') + 1);
};

export const extractFileName = (path: string) => {
	return path.substring(path.lastIndexOf('/') + 1);
};

export const toFolders = (path: string) => {
	const ret: { folder: string; href: string }[] = [{ folder: 'Home', href: '' }];
	let current = '';
	const paths = path.split('/');

	paths.forEach((p) => {
		current += p;
		ret.push({
			folder: p,
			href: current
		});
		current += '/';
	});

	return ret;
};

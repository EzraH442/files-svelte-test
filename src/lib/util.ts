const imageRegex = /\.(JPEG|PNG|JPG|GIF)$/i;
const videoRegex = /\.(MOV|MPV|MP4)$/i;

export const isImage = (fileName: string) => {
	return imageRegex.test(fileName);
};

export const isVideo = (fileName: string) => {
	return videoRegex.test(fileName);
};

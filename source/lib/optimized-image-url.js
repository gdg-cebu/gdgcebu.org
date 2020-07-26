const {
    NODE_ENV,
    BASE_URL,
    CLOUDINARY_BASE_URL
} = process.env;

export default function optimizedImageUrl(url, transforms=[]) {
    if (NODE_ENV !== 'production') {
        return url;
    }

    url = [
        BASE_URL,
        url.replace(/^\//, '')
    ].join('/');

    return [
        CLOUDINARY_BASE_URL,
        'image/fetch',
        transforms.join(','),
        url
    ].filter(Boolean).join('/');
};

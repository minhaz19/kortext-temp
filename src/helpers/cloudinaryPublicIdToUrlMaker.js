const CloudinaryPublicIdToUrlMaker = (publicId, height, width) => {
    const appid = 'dev-Algosolver2021'
    return `https://res.cloudinary.com/${appid}/image/upload${height || width ? `/${height ? `h_${height},`: ''}${width ? `w_${width}` : ''}` : ''}/v1/${publicId}`
}

export default CloudinaryPublicIdToUrlMaker
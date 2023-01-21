const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '4e4980cdce8b162a5a2e1318cab7e94e',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;
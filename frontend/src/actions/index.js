import ax from 'axios';

const axios = ax.create({
    baseURL: 'https://runsignup.com/Rest'
})

export const fetchRaces = async () => {
    try {
        return axios.get('/races', {
            params: {
                api_key: 'e504e3419b1149b73a3302e3746885ebbe5f18e9',
                api_secret: 'ca6a11c2a791aa961138295226e7b8dfc7a4ec6b',
                format: 'JSON'
            }
        })
    } catch (error) {
        throw error;
    }
}
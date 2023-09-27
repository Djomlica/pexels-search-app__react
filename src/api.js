import axios from 'axios';

const searchImages = async (term) => {
   const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID gG0GzwP8PmcgyNeieFEUQNYJp7igbxf7vkrj0IJbPlg'
        },
        params: {
            query: term,
        },
    });
    
    return response.data.results;
};

export default searchImages;
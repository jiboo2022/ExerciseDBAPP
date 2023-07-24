
export const SiteUrl = 'https://exercisedb.p.rapidapi.com/exercises';
export const categoryUrl = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
export const youtubeUrl  = 'https://youtube-search-and-download.p.rapidapi.com/video/related';

export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


  export const youTubeVideooptions = {
    method: 'GET', 
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  


export const fetchData =  async (url,options) =>{
    const response = await fetch(url,options);
    const data = await response.json();
    return data;
}
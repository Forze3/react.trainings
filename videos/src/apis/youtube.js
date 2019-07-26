import axios from 'axios'

const KEY = 'AIzaSyA56uES7Tii0V9z-rv6qN358gdMPbyamyo';


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:{
        part: 'snippet',
        maxResult: 5,
        key: KEY,
    }
});

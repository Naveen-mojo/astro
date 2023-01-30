import io from 'socket.io-client';

const socket = io('https://astro-socket.onrender.com'); //  // https://astrotalksocket.herokuapp.com

export default socket;

import axios from 'axios';

// Auto init axios client with default config
const instance = axios.create({
  validateStatus(status) {
    return status < 500; // Reject only if the status code is greater than or equal to 500
  },
});

export default instance;

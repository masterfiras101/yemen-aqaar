

import axios from "axios";

axios.defaults.withXSRFToken = true;
axios.defaults.withCredentials = true;
// axios.defaults.baseURL="http://192.168.0.162:8000/api/";
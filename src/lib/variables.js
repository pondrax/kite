const ENVIRONMENT = import.meta.env;

const ENV = {
  name : ENVIRONMENT.VITE_APP_NAME,
  description : ENVIRONMENT.VITE_APP_DESCRIPTION,
  apiUrl: ENVIRONMENT.VITE_API_URL
}

export default ENV;
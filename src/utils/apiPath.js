const BASE_URL = "http://localhost:8000";

const API_PATH = {
   AUTH: {
      REGISTER: '/api/auth/register', // Register new user or Sign-up
      LOGIN: '/api/auth/login', // Authenticate existing user and create and return JWT token
      GET_PROFILE: '/api/auth/profile', // Get logged-in user's profile
   },
   RESUME: {
      CREATE: '/api/resume', // POST - Create new resume
      GET_ALL: '/api/resume', // GET - Get all resumes of logged-in user
      GET_BY_ID: (id) => `/api/resume/${id}`, // GET - Get a specific resume by ID
      UPDATE: (id) => `/api/resume/${id}`, // PUT - Update a specific resume
      DELETE: (id) => `/api/resume/${id}`, // DELETE - Delete a resume
      UPLOAD_IMAGE: (id) => `/api/resume/${id}/delete-images`, // PUT - Upload Thumbnail and resume profile images
   },
   IMAGE: {
      UPLOAD_IMAGE: '/api/auth/upload-image'
   }
}

export {API_PATH};
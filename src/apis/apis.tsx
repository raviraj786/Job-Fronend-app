
import axios from 'axios';

export interface JobType {
  id: number;
  title: string;
  location: string;
  salary: string;
  datePost: string;
  experience: string;
  jobType: string;
  jobProfile: string;
  Qualification: string;
  Skils: string;
}

export const joblist = async (): Promise<JobType[]> => {
  try {
    const response = await axios.get('https://jobs-backend-nfkp.onrender.com/api/jobs');
    return response.data.jobs; 
  } catch (error) {
    console.error('Failed to fetch jobs', error);
    return [];
  }
};

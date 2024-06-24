import axios from 'axios';
import { TENZRO_API_BASE_URL, TENZRO_API_KEY } from './config';

axios.defaults.baseURL = TENZRO_API_BASE_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${TENZRO_API_KEY}`;

export async function createNFT(data: any) {
  const response = await axios.post('/save-nft-metadata', data);
  return response.data;
}

export async function generateContext(data: any) {
  const response = await axios.post('/generate-context', data);
  return response.data;
}

export async function getAllNFTs() {
  const response = await axios.get('/nfts');
  return response.data;
}

export async function getNFTByVid(vid: string) {
  const response = await axios.get(`/nfts/${vid}`);
  return response.data;
}

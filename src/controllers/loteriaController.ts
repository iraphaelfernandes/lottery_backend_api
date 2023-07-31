import { Request, Response } from 'express';
import axios from 'axios';

const BASE_URL = 'https://loteriascaixa-api.herokuapp.com/api';

export const getLotteries = async (_req: Request, res: Response) => {
  try {
    const response = await axios.get(BASE_URL);
    const lotteries = response.data;
    res.json(lotteries);
  } catch (error: any) {
    console.error('Error in request:', error.message);
    res.status(500).json({ error: 'Failed to fetch lotteries.' });
  }
};

export const getLotteryResults = async (req: Request, res: Response) => {
  const { lottery } = req.params;
  try {
    const response = await axios.get(`${BASE_URL}/${lottery}`);
    const results = response.data;
    res.json(results);
  } catch (error: any) {
    console.error('Error in request:', error.message);
    res.status(500).json({ error: 'Failed to fetch results for the specified lottery.' });
  }
};

export const getLotteryResultByContest = async (req: Request, res: Response) => {
  const { lottery, contest } = req.params;
  try {
    const response = await axios.get(`${BASE_URL}/${lottery}/${contest}`);
    const result = response.data;
    res.json(result);
  } catch (error: any) {
    console.error('Error in request:', error.message);
    res.status(500).json({ error: 'Failed to fetch the result for the specified lottery and contest.' });
  }
};

export const getLatestLotteryResult = async (req: Request, res: Response) => {
  const { lottery } = req.params;
  try {
    const response = await axios.get(`${BASE_URL}/${lottery}/latest`);
    const latestResult = response.data;
    res.json(latestResult);
  } catch (error: any) {
    console.error('Error in request:', error.message);
    res.status(500).json({ error: 'Failed to fetch the latest result for the specified lottery.' });
  }
};

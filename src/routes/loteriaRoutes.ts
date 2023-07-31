import express from 'express';

import {
  getLotteries,
  getLotteryResults,
  getLotteryResultByContest,
  getLatestLotteryResult,
} from '../controllers/loteriaController';

const router = express.Router();

router.get('/loterias', getLotteries);
router.get('/:lottery', getLotteryResults);
router.get('/:lottery/:contest', getLotteryResultByContest);
router.get('/:lottery/latest', getLatestLotteryResult);

export default router;

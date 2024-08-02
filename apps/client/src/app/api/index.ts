import { NextApiRequest, NextApiResponse } from 'next';
import { validate, parse } from '@telegram-apps/init-data-node';

const token = "7208041693:AAG9wpcCaLqBULzknf9XyW5K5d_SaSi7DxQ";
// const token = process.env.TOKEN_TELEGRAMM_API;

export default (req: NextApiRequest, res: NextApiResponse) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const [authType, authData] = authHeader.split(' ');

  if (authType !== 'tma') {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    validate(authData, token, { expiresIn: 3600 });
    const initData = parse(authData);
    res.json(initData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
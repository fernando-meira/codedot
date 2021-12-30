import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { name: 'Fernando', age: 27 },
    { name: 'Karolain', age: 24 },
    { name: 'Enzo', age: 4 },
  ];

  return response.json(users);
};

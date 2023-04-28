import segundoMiddleware from '../../_middleware.js';

 const handler = async (req, res) => {
  if (req.method === 'GET') {
    console.log('Middleware da rota /api/users');
    res.status(200).json({ message: 'Método permitido' });
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}

export default segundoMiddleware(handler);
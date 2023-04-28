import { NextResponse } from 'next/server';

// export function middlewareDaRota(req, res) {
//     console.log('Middleware da rota /api/users');
//     return NextResponse.next();
    
//   }
  
const withProtect = (handler) =>  {
  return async (req, res) => {
    console.log('Segundo middleware da rota /api/users');
    return res.status(401).json({
      success: false,
      message: 'Please log in to get access.',
    });
  }
}
  
  // export function terceiroMiddleware(req, res, next) {
  //   console.log('Terceiro middleware da rota /api/users');
  //   return NextResponse.next();
  // }
  
  export default withProtect;
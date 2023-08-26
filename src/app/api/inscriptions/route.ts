import { NextResponse } from 'next/server';
import prismadb from '@/lib/prisma';

export async function POST(
    req: Request,
  ) {
    try {
      const body = await req.json();
  
      const { name, email, terms } = body;
    
  
      // Vérifier ici si le user à un abonnement
      // Ou s'il a encore des billboard gratuits
  
  
      if (!email) {
        return new NextResponse("Email obligatoire", { status: 400 });
      }

      if (!terms) {
        return new NextResponse("Validation des conditions obligatoire", { status: 400 });
      }
  
  
      // Store ici le nombre de store crée pour chaque utilisateur. Dans un schema user.
  
      
      const inscription = await prismadb.inscription.create({
        data: {
          name,
          email,
          terms
        }
      });
    
      return NextResponse.json(inscription);
    } catch (error) {
      console.log('[INSCRIPTION]', error);
      return new NextResponse("Internal error", { status: 500 });
    }
  };
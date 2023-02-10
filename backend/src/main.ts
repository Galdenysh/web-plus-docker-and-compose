import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const allowlist = [
    process.env.CORS_URL_HTTP ?? 'http://localhost:3000',
    process.env.CORS_URL_HTTPS ?? 'https://localhost:3000'
  ];
  const corsOptionsDelegate = (
    req: any,
    callback: (error: Error | null, corsOptions?: CorsOptions) => void,
  ) => {
    const corsOptions = { origin: false };
    const header = req.header('Origin');

    if (header !== undefined && allowlist.indexOf(header) !== -1) {
      corsOptions.origin = true; // reflect (enable) the requested origin in the CORS response
    }

    callback(null, corsOptions); // callback expects two parameters: error and options
  };
  app.enableCors(corsOptionsDelegate);
  await app.listen(process.env.PORT ? parseInt(process.env.PORT) : 3000);
}
bootstrap();

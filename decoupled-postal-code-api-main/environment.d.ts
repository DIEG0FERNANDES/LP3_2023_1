declare global {
  namespace NodeJS {
    interface ProcessEnv {
      POSTGRES_DATABASE_URL: string;
      POSTGRES_DB: string;
      APP_PORT: string;
    }
  }
}

export {};
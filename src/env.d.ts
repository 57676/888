/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly OPENAI_API_KEY: string;
  readonly HTTPS_PROXY: string;
  readonly OPENAI_API_BASE_URL: string;
  readonly HEAD_SCRIPTS: string;
  readonly SECRET_KEY: string;
  readonly VERCEL_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

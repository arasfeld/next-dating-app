declare namespace NodeJS {
  export interface ProcessEnv {
    readonly DATABASE_URL: string
    readonly NEXTAUTH_SECRET: string
    readonly NEXTAUTH_URL: string
    readonly POSTGRES_DB: string
    readonly POSTGRES_HOST: string
    readonly POSTGRES_PASSWORD: string
    readonly POSTGRES_PORT: number
    readonly POSTGRES_USER: string
  }
}

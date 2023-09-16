# Lucia-Auth with NextJS

A test project to try out [Lucia-Auth](https://lucia-auth.com/) with [NextJS](https://nextjs.org/) App router using a **[PostgreSQL](https://www.postgresql.org/) docker container** as database.

### Usage:

First rename *.env.example* to *.env*  

Then start the postgres docker container by running this command: 
```bash
docker compose up -d  # this will start it in detached mode
pnpm install # npm install 
pnpm prisma db push # npx prisma db push
```

Now you can create users at http://localhost:3000/signup and login at http://localhost:3000/login after that. Remember this is just the bare minimum to get starting. You **MUST** secure your database with better credentials. 
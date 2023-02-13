# Node Typescript Prisma Template

## Dev Environment Installation

&nbsp;

```
cp .env.example .env
```

Change:

```
NODE_ENV=development
```

Then:

```
docker-compose up --build
```

Run:

```
npx prisma migrate dev --name init
```

inside the container

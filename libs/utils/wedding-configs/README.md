# utils-wedding-configs

# create file migrations
typeorm migration:create ./libs/utils/wedding-configs/src/migrations/migration


# run migrations
npx typeorm-ts-node-esm migration:run -d libs/utils/wedding-configs/src/lib/datasouce.ts

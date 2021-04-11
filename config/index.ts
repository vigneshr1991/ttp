export const DB_config = {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    autoLoadEntities: process.env.ORM_AUTO_LOAD_ENTITIES,
    entities: process.env.ORM_ENTITIES,
}

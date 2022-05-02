module.exports = ({ env }) => ({
    apiToken: {
        salt: env("ADMIN_JWT_SECRET"),
    },
    auth: {
        secret: env("JWT_SECRET"),
    },
});

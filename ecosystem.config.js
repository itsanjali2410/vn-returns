module.exports = {
    apps: [
        {
            name: "tripstars",
            script: "npm",
            args: "start",
            cwd: "./",
            exec_mode: "fork",
            instances: 2,
            env: {
                NODE_ENV: "development",
                PORT: 4040
            },
            env_production: {
                NODE_ENV: "production",
                PORT: 4040
            },
            watch: false,
            max_memory_restart: "500M",
            error_file: "./logs/err.log",
            out_file: "./logs/out.log",
            log_date_format: "YYYY-MM-DD HH:mm:ss",
        },
    ],
};

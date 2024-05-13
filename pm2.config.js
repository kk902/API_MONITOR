module.exports = {
    apps: [
        {
            name: "SAM",
            script: "./server.js",
            error_file: "./logs/error.log",
            out_file: "./logs/out.log",
            log_date_format: "YYYY-MM-DD HH:mm:ss:SSS",
            max_memory_restart: "500M",
            env: {
                NODE_ENV: "development",
                PORT: 4001,
                MONGODB_URL: "mongodb://localhost",
                ROBOT_HOOK: "",
            },
            watch: [
                "config",
                "helper",
                "schedule"
            ],
            ignore_watch: [
                "node_modules",
                "logs",
                "public"
            ],
            watch_options: {
                usePolling: true,
                followSymlinks: false
            }
        }
    ]
}

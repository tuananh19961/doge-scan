module.exports = {
    apps : [
      {
        name: 'node-scan', // application name 
        script: 'app.js', // script path to pm2 start
        instances: 4, // number process of application
        autorestart: true, //auto restart if app crashes
        watch: false,
        max_memory_restart: '4G', // restart if it exceeds the amount of memory specified
      }
    ],
  };
  
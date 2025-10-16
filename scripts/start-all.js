#!/usr/bin/env node

const { spawn, exec } = require('child_process');
const path = require('path');

// Nx Multi-Zone - Start All Applications (Node.js version)
// Cross-platform script to start all applications

console.log('🚀 Starting Nx Multi-Zone Applications...');
console.log('==========================================');

const apps = [
  { name: 'shell-ui', port: 3000, color: 'blue' },
  { name: 'accounting', port: 3001, color: 'green' },
  { name: 'hr', port: 3002, color: 'purple' },
  { name: 'crm', port: 3003, color: 'orange' }
];

const processes = [];

// Function to kill process on a specific port (cross-platform)
function killPort(port) {
  return new Promise((resolve) => {
    const isWindows = process.platform === 'win32';
    const isMac = process.platform === 'darwin';
    
    let command;
    if (isWindows) {
      command = `netstat -ano | findstr :${port}`;
    } else if (isMac) {
      command = `lsof -ti:${port}`;
    } else {
      command = `lsof -ti:${port}`;
    }

    exec(command, (error, stdout, stderr) => {
      if (stdout.trim()) {
        const pids = stdout.trim().split('\n').filter(pid => pid.trim());
        
        if (pids.length > 0) {
          console.log(`🔄 Killing process on port ${port}...`);
          
          pids.forEach(pid => {
            const killCommand = isWindows 
              ? `taskkill /PID ${pid} /F`
              : `kill -9 ${pid}`;
              
            exec(killCommand, (killError) => {
              if (!killError) {
                console.log(`✅ Killed process ${pid} on port ${port}`);
              }
            });
          });
          
          setTimeout(() => resolve(), 1000);
        } else {
          console.log(`✅ Port ${port} is already free`);
          resolve();
        }
      } else {
        console.log(`✅ Port ${port} is already free`);
        resolve();
      }
    });
  });
}

// Function to start an app
function startApp(app) {
  console.log(`Starting ${app.name} on port ${app.port}...`);
  
  const child = spawn('npx', ['nx', 'serve', app.name, '--port', app.port.toString()], {
    stdio: 'pipe',
    shell: true
  });

  processes.push({
    name: app.name,
    port: app.port,
    process: child
  });

  child.stdout.on('data', (data) => {
    const output = data.toString();
    if (output.includes('Local:') || output.includes('ready')) {
      console.log(`✅ ${app.name} started successfully on http://localhost:${app.port}`);
    }
  });

  child.stderr.on('data', (data) => {
    const error = data.toString();
    if (error.includes('Error') || error.includes('Failed')) {
      console.log(`❌ Error starting ${app.name}: ${error}`);
    }
  });

  child.on('close', (code) => {
    console.log(`🛑 ${app.name} process exited with code ${code}`);
  });

  return child;
}

// Kill ports and start applications
async function startAllApps() {
  console.log('🧹 Cleaning up ports...');
  console.log('=====================');
  
  // Kill all required ports
  for (const app of apps) {
    await killPort(app.port);
  }
  
  console.log('');
  console.log('🚀 Starting applications...');
  console.log('==========================');
  
  // Start all applications
  apps.forEach(app => {
    setTimeout(() => startApp(app), 1000 * apps.indexOf(app));
  });

  // Display information after a delay
  setTimeout(() => {
    console.log('');
    console.log('🎉 All applications are starting up!');
    console.log('');
    console.log('📱 Access your applications:');
    apps.forEach(app => {
      console.log(`   • ${app.name.charAt(0).toUpperCase() + app.name.slice(1).replace('-', ' ')}:   http://localhost:${app.port}`);
    });
    console.log('');
    console.log('🔄 Multi-Zone Composition (via Shell UI):');
    console.log('   • http://localhost:3000/accounting');
    console.log('   • http://localhost:3000/hr');
    console.log('   • http://localhost:3000/crm');
    console.log('');
    console.log('⏹️  Press Ctrl+C to stop all applications');
    console.log('');
  }, 3000);
}

// Start the process
startAllApps();

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n🛑 Stopping all applications...');
  
  processes.forEach(({ name, process: child }) => {
    console.log(`Stopping ${name}...`);
    child.kill('SIGTERM');
  });

  setTimeout(() => {
    processes.forEach(({ name, process: child }) => {
      if (!child.killed) {
        console.log(`Force stopping ${name}...`);
        child.kill('SIGKILL');
      }
    });
    console.log('✨ All applications stopped!');
    process.exit(0);
  }, 2000);
});

// Keep the script running
process.on('exit', () => {
  console.log('Script terminated.');
});

#!/bin/bash

# Nx Multi-Zone - Stop All Applications Script
# This script stops all running applications and cleans up ports

echo "🛑 Stopping Nx Multi-Zone Applications..."
echo "========================================="

# Function to kill process on a specific port
kill_port() {
    local port=$1
    local pid=$(lsof -ti:$port 2>/dev/null)
    
    if [ ! -z "$pid" ]; then
        echo "🔄 Killing process on port $port (PID: $pid)..."
        kill -9 $pid 2>/dev/null
        sleep 1
        
        # Verify the port is free
        if lsof -ti:$port >/dev/null 2>&1; then
            echo "⚠️  Port $port still in use, trying force kill..."
            pkill -f ":$port" 2>/dev/null
            sleep 1
        fi
        
        if ! lsof -ti:$port >/dev/null 2>&1; then
            echo "✅ Port $port is now free"
        else
            echo "❌ Failed to free port $port"
        fi
    else
        echo "✅ Port $port is already free"
    fi
}

# Check if PID file exists and stop processes
if [ -f .pids ]; then
    echo "📋 Stopping tracked processes..."
    echo "==============================="
    
    # Read PIDs and stop each application
    while IFS= read -r line; do
        if [[ $line == *"PID:"* ]]; then
            app_name=$(echo $line | cut -d' ' -f1)
            pid=$(echo $line | cut -d' ' -f3)
            
            if kill -0 $pid 2>/dev/null; then
                echo "Stopping $app_name (PID: $pid)..."
                kill $pid
                sleep 1
                
                # Force kill if still running
                if kill -0 $pid 2>/dev/null; then
                    echo "Force stopping $app_name..."
                    kill -9 $pid
                fi
                
                echo "✅ $app_name stopped"
            else
                echo "⚠️  $app_name (PID: $pid) was not running"
            fi
        fi
    done < .pids
    
    # Clean up PID file
    rm -f .pids
else
    echo "⚠️  No PID file found. Checking ports directly..."
fi

echo ""
echo "🧹 Cleaning up ports..."
echo "======================"
kill_port 3000
kill_port 3001
kill_port 3002
kill_port 3003

echo ""
echo "🧹 Cleaning up any remaining Nx processes..."
pkill -f "nx serve" 2>/dev/null || true

echo ""
echo "🎉 All applications have been stopped!"
echo "✨ Cleanup complete!"

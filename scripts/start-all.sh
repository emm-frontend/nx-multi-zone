#!/bin/bash

# Nx Multi-Zone - Start All Applications Script
# This script kills processes on required ports and starts all applications in parallel

echo "🚀 Starting Nx Multi-Zone Applications..."
echo "=========================================="

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

# Function to start an app
start_app() {
    local app_name=$1
    local port=$2
    local color=$3
    
    echo "Starting $app_name on port $port..."
    npx nx serve $app_name --port $port &
    
    # Store the PID
    local pid=$!
    echo "$app_name PID: $pid" >> .pids
    
    # Wait a moment for the app to start
    sleep 3
    
    if kill -0 $pid 2>/dev/null; then
        echo "✅ $app_name started successfully on http://localhost:$port"
    else
        echo "❌ Failed to start $app_name"
    fi
}

# Clean up any existing PID file
rm -f .pids

# Kill any existing processes on our required ports
echo "🧹 Cleaning up ports..."
echo "======================"
kill_port 3000
kill_port 3001
kill_port 3002
kill_port 3003

echo ""
echo "🚀 Starting applications..."
echo "=========================="

# Start all applications
start_app "shell-ui" "3000" "blue"
start_app "accounting" "3001" "green"
start_app "hr" "3002" "purple"
start_app "crm" "3003" "orange"

echo ""
echo "🎉 All applications are starting up!"
echo ""
echo "📱 Access your applications:"
echo "   • Shell UI:     http://localhost:3000"
echo "   • Accounting:   http://localhost:3001"
echo "   • HR:          http://localhost:3002"
echo "   • CRM:         http://localhost:3003"
echo ""
echo "🔄 Multi-Zone Composition (via Shell UI):"
echo "   • http://localhost:3000/accounting"
echo "   • http://localhost:3000/hr"
echo "   • http://localhost:3000/crm"
echo ""
echo "⏹️  To stop all applications, run: ./scripts/stop-all.sh"
echo "📋 To view running processes: cat .pids"
echo ""
echo "Press Ctrl+C to stop this script (applications will continue running)"
echo ""

# Wait for user interrupt
trap 'echo ""; echo "Script stopped. Applications are still running."; echo "Use ./scripts/stop-all.sh to stop all applications."; exit 0' INT

# Keep the script running
while true; do
    sleep 1
done

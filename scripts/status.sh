#!/bin/bash

# Nx Multi-Zone - Status Check Script
# This script checks the status of all applications

echo "📊 Nx Multi-Zone Applications Status"
echo "===================================="

# Function to check app status
check_app() {
    local app_name=$1
    local port=$2
    
    if curl -s http://localhost:$port > /dev/null 2>&1; then
        echo "✅ $app_name (Port $port) - Running"
    else
        echo "❌ $app_name (Port $port) - Not running"
    fi
}

echo ""
echo "🔍 Checking application status..."
echo ""

check_app "Shell UI" "3000"
check_app "Accounting" "3001"
check_app "HR" "3002"
check_app "CRM" "3003"

echo ""
echo "📋 Process Information:"
echo ""

# Check for running nx processes
nx_processes=$(ps aux | grep "nx serve" | grep -v grep | wc -l)
echo "Nx processes running: $nx_processes"

if [ $nx_processes -gt 0 ]; then
    echo ""
    echo "Running Nx processes:"
    ps aux | grep "nx serve" | grep -v grep | awk '{print "  • PID " $2 " - " $11 " " $12 " " $13}'
fi

echo ""
echo "🌐 Quick Access Links:"
echo "   • Shell UI:     http://localhost:3000"
echo "   • Accounting:   http://localhost:3001"
echo "   • HR:          http://localhost:3002"
echo "   • CRM:         http://localhost:3003"
echo ""

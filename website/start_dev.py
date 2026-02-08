#!/usr/bin/env python3
"""
Startup script for Kindness website development server.
Starts Next.js dev server and optional Prisma Studio.
"""

import subprocess
import sys
import os
import signal
import time
import platform
from pathlib import Path
from typing import List, Optional

# Detect Windows
IS_WINDOWS = platform.system() == "Windows"

# Colors for terminal output
class Colors:
    GREEN = '\033[92m'
    BLUE = '\033[94m'
    YELLOW = '\033[93m'
    RED = '\033[91m'
    CYAN = '\033[96m'
    RESET = '\033[0m'
    BOLD = '\033[1m'

# Process handlers
processes: List[subprocess.Popen] = []

def print_header():
    """Print startup header."""
    print(f"\n{Colors.BOLD}{Colors.CYAN}{'='*60}")
    print("  Kindness Website - Development Server")
    print(f"{'='*60}{Colors.RESET}\n")

def print_info(message: str, color: str = Colors.CYAN):
    """Print colored info message."""
    print(f"{color}ℹ {message}{Colors.RESET}")

def print_success(message: str):
    """Print success message."""
    print(f"{Colors.GREEN}✓ {message}{Colors.RESET}")

def print_error(message: str):
    """Print error message."""
    print(f"{Colors.RED}✗ {message}{Colors.RESET}")

def print_warning(message: str):
    """Print warning message."""
    print(f"{Colors.YELLOW}⚠ {message}{Colors.RESET}")

def check_prerequisites():
    """Check if required tools are installed."""
    print_info("Checking prerequisites...")
    
    # Use shell=True on Windows to properly resolve PATH
    shell_mode = IS_WINDOWS
    
    # Check Node.js
    try:
        result = subprocess.run(
            ["node", "--version"],
            capture_output=True,
            text=True,
            check=True,
            shell=shell_mode
        )
        print_success(f"Node.js: {result.stdout.strip()}")
    except (subprocess.CalledProcessError, FileNotFoundError):
        print_error("Node.js is not installed or not in PATH")
        return False
    
    # Check npm - try npm.cmd on Windows first
    npm_cmd = "npm.cmd" if IS_WINDOWS else "npm"
    npm_found = False
    
    try:
        result = subprocess.run(
            [npm_cmd, "--version"],
            capture_output=True,
            text=True,
            check=True,
            shell=shell_mode
        )
        print_success(f"npm: {result.stdout.strip()}")
        npm_found = True
    except (subprocess.CalledProcessError, FileNotFoundError):
        # Try regular npm if npm.cmd failed
        try:
            result = subprocess.run(
                ["npm", "--version"],
                capture_output=True,
                text=True,
                check=True,
                shell=shell_mode
            )
            print_success(f"npm: {result.stdout.strip()}")
            npm_found = True
        except (subprocess.CalledProcessError, FileNotFoundError):
            pass
    
    if not npm_found:
        print_error("npm is not installed or not in PATH")
        return False
    
    # Check if node_modules exists
    if not Path("node_modules").exists():
        print_warning("node_modules not found. Installing dependencies...")
        try:
            npm_cmd = "npm.cmd" if IS_WINDOWS else "npm"
            subprocess.run([npm_cmd, "install"], check=True, shell=shell_mode)
            print_success("Dependencies installed")
        except subprocess.CalledProcessError:
            print_error("Failed to install dependencies")
            return False
    
    # Check if .env exists
    if not Path(".env").exists():
        print_warning(".env file not found. Make sure DATABASE_URL is set.")
    
    return True

def start_nextjs_dev():
    """Start Next.js development server."""
    print_info("Starting Next.js dev server...", Colors.BLUE)
    
    # Use npm run dev
    npm_cmd = "npm.cmd" if IS_WINDOWS else "npm"
    process = subprocess.Popen(
        [npm_cmd, "run", "dev"],
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
        bufsize=1,
        universal_newlines=True,
        shell=IS_WINDOWS
    )
    
    processes.append(process)
    
    # Print output in real-time
    def print_output():
        for line in process.stdout:
            print(f"{Colors.BLUE}[Next.js] {line.rstrip()}{Colors.RESET}")
    
    import threading
    thread = threading.Thread(target=print_output, daemon=True)
    thread.start()
    
    # Wait a moment to see if it starts successfully
    time.sleep(3)
    
    if process.poll() is not None:
        print_error("Next.js dev server failed to start")
        return False
    
    print_success("Next.js dev server started on http://localhost:3000")
    return True

def start_prisma_studio():
    """Start Prisma Studio (optional)."""
    print_info("Starting Prisma Studio...", Colors.GREEN)
    
    npx_cmd = "npx.cmd" if IS_WINDOWS else "npx"
    process = subprocess.Popen(
        [npx_cmd, "prisma", "studio"],
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
        bufsize=1,
        universal_newlines=True,
        shell=IS_WINDOWS
    )
    
    processes.append(process)
    
    # Print output in real-time
    def print_output():
        for line in process.stdout:
            print(f"{Colors.GREEN}[Prisma] {line.rstrip()}{Colors.RESET}")
    
    import threading
    thread = threading.Thread(target=print_output, daemon=True)
    thread.start()
    
    # Wait a moment to see if it starts successfully
    time.sleep(3)
    
    if process.poll() is not None:
        print_warning("Prisma Studio may have failed to start")
        return False
    
    print_success("Prisma Studio started on http://localhost:5555")
    return True

def cleanup(signum=None, frame=None):
    """Cleanup function to stop all processes."""
    print(f"\n{Colors.YELLOW}Shutting down services...{Colors.RESET}")
    
    for process in processes:
        try:
            if process.poll() is None:  # Process is still running
                process.terminate()
                try:
                    process.wait(timeout=5)
                except subprocess.TimeoutExpired:
                    process.kill()
        except Exception as e:
            print_error(f"Error stopping process: {e}")
    
    print_success("All services stopped")
    sys.exit(0)

def main():
    """Main function."""
    # Change to script directory
    script_dir = Path(__file__).parent.absolute()
    os.chdir(script_dir)
    
    print_header()
    
    # Check prerequisites
    if not check_prerequisites():
        print_error("Prerequisites check failed. Please fix the issues above.")
        sys.exit(1)
    
    print()
    
    # Start Next.js dev server
    if not start_nextjs_dev():
        cleanup()
        sys.exit(1)
    
    print()
    
    # Ask if user wants Prisma Studio
    try:
        response = input(f"{Colors.CYAN}Start Prisma Studio? (y/n, default: n): {Colors.RESET}").strip().lower()
        if response == 'y' or response == 'yes':
            print()
            start_prisma_studio()
            print()
    except KeyboardInterrupt:
        cleanup()
        sys.exit(0)
    
    # Register signal handlers
    signal.signal(signal.SIGINT, cleanup)
    signal.signal(signal.SIGTERM, cleanup)
    
    # Print helpful info
    print(f"\n{Colors.BOLD}{Colors.GREEN}{'='*60}")
    print("  Development servers are running!")
    print(f"{'='*60}{Colors.RESET}\n")
    print(f"{Colors.CYAN}Next.js Dev Server:{Colors.RESET} http://localhost:3000")
    if len(processes) > 1:
        print(f"{Colors.CYAN}Prisma Studio:{Colors.RESET} http://localhost:5555")
    print(f"\n{Colors.YELLOW}Press Ctrl+C to stop all services{Colors.RESET}\n")
    
    # Keep script running
    try:
        while True:
            # Check if processes are still running
            for i, process in enumerate(processes):
                if process.poll() is not None:
                    print_error(f"Process {i+1} has stopped unexpectedly")
                    cleanup()
                    sys.exit(1)
            time.sleep(1)
    except KeyboardInterrupt:
        cleanup()

if __name__ == "__main__":
    main()

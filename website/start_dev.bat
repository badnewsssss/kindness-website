@echo off
REM Kindness Website - Dev Server Launcher
REM Double-click to start everything

cd /d "%~dp0"

echo.
echo   Kindness Website - Starting Dev Server...
echo.

REM Install deps if missing
if not exist "node_modules" (
    echo   Installing dependencies...
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo   [ERROR] npm install failed
        pause
        exit /b 1
    )
)

REM Open browser after a short delay (gives server time to start)
start "" cmd /c "timeout /t 4 /nobreak >nul && start http://localhost:3000"

REM Start dev server (stays open in this window)
echo   Server starting at http://localhost:3000
echo   Press Ctrl+C to stop
echo.
npm run dev

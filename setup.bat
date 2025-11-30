@echo off
echo Installing GSAP Next.js Project...
echo.

echo Step 1: Installing dependencies...
call npm install

if %errorlevel% neq 0 (
    echo Error: npm install failed
    exit /b 1
)

echo.
echo ✓ Dependencies installed successfully!
echo.
echo Step 2: Project structure is ready
echo.
echo To start development:
echo   npm run dev
echo.
echo Then open http://localhost:3000 in your browser
echo.
echo Project initialized! 🚀

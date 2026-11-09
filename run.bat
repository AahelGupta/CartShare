@echo off
echo ===================================================
echo   CartShare - Collaborative Shopping Ecosystem
echo   Launching local server...
echo ===================================================
echo.
python -m http.server 3000 --directory . || npx serve -p 3000 .
pause

#!/bin/bash

# GSAP Next.js Project Setup Script
# This script sets up the project with all dependencies

echo "🚀 Setting up GSAP Next.js Project..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✓ Node.js version: $(node -v)"
echo "✓ npm version: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✓ Dependencies installed"
echo ""

# Create .env.local from .env.example
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local from .env.example..."
    cp .env.example .env.local
    echo "✓ Created .env.local"
else
    echo "✓ .env.local already exists"
fi

echo ""
echo "✅ Setup complete!"
echo ""
echo "📝 Next steps:"
echo "   1. npm run dev       - Start development server"
echo "   2. Open http://localhost:3000"
echo ""
echo "📚 Documentation:"
echo "   - README.md for overview"
echo "   - CONVERSION_GUIDE.md for migration details"
echo "   - ANIMATION_EXAMPLES.md for animation patterns"
echo ""

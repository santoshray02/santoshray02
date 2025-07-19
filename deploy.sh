#!/bin/bash

echo "🚀 Building profile content..."
npm run build

echo "📝 Updating GitHub profile..."
git add README.md
git commit -m "Update profile content"
git push

echo "🌐 Deploying to Firebase..."
firebase deploy --only hosting

echo "✅ Deployment complete!"
echo "- GitHub profile: https://github.com/santoshray02"
echo "- Website: https://santoshray.in/"
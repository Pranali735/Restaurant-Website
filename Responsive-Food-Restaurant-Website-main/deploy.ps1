git init
git add .
git commit -m "First commit to GitHub"
git branch -M main
git remote remove origin 2>$null
git remote add origin https://github.com/Pranali735/Restaurant-Website.git
git push -u origin main

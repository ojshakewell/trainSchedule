git add .
read -p "Commit description: " desc 
git commit -m "$desc"
git push origin master
echo Git got done.
git clone <repository URL>
cd cloned-repo
git checkout -b __test__
touch newFile
nano newFile.txt
git add newFile.txt
status=$(git status)
echo "$status"

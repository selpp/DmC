cd ./packages/dmc_website
version=`grep '^  \"version\": ' package.json | sed 's/.*\"\\([0-9\\.]*\\)\".*/\\1/'`
echo "Website Version $version"
cd dist
git diff --exit-code > /dev/null
res=$?

if [ $res -eq 1 ]
then
	git add .
	git commit -m "Increased version to $version"
	git push origin master
	exit 0
fi
echo "Nothing to do"

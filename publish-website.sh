cd ./packages/dmc_website
version=`grep '^  \"version\": ' package.json | sed 's/.*\"\\([0-9\\.]*\\)\".*/\\1/'`
echo "Website Version $version"
cd dist

if [ `git diff --exit-code` ]; then
	git add .
	git commit -m "Increased version to $version"
	git push origin master
	exit 0
fi
echo "Nothing to do"

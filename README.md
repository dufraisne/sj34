[![forthebadge](http://forthebadge.com/images/badges/kinda-sfw.svg)](http://forthebadge.com)[![forthebadge](http://forthebadge.com/images/badges/its-not-a-lie-if-you-believe-it.svg)](http://forthebadge.com)

## About

Project designed as a response to [SJ-34](https://www.congress.gov/bill/115th-congress/senate-joint-resolution/34/actions).
Generate search history that includes pornographic terms and the [names on this list](http://www.theverge.com/2017/3/29/15100620/congress-fcc-isp-web-browsing-privacy-fire-sale).
If they want it sold, by all means, enjoy the search history.


## Deployment

The below will run through all the setup for the project, start a selenium instance, and run the app once.
```
$ ./app/setup.sh
```

If you'd like to run it after having set up:
```
$ grunt resist
```

## Arch

Project makes use of the following in order to spawn browser instances and perform Google Searches,
without the need of a google API key:
Node
CucumberJS
Protractor
Selenium

Feel free to contribute additional phrases to the adultDict.    
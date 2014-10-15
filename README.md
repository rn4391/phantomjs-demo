Currently works for http://www.ixigo.com
Start up the server using 'node server.js' . 
Access a page in the browser using http://localhost:7890/hotels-in-new-delhi-lp-1140454
This internally hits http://www.ixigo.com/hotels-in-new-delhi-lp-1140454 and gives the HTML snapshot
Use some caching layer over this like varnish to prevent snapshot generation everytime for the same URL because that is an expensive process.


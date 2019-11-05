# image-reader #

This is a web application project allowing to upload and display *.jpeg files.

* Used tools: React.

## Features available ##
* Upload file by drag&drop or file input,
* File size and type validation,
* Displaying: 
  * photo preview, 
  * file name, 
  * image size,
  * GPS coordinates (if available)
* Removing image form gallery.
* Dispaying Google Maps:
  ### In order to enable integration with Google Maps, please enter your Google-API key in Map Component (Map.js) in GoogleApiWrapper export. ###
* Marking images on the map on a basis of GPS coordinates,
* Removing markers from the map when image is deleted from gallery.

Online demo: https://dorotadab.github.io/image-reader

------------------

##  Steps to run the application ##

### `npm install`
### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
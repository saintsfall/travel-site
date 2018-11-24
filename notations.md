# Responsive Images
## Aproch for Art Design and Croping Situations

_In the example bellow it is used an aproach that have the initial image as a small image_
_All the code is wraped on a picture tag (probaly for semantics) and the <source> tag acts injecting a media query, so that the image is ready for multiples breakpoints on the html_
_
```html
    <picture>
        <source srcset='/images/medium-image.jpg' media="(min-width: 530px)">
        <source srcset='/images/large-image.jpg' media="(min-width: 800px)">
        <img src="/images/small-image.jpg" alt="Initial image, mobile first aproach">
    </picture>
```
<hr>

## Aproach for Image Resolution and File Size Situation

_In the example bellow there is no need for the picture element, all the possible files are inserted on a single img element._
_Is a bit noisy solution, but once all its done the browser itself will judge witch image should be displayed according with the information provided._

```html
    <img srcset="/images/small-image.jpg 530w, /images/medium-image.jpg 800w, /images/large-image.jpg 1200w" alt='All the images was set, the w stands for wide'> 
```

Note that, on this aproach, some browsers, if started on large screen sizes can load a large image and don't switch to smaller images if you deacrease its screen size. This is not an error, its simply the browser interpretation that since a large image fits well on a big screen that it if fit well on a smaller.
The recommended is to start from small and build up the sizes, so the browser's inteligence don't stand in the way.
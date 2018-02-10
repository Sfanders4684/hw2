let handleImageClick = function() {

  let theImage = jQuery(event.target)
  console.log("Got a click event",event)
  let srcValue = theImage.attr("src")
  console.log(srcValue)

  jQuery("#main-image").attr("src",srcValue)

}

jQuery("img").on("click", handleImageClick)

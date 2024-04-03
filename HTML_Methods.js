//Using document.write() after a document is loaded, deletes all existing HTML!!!
function overWriteWebPage() {
  document.write("<div> Some Data! </div>");
  document.write("<div> Some MORE Data! </div>");
}
////////////////////////////////
//Some MORE Data!
//
////////////////////////////////

function addToWebPage() {
  document.body.appendChild("<div> Some Data! </div>");
  document.body.appendChild("<div> Some MORE Data! </div>");
}
////////////////////////////////
// Some Data!
// Some MORE Data!
//
////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////

//Refresh Web Page
location.reload();

//Delete node element by ID
document.getElementById("myElement").remove();

//Delete node element by class
document.querySelector(".yourClassName").remove();

//smooth & instant scroll transition
window.scroll({
  top: 0,
  left: 0,
  behavior: "smooth",
});
//OR
window.scrollTo(0, 0);

//great example of requestAnimationFrame() by button
let isAutoScrolling = false;
document.getElementById("scroll").onclick = function () {
  isAutoScrolling
    ? (isAutoScrolling = false)
    : ((isAutoScrolling = true),
      (function autoScroll() {
        window.scrollBy(0, 1); /*Adjust scrolling (direction:0, speed:1)*/
        isAutoScrolling && requestAnimationFrame(autoScroll);
      })());
};

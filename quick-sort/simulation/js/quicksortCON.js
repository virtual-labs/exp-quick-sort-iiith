//Comments Dictionary
comments = {
  av_c1:
    "When we start the partition function, pivot value 60 has been moved to the right most position.",
  av_c2: "The left and right bounds are set to positions 0 and 8, respectively",
  av_c3:
    "Now move left bound rightward as long as it is at a value less than 60. Since it starts on 76 which is greater than 60, there is no movement of the left bound at this time.",
  av_c4:
    "Likewise, the right bound starts at a value less than 60, so it does not move.",
  av_c5: "Swap the values at the bounds.",
  av_c6:
    "Now move the left bound to the right as long as it is at a value less than the pivot.",
  av_c7a: "Left bound moves to next index.",
  av_c7b: "Left bound moves again to next index.",
  av_c8: "Now we are at 88, which is greater than or equal to 60.",
  av_c9:
    "Now we move the right bound to the left until it reaches a value less than 60.",
  av_c7c: "Right bound moves to previous index.",
  av_c7d: "Right bound moves again to previous index.",
  av_c10: "Now the right bound is at 42, which is less than 60.",
  av_c11: "Swap.",
  av_c12: "Once again, move the left bound to the right.",
  av_c13: "Left bound is at 85, which is bigger than the pivot value.",
  av_c14:
    "Move the right bound to the left until we reach a value that is smaller than 60.",
  av_c7e: "Right bound moves to left bound position.",
  av_c15:
    "Note that the right bound has crossed over the left bound. So partition is done.",
  av_c16:
    "Since the left bound has reached position 4, this is the value returned by the partition function.",
};

commentsQueue = [];

const displayComment = function (str) {
  $("#ins").html(str);
};

/*global ODSA */
$(document).ready(function () {
  "use strict";
  var av_name = "quicksortCON";
  var interpret = ODSA.UTILS.loadConfig({ av_name: av_name }).interpreter;

  var theArray = [76, 6, 57, 88, 85, 42, 83, 73, 48, 60];
  var av = new JSAV(av_name);
  // Create an array object under control of JSAV library
  var arr = av.ds.array(theArray, { indexed: true });
  // ...existing code...

  // Slide 1
  commentsQueue.push(comments["av_c1"]);
  arr.addClass(9, "selected-pivot"); // Use selected-pivot legend
  av.displayInit();

  // Slide 2
  arr.removeClass(9, "selected-pivot");
  arr.setLeftArrow(0);
  arr.setRightArrow(8);
  arr.addClass(0, "left");
  arr.addClass(8, "right");
  commentsQueue.push(comments["av_c2"]);
  av.step();

  // Slide 3
  //av.umsg(interpret("av_c3"));
  commentsQueue.push(comments["av_c3"]);
  av.step();

  // Slide 4
  //av.umsg(interpret("av_c4"));
  commentsQueue.push(comments["av_c4"]);
  av.step();

  // Slide 5
  arr.swap(0, 8);
  arr.addClass(0, "swapping");
  arr.addClass(8, "swapping");
  commentsQueue.push(comments["av_c5"]);
  av.step();
  arr.removeClass(0, "swapping");
  arr.removeClass(8, "swapping");

  // Slide 6
  //av.umsg(interpret("av_c6"));
  commentsQueue.push(comments["av_c6"]);
  av.step();

  // Slide 7
  //av.umsg(interpret("av_c7"));
  commentsQueue.push(comments["av_c7a"]);
  arr.clearLeftArrow(0);
  arr.setLeftArrow(1);
  arr.removeClass(0, "left");
  arr.addClass(1, "left");
  if (arr._leftArrowIndex === 1 && arr._rightArrowIndex === 1) {
    arr.addClass(1, "merge");
  }
  av.step();

  // Slide 8
  //av.umsg(interpret("av_c7"));
  commentsQueue.push(comments["av_c7b"]);
  arr.clearLeftArrow(1);
  arr.setLeftArrow(2);
  arr.removeClass(1, "left");
  arr.addClass(2, "left");
  if (arr._leftArrowIndex === 2 && arr._rightArrowIndex === 2) {
    arr.addClass(2, "merge");
  }
  av.step();

  // Slide 9
  arr.clearLeftArrow(2);
  arr.setLeftArrow(3);
  arr.removeClass(2, "left");
  arr.addClass(3, "left");
  if (arr._leftArrowIndex === 3 && arr._rightArrowIndex === 3) {
    arr.addClass(3, "merge");
  }
  commentsQueue.push(comments["av_c8"]);
  av.step();

  // Slide 10
  //av.umsg(interpret("av_c9"));
  commentsQueue.push(comments["av_c9"]);
  av.step();

  // Slide 11
  //av.umsg(interpret("av_c7"));
  commentsQueue.push(comments["av_c7c"]);
  arr.clearRightArrow(8);
  arr.setRightArrow(7);
  arr.removeClass(8, "right");
  arr.addClass(7, "right");
  av.step();

  // Slide 12
  //av.umsg(interpret("av_c7"));
  commentsQueue.push(comments["av_c7d"]);
  arr.clearRightArrow(7);
  arr.setRightArrow(6);
  arr.removeClass(7, "right");
  arr.addClass(6, "right");
  av.step();

  // Slide 13
  arr.clearRightArrow(6);
  arr.setRightArrow(5);
  arr.removeClass(6, "right");
  arr.addClass(5, "right");
  commentsQueue.push(comments["av_c10"]);
  av.step();

  // Slide 14
  //av.umsg(interpret("av_c11"));
  commentsQueue.push(comments["av_c11"]);
  arr.addClass(3, "swapping");
  arr.addClass(5, "swapping");
  arr.swap(3, 5);
  av.step();
  arr.removeClass(3, "swapping");
  arr.removeClass(5, "swapping");

  // Slide 15
  //av.umsg(interpret("av_c12"));
  commentsQueue.push(comments["av_c12"]);
  av.step();

  // Slide 16
  arr.clearLeftArrow(3);
  arr.setLeftArrow(4);
  arr.removeClass(3, "left");
  arr.addClass(4, "left");
  if (arr._leftArrowIndex === 4 && arr._rightArrowIndex === 4) {
    arr.addClass(4, "merge");
  }
  commentsQueue.push(comments["av_c13"]);
  av.step();

  // Slide 17
  //av.umsg(interpret("av_c14"));
  commentsQueue.push(comments["av_c14"]);
  av.step();

  // Slide 18
  //av.umsg(interpret("av_c7"));
  commentsQueue.push(comments["av_c7e"]);
  arr.clearRightArrow(5);
  arr.setRightArrow(4);
  arr.removeClass(5, "right");
  arr.addClass(4, "right");
  if (arr._leftArrowIndex === 4 && arr._rightArrowIndex === 4) {
    arr.addClass(4, "merge");
  }
  av.step();

  // Slide 19
  arr.clearRightArrow(4);
  arr.setRightArrow(3);
  arr.removeClass(4, "right");
  arr.addClass(3, "right");
  commentsQueue.push(comments["av_c15"]);
  av.step();

  // Slide 20
  //av.umsg(interpret("av_c16"));
  commentsQueue.push(comments["av_c16"]);
  // Show selected-pivot at the end
  arr.addClass(9, "selected-pivot");
  av.recorded();
});

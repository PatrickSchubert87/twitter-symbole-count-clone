(function () {
  // Global Variables
  var text = document.querySelector("#text");

  var counterOutput = document.querySelector(".counter-output");
  var maxLength = 20;

  /**
   * Third Approach
   * - This approach uses only one eventListeners with one function call
   * - The events are called with a froEach Array methode
   * - This is a better approach because now it's DRY (Don't Repeat Yourself) and uses only one function
   * - Also this approach uses a slice methode to exclude characters after maxLength is reached
   */

  ['keyup', 'keydown', 'change'].forEach(e => {
    text.addEventListener(e, textCounter);
  });

  function textCounter() {
    var count = text.value.length;
    var counting = maxLength - count;
    if (count > maxLength) {
      // text.value = text.value.substring(0, maxLength);
      text.value = text.value.slice(0, maxLength);
      counterOutput.classList.add("text-color-red");
    } else {
      counterOutput.classList.remove("text-color-red");
    }
    counterOutput.textContent = `Your text includes ${text.value.length} of ${maxLength} characters. You have ${counting} characters left`;
  }
})();


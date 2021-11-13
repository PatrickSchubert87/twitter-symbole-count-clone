(function () {
  // Global Variables
  var text = document.querySelector("#text");

  var counterOutput = document.querySelector(".counter-output");
  var maxLength = 20;

  /**
   * Second Approach
   * - This approach uses too multiple eventListeners with one function
   * - This is a better approach because it's not DRY (Don't Repeat Yourself) and uses only one function
   */

  text.addEventListener('change', textCounter);
  text.addEventListener('keydown', textCounter);
  text.addEventListener('keyup', textCounter);

  function textCounter() {
    var count = text.value.length;
    var counting = maxLength - count;
    if (count > maxLength) {
      text.value = text.value.substring(0, maxLength);
      counterOutput.classList.add("text-color-red");
    } else {
      counterOutput.classList.remove("text-color-red");
    }
    counterOutput.textContent = `Your text includes ${text.value.length} of ${maxLength} characters. You have ${counting} characters left`;
  }
})();


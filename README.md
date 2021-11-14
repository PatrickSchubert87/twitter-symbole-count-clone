# twitter-symbole-count-clone

## First approach

The first approache uses: 

- an IIFE function
- holds multiple eventListeners which called seperatelly each time
- each eventListener includes the same code (is not DRY optimized)

## Second approach

The second approache uses: 

- an IIFE function
- calls multiple eventListeners to call one function
- to get a DRY approach, I created a seperate function

## Third Approach

The third approache uses: 

- an IIFE function
- This approach uses only one eventListeners with one function call
- The events are called with a froEach Array methode
- This is a better approach because now it's DRY (Don't Repeat Yourself) and uses only one function
- Also this approach uses a slice methode to exclude characters after maxLength is reached

[Link to site](https://patrickschubert87.github.io/twitter-symbole-count-clone/)
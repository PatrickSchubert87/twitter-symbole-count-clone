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


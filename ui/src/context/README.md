## CONTEXT

Use context for state management. Includes here only states that need to be shared amongst components. (e.g: The example files are from a music player app, where all the components need to know about the song currently playing)

GlobalContext.js -> define the context, including initial states and available actions

constants -> map action types to actual strings, this is so that when we change the strings, we don't have to change reducer.js and GlobalContext.js

reducer.js -> define the reducers to handle actions
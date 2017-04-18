# SpringerNature

## Introduction and Overview by Mike

I wanted to create something quick and easy, I didn’t want to devote too much time to the test (maybe an evening or two), rather I wished to develop something, then review on how suitable it and accurate the solution is and either continue to refactor and enhance or (on your advice) stop and consider the solution a failure.

So I have tried to reduce the dependency on third party libraries. Thus this example has no Flux / redux (notice the small ‘r’) dependencies - there is no predictable state container in the application. For a larger app, or when I have more time to devote to the task I would have introduced such an architecture with `ngrx` providing Store, Actions and Effects.

In the first implementation, I decided to create a series of nested Components in which each represents a XML node. I am unsure if this is the best implementation, another idea was to create a single DOM NODE Component that we could configure due to an input, for example: If the node input is a “unit”, then we have children nodes, etc., etc.

I was also unsure if I was expected to convert the XML to pure JSON in the backend / data service – this would be advantageous (especially where Sarafi is concerned). However due to time constraints and the fact I wanted to refrain from using a third party convertor I have the app using NodeLists from the returned XML.

So far, I have the app outputting the DOM tree as desired. We can toggle Children nodes and I have introduced a small icon that when hovered over will show a CSS tooltip containing the DOM Node id property… in hindsight I don’t like this implementation and would rather the tooltip is shown when hovering over the appropriate note (that way we conform to the original design). Speaking of which I have noticed that there is a CSS gradient for the background colour of the “tags” (I mean `<>`) besides the node type label. I shall add this later by adding a background gradient to the text (not a browser standard so far) or I will use a image, SVG or font icon.

######  Update: Drag and Drop functionality!

I have briefly added a 3rd party component "Dragula" to provide the drop/drag functionality. At first this doesn't eem to provide support for nesting but the service rather than the directive may provide suitable support. Once again, a third party module is being introduced for now as a means of experimentation - this does not rule out a custom, hand written solution.

######  Pending: Browser testing only on Mac OS 10.12.3 using Chrome 57.0.2987.133, Firefox 52.0.2  and Sarafi 10.0.3 (12602.4.8)
######  Pending: The Interface / Design is not responsive.

# Technical Stuff...

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

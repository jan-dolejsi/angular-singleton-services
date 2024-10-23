# Mfe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## How to reproduce the sample yourself

```bash
npm install @angular/cli@16.2.10 -g
ng new mfe --prefix mfe --routing --style scss --skip-tests --directory .
npm uninstall @angular/cli -g
```

```
npm install
```

```bash
npx ng serve
```

Create the module that plays a role of the micro-frontend:

```bash
npx ng generate module module-a --project mfe --routing --routing-scope Child
```

Add simple _home_ component to the module A:

```bash
npx ng generate component module-a/home --standalone --style css --project mfe --skip-tests 
```

Append routing into [app-routing.module.ts](./src/app/app-routing.module.ts) for path `module-a` to `HomeComponent`.

## Add two components

Add two components _feature-alpha_ and _feature-beta_ to the module A (those will require dependency injection later):

```bash
npx ng generate component module-a/feature-alpha --standalone --style css --project mfe --skip-tests
npx ng generate component module-a/feature-beta --standalone --style css --project mfe --skip-tests
```

Add the two components to the `HomeComponent`.

## Add _Hello World_ services and inject it to the component

```bash
npx ng generate service module-a/hello --project mfe --skip-tests
```

Inject the service into both the alpha and beta component and print hello world on the componet html.

Count how many times the `HelloService` gets created.

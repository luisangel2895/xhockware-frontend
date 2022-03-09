# Challenge for Xhockware

My apologies for the inconvenience, today I just read "Notes" in the final part of the project and I see that the estimated time for the project was 6 hours or 1 day of work. The project that I want to present to you was developed in 6 days of work.
Before starting the project I studied framework7 and created a template where framework7 is used within a vue-class-component and typescript environment, here I leave the template in case you want to review it: [Template framework7-typescript](https://github.com/luisangel2895/template-vue3-framework7)

This framework allows you to reduce the development time in a web app with mobile features and then maybe convert it to an app for android or io with cordova, but I felt a bit limited to develop a slightly more complex design, and differentiated the devices , so I opted to use the following stack.

# Stack

The stack that I chose for this project that seems to me so far the most modern, professional and scalable within the vuejs environment is:

- Vue.js 3
- Vue-class-component
- Vue-router
- Vuex
- Typescript
- Sass
- Pug
- PWA
- Jest
- Cypress
- i18n

I also thought it was a good option to use vue 3 with options-api but vue-class-component is much more friendly with typescript.
Due to time issues, I could not separate the store into modules, so the project is centralized in a single main store :(.

# Design

To develop this project I chose a professional design of a news app, as you can see:

![figma](https://user-images.githubusercontent.com/16966767/157414478-387a1156-b252-4bbe-b652-61198b4b42f1.png)

If you want to see the design with greater precision I also leave you the link of this [Go to design figma](https://www.figma.com/file/4CLx5XcrX40iylqT2hA39b/nuntium-news-app?node-id=0%3A1)

I have added some modifications to the design such as animations and a responsive design for tablets and pc since the original design is only for cell phones, finally the design in the 3 devices as follows.

![images-app](https://user-images.githubusercontent.com/16966767/157414523-8b583a07-8fbf-4a11-ae17-28733f5ad894.jpg)

# Project

## CSS

I used the web design pattern [Layout shifter](https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns) for responsive design, i choose this pattern because its more adaptable for complex responsive designs.

In addition to using css within each component and there is a main file with the main project variables related to the design.

## Vue

As I mentioned use vue-class-component because it is more typescript friendly and allows to implement some complex js features inside vue more easily.

I also forgot to mention that the app has support for multiple languages with the i18n library.

## PWA

In addition, the project was developed as a pwa so you can see the main features of the project offline, I did not have time to take the API data to firestore to make them persistent, so for the moment it loads the main features of the project but not the data .

![Screenshot_1](https://user-images.githubusercontent.com/16966767/157414605-b42b7db9-39f5-42fe-8bca-4fcabe002617.png)

## Unit testing

The unit tests were carried out with jest and typescript, in total there were 10 test suites and 42 unit tests, you cannot completely test the entire application but test the main components, among the different tests there are tests on:

- Asynchronous test for newsService
- Components in Vue
- Router or $router.push
- Vuex (state, getters, mutations, actions)
- Test in i18n

As you can see all the tests pass satisfactorily:

```js
npm run test:unit
```

![Screenshot_2](https://user-images.githubusercontent.com/16966767/157414696-fe672a8b-2aa5-4a8a-a297-0997d1dcaa48.png)

In addition, by convention, the structure of the main project was followed for the structure of the tests.

![testing-structure](https://user-images.githubusercontent.com/16966767/157414738-a54c68d4-7827-4378-8269-915776abc29c.png)

## E2E testing

Finally, I performed 4 integration tests with cypress to evaluate the correct functioning of the project, these tests perform:

- Test the change of category of the project and the result of this.
- Test the search for a word in the project search engine and enter a news item.
- Test bookmark a news item and then unmark it.
- Test the change of language of the project to portuguese.

As you can see all the tests pass satisfactorily:

```js
npx cypress run
```

![Screenshot_3](https://user-images.githubusercontent.com/16966767/157414823-35626faf-d059-46f9-85a7-a12a1fa45ddb.png)

And finally our in order how the videos of the integration tests performed by cypress were written.

https://user-images.githubusercontent.com/16966767/157414887-93790f61-f7ec-4741-9891-5986bb17e123.mp4

https://user-images.githubusercontent.com/16966767/157414914-a6980c3e-8bdc-4fd5-8c3d-564a7d7d08e7.mp4

https://user-images.githubusercontent.com/16966767/157415018-0baba9d6-3d24-4573-9302-5753e3ec0244.mp4

https://user-images.githubusercontent.com/16966767/157415059-a465dd08-e93e-491d-a122-03c5666c19e6.mp4

## Run the Project

### Local

To see the local operation of the project it is only necessary to run the project with:

```js
npm run serve
```

But in the conexion to the api is very recommended connect with my backend,my backend is the original backend but added with id for the news and defining a category per news.

It is very important to use this backend for testing and for the correct functioning of the application.

[Go to my Backend](https://github.com/luisangel2895/xhockware-backend)

### Production

Also add a static content server to the backend to be able to serve the application, so to test the behavior of the application in production we only have to execute the command:

```js
node start
```

With this automatically the application is served in production mode on localhost:8000

## Extra

I would have also liked to add modules as I mentioned in addition to vuex-persistence-data.

Finally this application meets the standards to become cross-platform and desktop thanks to cordova. Probably tomorrow or the day after tomorrow I will upload in this repository the apk of the Android application and the .exe installer of the Windows desktop application.

Also in the next few days it is likely that I will upload the application and the api server to my personal server to be able to observe the perfect behavior of the application in production mode.

# Questions

Please if you have any questions about the project, I will gladly answer you, just write to me at luisangel2895@gmail.com or wasap +51957888660.

And finally, thank you very much for letting me be part of your selection process, I hope you like the project :).

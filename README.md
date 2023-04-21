# AngularHolidayPlanner (TrailBlazers)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Hosted on Firebase

 follow the link to view [TrailBlazers](https://angular-holiday-planner.web.app/launchpage/sign-in)

## PWA Ready

follow the link to [TrailBlazers](https://angular-holiday-planner.web.app/launchpage/sign-in) . \
On desktop click the download button on the url bar. \
On mobile the download will be promted to accept or reject.

## Firesbase used for Auth

[FirebaseAuth](https://firebase.google.com/docs/auth)

## Firestore and Angularfire used for datastorage

[Firestore](https://firebase.google.com/docs/firestore) \
[Angularfire](https://github.com/angular/angularfire)

## Full CRUD support with Auth check

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if request.auth != null && resource.data.userId == request.auth.uid;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null;
    }
  }
}
```

## State Managment

[NGRX/Store](https://ngrx.io/) \
All data handled through state management

## Lazy loaded modules

[Angular Lazy Loading](https://angular.io/guide/lazy-loading-ngmodules)

## Extra Libraries

[TailwindCSS](https://tailwindcss.com/) \
[NG-Zorro](https://ng.ant.design/components/icon/en)




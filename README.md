# Microfrontends test project
This public project is based on creating an entire application with three different microfrontends (with the help of the module federation), more specifically we will have:
  - Shell: The menu on the left side to navigate between our apps (Host application)
  - Application1: The application number 1 (Remote application)
  - Application2: The application number 2 (Remote application)

# Steps to create a microfrontend project
We need to follow the nexts steps in order to create our microfrontends structure and configure everything accordingly, it is important to hightlight that we are using commands from the Angular CLI:

1. Create an empty workspace:
`ng new projects --create-application false`

2. Adding the three different angular applications:
```typescript
ng generate application shell --routing=true --style=scss
ng generate application application1 --routing=true --style=scss
ng generate application application2 --routing=true --style=scss
```

3. Setup the host application (in our case the Shell):
```typescript
  ng add @angular-architects/module-federation --project shell --port 4000
```

After we run the previous command, three new files have been created:
  - main.ts
  - bootstrap.ts
  - webpack.config.js and webpack.prod.config.js (We need to adapt this one to match our needs)

  ```typescript
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },
        remotes: {
          "application1": "http://localhost:4200/remoteEntry.js",
          "application2": "http://localhost:4800/remoteEntry.js",
        },
        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ]
  ```


In this case, we need to set the remote applications, like this:

4. Setup the remotes applications (in our case will be Application1 and Application2):

```typescript
  ng add @angular-architects/module-federation --project application1 --port 4200
  ng add @angular-architects/module-federation --project application2 --port 4800
```
The result of these commands is the same of the previous one:
  - main.ts
  - bootstrap.ts
  - webpack.config.js and webpack.prod.config.js (We need to adapt this one to match our needs for each application)

In those cases, we need to expose the entire app.module.ts, like this:

```typescript
  plugins: [
      new ModuleFederationPlugin({
          library: { type: "module" },
          name: "application1",
          filename: "remoteEntry.js",
          exposes: {
              './Module': './projects/application1/src/app/application1.module.ts',
          },        
          shared: share({
            "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
            "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
            "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
            "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

            ...sharedMappings.getDescriptors()
          })
          
      })
  ]
```
5. At this step, you are be able to execute all our microfrontends at the same time using the following command:
```typescript
  npm run run:all
```










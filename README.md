![1554836371931](https://user-images.githubusercontent.com/67669609/104491338-dcaf1980-55b0-11eb-8040-4554ba1d1ca0.png)

# Why Cypress?

- No Selenium.
- Fast & Stable tests.
- Works with any FE framework.
- Easy to start.
 
# What is Cypress?

- Cypress is a modern Test Automation Framework.
- It is Free and Open Source.
- It is written in JavaScript.
- It contains a Visual Interface.

# Other reasons to choose Cypress

- Use Smart Automatic Waiting (stable test).
- Contains great Documentation.
- Video Recording of Test.
- Real-Time Reloads (test automatically re-runs when updated).

# What makes it different

- Cypress is executed in the same run loop as the aplication.
- Works on Network Layer.
- Time travel.

# Limitations?

- Only JavaScript.
- Limited Cross-Browser Testing.
- One Browser.
- One Tab.

# Installation

- Note you need to have node environment installed.

## Install package Json:

- Open terminal: npm init
This command will create the package json and inicialize our project.
Fill the data requested:

![image](https://user-images.githubusercontent.com/67669609/104499073-4f24f700-55bb-11eb-99a7-2d5bef0ceaea.png)
- We can leave empty the unnesesary fields for this data.
Once it is complete Type yes. Our package json will be created.

## Install Cypress
- To install cypress (after completing the previous step) type in terminal: npm install cypress (This will download cypress, it might take some time). You should have node_modules and package-lock.json now in the project folder.


## Installing Prettier
![icon](https://user-images.githubusercontent.com/67669609/104533030-51ee0f00-55f0-11eb-897c-6593f9dde141.png)

- To install Prettier type: npm install prettier (If you look to package.json you will see prettier installed in dependencies.
- In the root of the project we have to create a config file called "**.prettierrc**"
- In ".prettierrc" we can set the rules.
- Example for rules:

```
{
    "semi": false,
    "singleQuote": true,
    "useTabs": true,
    "tabWidth": 2,
    "bracketSpacing": true,
    "arrowParens": "avoid",
    "traillingComma": "es5"
}
```
If Prettier is not formatting the code try this:
Select VS Code -> View -> Command Palette, and type: Format Document With
Then Configure Default Formatter... and then choose Prettier - Code formatter.

### Now run Cypress to autogenerate project folders and estructures:
```bash
npx cypress open  
```
This will open our Cypress ui. We can close it and we will see the folders created and the cypress.json. Now create inside of cypress folder a file called:
```bash
tsconfig.json
```
- In tsconfig.json we can set up our code complettion (copy and paste the following file inside the tsconfig):
```
{
  "compilerOptions": {
    "allowJs": true,
    "baseUrl": "../node_modules",
    "types": [
      "cypress"
    ]
  },
  "include": [
    "**/*.*"
  ]
}
```
- After restarting visual studio we will have **Intelligent Code Completion**.

## Running Cypress

To run it with UI type in terminal:
```
npm run cy:open
```
To run it without UI:
```
npm run cy:run
```
------
# Jenkins integration

![image](https://user-images.githubusercontent.com/67669609/104862746-b8d23780-5912-11eb-9d7d-6c3d2ba2be9f.png)

## Setup Cypress Builds with Jenkins

- Download **Generic Java package (.war)** LTS version and place it into your project folder.
- Execute in the terminal the command: *java -jar jenkins.war -httpPort=8080 --enable-future-java*
- Open Jenkins and open: localhost:8080.

## Creating the project in Jenkins

- Click in New item, add a name and select **Freestyle project**.
- Put a general description.
- Select **Advanced...** and click *Use custom project*, provide the path of the project and a display name.
- In **Build Environment > Build select** choose *Execute Windows batch command* (if using windows) and specify the command (for example cy:run if you add it to scripts).

## Parameterized builds

- Go to general and select 'This project is paratermized' then choose **Add Paramater** > **Choice Parameter**.
- Named it (as example script). The you can add them inside choices (example add cy:run:chrome, cy:run:firefox) and provide a description (if you want).
- Update the Execute shell by naming it **npm run %"script"%** (in windows, for Mac shell will be "$script"). Click on save.
- Now we are able to Build with parameters.

![image](https://user-images.githubusercontent.com/67669609/104863881-1e73f300-5916-11eb-95ad-77e01d798652.png)
![image](https://user-images.githubusercontent.com/67669609/104863922-41060c00-5916-11eb-94d8-2d55b4f3d8ea.png)

## Troubleshoot

- During the builds I had some problems with the encondig, I fixed them by adding these two **environment variables** in system:

```
JAVA_TOOL_OPTIONS
-Dfile.encoding=UTF8

LANG
en_GB.UTF-8
```
![image](https://user-images.githubusercontent.com/67669609/104863818-ea003700-5915-11eb-8042-bcccf8051764.png)


- Also you have to add them in Jenkins global properties, **Jenkins -> Manage Jenkins -> Configure System ->Global properties**

![image](https://user-images.githubusercontent.com/67669609/104863664-65151d80-5915-11eb-8457-90e103d9275e.png)


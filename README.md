# Pokedex Discord Bot
Welcome to Cutie Hack 2021. Thank you for coming to my workshop for UCR's Cutie Hack 2021.

![Cutie Hack Logo](https://media.giphy.com/media/l0IpXwyCXikRK9Yl2/giphy.gif) 


## Your Project

> ***Prepare for trouble.***
> 
> ***Make it double.***
 
![Team Rocket](https://media.giphy.com/media/1m2NzgMlMaWFq/giphy.gif)

In the spirit of togetherness (Cutie Hack's theme), we will be creating a pokedex discord bot. This is a beginner's project that will combine integral programming concepts:

1. Use a REST API to get data
2. Use documentation to solve problems
3. Create our own REST API

## Installation
![NodeJS Image](https://d1q6f0aelx0por.cloudfront.net/product-logos/library-node-logo.png)
![](https://www.python.org/static/img/python-logo@2x.png)

This workshop uses NodeJS and Python.

You can install NodeJS and Python however you want to - Docker, Package Manager (homebrew on mac), or download and install the binary.

> [Node JS Binary](https://nodejs.org/en/) 
> 
> I recommend using the LTS version (on the left)
>
> [Python Binary](https://www.python.org/downloads/)

I also like using yarn over npm as a package manager :). Once you have NodeJS installed run the following command in terminal

> ```npm install --global yarn```

## Introduction

> *I included this section for people that need to download everything :D*

My name is Andrei Dimaano. I am a third year CS Major at UC Riverside. I previously interned at MathWorks working with data visualizations in React (fun fact, I have not used MATLAB to this day). 

Most of my programming experience lies in web technologies. However, I have done game dev, mobile dev, and ML. 

Other than programming, I really like korean culture. My friends call me a koreaboo, and it's partly true. If you can guess my favorite KPOP artist, you get brownie points :^). I also do a lot of weightlifting at the SRC. Recently, I have been getting into cooking.

> So Andrei, why are you the Discord workshop lead?
>
> > Good Question! I honestly haven't made the most technologically complex discord bot, but I have made a discord bot that many people use. I'm the creator of Calcifer, a productivity discord bot used in `1078` servers and `1957` users. 
>
> Why JS? why not python?
> 
> >I like JS because I'm a web dev. Also, the DiscordJS library is used more than the Python library. The DiscordJS library also has 100% coverage of the Discord API :) I'm no expert in programming languages but if you take CS181 you'll probably find a better answer.


## Register your bot with Discord
Ref: [Documentation](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)
1. Open [Discord Dev Portal](https://discord.com/developers/applications)
2. Click on the "New Application" button.
3. Enter a name and confirm the pop-up window by clicking the "Create" button.
![New Discord App image](https://discordjs.guide/assets/create-app.ed82aede.png)
4. Go to "Bot" on the left pane and click "Add Bot"
![Adding bot image](https://discordjs.guide/assets/create-bot.44c7ea49.png)
5. Hit the "Copy" button to get you token
6. Go to OAuth2 on the left and create your URL by selecting `bot` and `applications.commands`. Hit "Copy" and enter the link in a browser. Follow the instructions to add a bot to your server.


## Creating the Project Directory
You can either fork this repo and `git clone` your forked repo into your system, or create your own directory.

## Initializing Project
Go into the terminal and type 

```npm init -y```

This command creates a package.json file. In this file we can modify our scripts in order to run the bot. I recommend the following script:

```
"start": "node src/index.js",
```

By typing ```yarn start``` into the terminal, yarn will execute the command "start" in shell of cmd.exe depending on your OS.

Next, we'll install two of my favorite packages, nodemon and prettier

```
yarn add prettier nodemon
```

Then, we need to add a few scripts to accomodate these packages. In package.json replace scripts with the following (or add to what's already written):

```
"scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js",
    "format": "prettier --write \"src/**/*.js\""
  },
```

Create a file in the root directory called ".prettierrc" and put this in the file (yes, it really is just empty brackets): 

```
{}
```

Prettier formats code for you so you don't have to worry about making your code aesthetic. nodemon runs code whenever you save a file.

Lastly, add the most important package for this project: 

```
yarn add discord.js
```


## Protecting Tokens
Hopefully, you still have your token copied into your system. If not, go back to the Discord Dev Portal and copy your token. In a terminal change directories to your project directory. Create a `.gitignore` file and copy and paste this [code](https://github.com/github/gitignore/blob/master/Node.gitignore) into the file. This will ensure that your files are safe. 

Next, run this command in your terminal:

```yarn add dotenv ```

Then, create a file in the project root directory called `.env`. Then write the following code:

```DISCORD_TOKEN=[YOUR TOKEN]```

for example:

```DISCORD_TOKEN=ODk5MTMyOTMxOTc5NzM5MTY4.YWuUzA.2nkw4e4v9n7l0kog9QgcFOTlLKM```

## Part 1: Initial Files

1. Create an `src/index.js` file.
2. Create an asynchronous main function in the file
3. in this function, we need to initialize the bot and login the bot to discord. Use the documentation to find the code for this. [Intial Code Documentation](https://discordjs.guide/creating-your-bot/#creating-the-main-file). When looking at documentation, don't copy and paste the whole code. Copy and paste in sections because you may not need something in the code.
4. Call the function at the bottom of the file

JavaScript concepts from this documentation:
1. [Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) 
   
   ```const { Client, Intents } = require('discord.js');```
   
   What is { Client, Intents }?
2. [Function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

```client.once('ready',() => { ```

```// code here ```

```});```

What is ```() => {} ```?

3. [Async/Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) What is async?



> Extra Credit:
> Can you use the documentation to set the status of the bot? 
> [Hint](https://discord.js.org/#/docs/main/stable/class/ClientUser?scrollTo=setStatus)


## Part 2: Commands

1. run this command in terminal: `yarn add @discordjs/builders @discordjs/rest discord-api-types`
2. 

## What's Next?
This workshop covered only 2 concepts. 
1. You can expand you discord bot by adding a database. I personally recommend Mongoose/MongoDB Atlas or Firebase. 
2. add the ability to play sound in voice channels [Discord Voice Documentation](https://discordjs.guide/voice/#installation)
3. Discover new APIs and use them in tandem with DiscordJS. I've made League of Legends bots and kanye west bots. There are so many apis you can use like reddit or twitter apis.

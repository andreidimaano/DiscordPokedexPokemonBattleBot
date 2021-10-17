# Pokedex Discord Bot
Welcome to Cutie Hack 2021. Thank you for coming to my workshop for UCR's Cutie Hack 2021.

![Cutie Hack Logo](https://media.giphy.com/media/l0IpXwyCXikRK9Yl2/giphy.gif) 


## Your Project

> ***Prepare for trouble.***
> 
> ***Make it double.***
 
![Team Rocket](https://media.giphy.com/media/1m2NzgMlMaWFq/giphy.gif)

In the spirit of togetherness (Cutie Hack's theme), we will be creating a pokedex discord bot. This is a beginner's project that will combine integral programming concepts:

1. Use a rest API to get data
2. Use documentation to solve problems

## Installation
![NodeJS Image](https://d1q6f0aelx0por.cloudfront.net/product-logos/library-node-logo.png)

This workshop uses NodeJS.

You can install NodeJS however you want to - Docker, Package Manager (homebrew on mac), or download and install the binary.

> [Node JS Binary](https://nodejs.org/en/) 
> 
> I recommend using the LTS version (on the left)

I also like using yarn over npm as a package manager :). Once you have NodeJS installed run the following command in terminal

> ```npm install --global yarn```

## Register your bot with Discord
Ref: [Documentation](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)
1. Open [Discord Dev Portal](https://discord.com/developers/applications)
2. Click on the "New Application" button.
3. Enter a name and confirm the pop-up window by clicking the "Create" button.
4. Go to "Bot" on the left pane and click "Add Bot"
5. Hit the "Copy" button to get you token
6. Go to OAuth2 on the left and create your URL by selecting `bot` and `applications.commands`. Hit "Copy" and enter the link in a browser. Follow the instructions to add a bot to your server.

## Creating the Project Directory
You can either fork this repo and `git clone` your forked repo into your system, or create your own directory.

## Protecting Tokens
Hopefully, you still have your token copied into your system. If not, go back to the Discord Dev Portal and copy your token. In a terminal change directories to your project directory. Create a `.gitignore` file and copy and paste this [code](https://github.com/github/gitignore/blob/master/Node.gitignore) into the file. This will ensure that your files are safe. 

Next, run this command in your terminal:

```yarn add dotenv ```

Then, create a file in the project root directory called `.env`. Then write the following code:

```DISCORD_TOKEN=[YOUR TOKEN]```

for example:

```DISCORD_TOKEN=ODk5MTMyOTMxOTc5NzM5MTY4.YWuUzA.2nkw4e4v9n7l0kog9QgcFOTlLKM```

## What's Next?
This workshop covered only 2 concepts. 
1. You can expand you discord bot by adding a database. I personally recommend Mongoose/MongoDB Atlas or Firebase. 
2. Upgrade your Node version and add the ability to play sound in voice channels [Discord Voice Documentation](https://discordjs.guide/voice/#installation)
3. Discover new APIs and use them in tandem with DiscordJS.

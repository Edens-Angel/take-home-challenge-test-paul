# Welcome
Welcome to the take home coding challenge. To get started you'll need:
- git
- yarn or npm

To start the challenge clone this repo to you machine and switch to a new branch.
- `git clone <reponame>`
- `git checkout -b <branchname>`
- `git push -u origin <branchname>`

To start the app run the following
commands from you command line from the root of the project:
- `yarn` or `npm install`
- `yarn start` or `npm run start`

Open [http://localhost:3000](http://localhost:3000) to view the React app
running in the browser.

## Project

You're going to work on a mini Game of Thrones wiki. If you open the app
you see the app always starts on the page of Jon Snow. There are three types of pages:
- Character pages, containing some info on the character, which books the character appears in. And which to which houses he is alleged to.
- Book pages, containing all the characters which appear in the book
- House pages, containing some info on the house, a list of its members and which houses are cadet branches of the house.

Clicking on a character, book or house will forward you to the corresponding page.

## Problem

However, there are a few problems with the current app. It is up to you to fix these bugs and then implement some 
extra features.

The bugs currently in the app are:
- Somehow in the description of the characters and houses you see url's instead of
the names of the resources they represent. Also, they do not to link to a new page, which they should.
- The links in House pages do not work.
- Some resources do not have a `name` in that case some other property
should be rendered so we can go that resource. e.g. the second and
third characters in Book `A Dance with Dragons` resource `https://anapioficeandfire.com/api/books/5`
- Very often the sentences aren't complete due to missing data,
like for Jon Snow we do not have the
spouse so the description says `Jon Snow is married to <blank>`.
In this case we would like to remove that sentence from the description altogether.

## Extra features

Try to implement as much of the following extra features:
- Add a button somewhere in the app which always brings you back to start position,
  i.e. the Jon Snow Page
- Sort all lists on alphabetic order by the rendered name
- Implement a button which brings you to a random page
- Create a switch (checkbox), which when turned on filters all characters
which are sworn members to `House Lannister of Casterly Rock`,
the house with id 229. From any list of characters.

## Hand in exercise

To finish the exercise please commit and push all your changes
to your branch and make a pull request to master.

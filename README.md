# Developer CV Template

## What is it
A Print to PDF Friendly CV Template.

## Tech Stack
- React
- SCSS

## How to Use
0) install Node.js, and run the 'npm install' command in the project root folder
1) run the 'npm start' command in the project root folder and wait for the website to load on http://localhost:3000
3) Change the title tag in src/index.html (This will be the default file name when you print)
4) Modify the data in public/cv.json
5) Replace public/headshot.jpg with your own
6) Add more resources to the public folder and use them in public/cv.json
7) Change the font in the src/index.html style tag to something more you. 
8) Print to PDF with Google Chrome

## Output Example
[Click Here](https://github.com/EyalPerry/dev-cv/blob/master/output-example.pdf)

## Known Issues
1) public/cv.json.details.experience.items.projects is WIP - it is not rendered ATM.
2) page needs to be manually reloaded after each change.

## Future Features:
1) Reload on changes in public folder (file added / changed / removed)

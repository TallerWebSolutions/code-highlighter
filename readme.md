# Code Highlighter

A simple code highlighter to format code for presentations.

## How to use

1. Clone the project
2. Install running `yarn` command on the project folder
2. Add you JS code files to the project root folder
3. Edit `scripts/highlight` file and add the file name (without the extension) to either the `filesJS` or `filesJSON` arrays
4. Run `yarn highlight`
5. Open the generated HTML in the `html` folder in Chrome or your browse of choice
6. Copy the code and paste in the editor

## Customizing styles

To customize the style, edit the `css/styles.css` file. To see other classes to use in CSS selectors check the rendered html file source code.

## Known issues

- The clipboard integration is not working, so the button "Copy" on the output html is useless for now

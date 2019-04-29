# Responsive jQuery Flyout Menu by Fabian Lins
This is the jQuery version of my Flyout Menu. There is also a Vanilla JavaScript version of this available:
https://github.com/FabianLins/flyout_menu_js

To use this Flyout Menu, you have to do a few things:

# How does it work?
- I have used flex boxes for this menu. I did not want to use float or inline-block.
- The menu can be placed on the left or right by setting a variable in the JS file (right is the default and I suggest keeping it that way).
- The right side of the menu is not expanded on start by getting the width of the right side in JS and setting it as margin.
- When you click on the menu you remove the margin and the menu expands.
- When you click on the expanded menu it is getting back to the default margin.
- You can also change the icon size on the mobile menu by changing variables in the CSS and JS file.

# Instructions
1. Link the "flyout_menu_style.css" file.
2. Link the current jQuery library (in this case: "jquery-3.3.1.min.js").
  NOTE: Always check for a later version on https://jquery.com/download/
3. Link the "flyout_menu_code.js" file.
4. Copy the lines between the two comments in the HTML file and paste them into your HTML file.
5. Adjust HTML the lines to your desires (but keep in mind that you have to keep the structure as it is).
6. Adjust the CSS variables.
7. Adjust the JS variables in the "responsive_menu_code.js" file.
_______________________
  From here everything is optional but I suggest following this instruction.
  This will make sure you have support for older browsers.
_______________________  
8. Use [CTRL+F] (sometimes [CTRL+H]) to replace the variables within the CSS file.
9. Delete everything in ":root{}" (INCLUDING the ":root" name and brackets).

# Additional Instruction
You can also use the SCSS file to compile it to a CSS file which replaces steps number: 6, 8, 9.
However, compiling SCSS files can be a bit tricky depending on the setup. If you are new to it, feel free to check out this compiler:
https://scout-app.io/

# License
You are free to use this menu in commercial projects without giving credit.
But you are not allowed to claim this menu as your own menu.
If you edit the code and change the plugin you are allowed to upload your version as long as you give credit to this project.

If you have any questions feel free to write me an e-Mail:
contact@fabianlins.com

Thanks for your attention.

# Bugs
There are no known bugs. If you find one please write me an e-Mail.

# Browser Compatibility
The browser compatibility is not tested carefully. However, after removing the variables the menu works in IE 11. Even with variables it works in the latest Firefox and Chrome version.

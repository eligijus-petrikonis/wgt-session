# Women Go Tech session

## Initial state and purpose of this repo

#### All elements are just placed and some `pre-styles` added, purpose is to play around and make all elements to be responsive

## To-do

- Normalize UI for all browsers<br>
  load `normalize.css` styles
- Enable responsive mode<br>
  `<meta name="viewport" content="width=device-width,initial-scale=1" />`
- Check that there are no fixed widths of containers, transform to `max-*`<br>
  `pre-style.css`
- Enable `box-sizing: border-box;` to add `padding and border` to be calculated in specified width
- Hide element sections<br>
  `styles.css`
- Make header with logo and navigation be responsive by using mobile-first approach
  - Add background-color
  - Use flexbox row
  - Specify height of logo image
  - Make Header to be fixed at the top of screen
  - Consider how main content will disappear under header
  - Hide menu/ hamburger close button and style hamburger(open/close) button
  - Add `scripts.js` file
  - Add JS click event listener to toggle `opened` class on hambuger button
  - Add JS click event listener to hide menu if menu item clicked
  - Add CSS rules to toggle close button and menu by `opened` class
  - Add **@media queries** to toggle hamburger and show menu on resolution where menu could fit
  - Test in different screen orientations and sizes
- Make Images section responsive and performance efficient
  - Toggle on `#images` section
  - Add CSS to make big image responsive
  - Rewrite CSS to make all `img, picture and video` responsive
  - Write html code to load smaller/bigger images depending from size width
  - Test in different screen orientations and sizes
- Make text responsive
  - Toggle on `#text` section
  - Test how text looks in devices
  - Fix not fitting text
- Make columns responsive
  - Toggle on `#columns` section
  - Test how columns looks in devices
  - Leave as 1 column in phone portrait
  - Make 2 columns in phone landscape and tablet portrait
  - Make 4 Columns in higher screens
  - Make 3 and 4 columns as first ones in screens bigger than 992px
  - Show what happens without `box-sizing: border-box;`
- Make forms responsive
  - Toggle on `#forms` section
  - Make more nicer form
  - Make form labels be next(on left side) to fields above 768px screen size, buttons should be placed as row splitting width by half
  - Above 1200px make smaller buttons and labels, and align labels text to right
- Make tables responsive
  - Toggle on `#tables` section
  - Prioritize columns
  - Add css class `hide` rule to hide element
  - Add css classes `show-xx-table-cell` for bigger screen widths
  - Add new classes according to column priorities
  - Test how text looks in devices

# 3D MACHINE AND TOOL LLC

The official website will now be developed using NextJS and TailwindCSS for the best experience.
We will continue to use an ORM to interface with a PostgreSQL database. But, for free with Neon.tech.
Prisma will then be used as the ORM to interface between our app and SaaS solution for database activity.

## DESIGN PROCESS, IMPORTANT CHANGES AND ADDITIONS

- [ ] Recreate the animation set for the <Hero/> component.
  - [ ] The logo should hover, isolating slowly "in place" with framer motion.

## MOBILE PHONE NAVIGATION

- [ ] Create an animated fullscreen menu for desktop (smaller display, user enforced) and primarily for mobile phones.

  - [ ] Use the <MobileMenu/> component for displaying the mobile menu.
  - [ ] Hide the Desktop navigation on size small.
  - [ ] fade in and fade out with close for the fullscreen mobile menu.
  - [ ] link items should be a bit bigger and operate differently (a little) from Desktop views.
    - [ ] Examples:
      - [ ] Framer.com, mobile navigation [https://framer.com]

## RECEIVE RFQ's, PROVIDE QUOTES, REMOVE DATA FROM SERVERS (contact request and design docs in the cloud.)

  - [ ] Once quoted, must remove the files and the quotation from the server.
    - [ ] Need a process to speed this up after the quote is received.
    - [ ] Administrative controls to allow for the deletion of these quotes.
- [ ] Data limitations, design doc package limits
  - [ ] Need to figure out what the biggest project in 3d models dad has in size for individual solutions are and x2 the available upload data per quote.

# COMPLETED ITEMS:

## [x] Dealing with SPAM and BOT Activity
  - [x] ChatGPT is being used to rate the likelihood of a message being spam or a relevant business request.
  - [x] Filter out fake or spamming users from contacting or annoying the admins.
  - [x] I want to try and ensure that genuine people are acccessing my website's content.
  - [x] Person seeking services or products which are provided.
  - [x] Upon identification of illegitimate behaviour or access:
      - [x] Save that persons access information in full.
      - [x] Refuse service to that computer or set of computers.
      - [x] Prevent all data submitted from reaching admins.
  - [x] Implement a working Request for Quote form with the database.
  - [x] Show a screen which shows successful submission and email sent.
  - [x] Provide an admin email and a customer email response.
  - [x] The PostgreSQL database will need all of the file names stored
  - [x] Cloudinary for file uploads, Cloudinary is currently cheapest alternative.


# TODO

Complete the sales checkout process with zipcode and state selection for
sales tax, ability to upload a sales tax exemption form and the ability
to complete purchases.

The ACTION column needs to be removed and removal of a product from the
shopping cart integrated into the existing width of the table as it
stands now.

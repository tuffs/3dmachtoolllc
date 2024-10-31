# 3D MACHINE AND TOOL LLC
The official website will now be developed using NextJS and TailwindCSS for the best experience.
We will continue to use an ORM to interface with a PostgreSQL database. But, for free with Neon.tech.
Prisma will then be used as the ORM to interface between our app and SaaS solution for database activity.

# DESIGN PROCESS, IMPORTANT CHANGES AND ADDITIONS
- Recreate the animation set for the <Hero/> component.
  - The logo should hover, isolating slowly "in place" with framer motion.

- Create an animated fullscreen menu for mobile phones.
  - Hide the Desktop navigation on size small.
  - fade in and fade out with close for the fullscreen mobile menu.
  - link items should be a bit bigger and operate differently (a little) from Desktop views.
    - Examples:
      - Framer.com, mobile navigation [https://framer.com]

- Implement a working Request for Quote form with the database.
  - Show a screen which shows successful submission and email sent.
  - Provide an admin email and a customer email response.
  - The PostgreSQL database will need all of the file names stored
    - Cloudinary or TwicPic [https://www.twicpics.com/] for file uploads, Cloudinary is currently cheapest alternative.
  - Once quoted, must remove the files and the quotation from the server.
    - Need a process to speed this up after the quote is received.
    - Administrative controls to allow for the deletion of these quotes.
- Data limitations, design doc package limits
  - Need to figure out what the biggest project in 3d models dad has in size for individual solutions are and x2 the available upload data per quote.

- Implement a human challenge to prevent bots from submission for:
  - Request for Quote
  - Contact Messaging

- A IP blocking service which adds IPs to a block list based on SPAM filtering.
  - Or, rather, instead of blocking, a cron task for deletion.
  - Figure this kind of functionality out.
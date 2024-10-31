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

[main 1eb948a] Additional images and changes to the way that the images appear in the ExperienceAndExpertise.js component. Services page also has changes to the styling with regards to the text color but needs far more styling changes implemented.

[main b11d07e] Updates to the BaseServices.js component. We are getting there, so that we can then move to the optimization process. I must also make decisions for sizing for the mobile, tablet, and desktop+ views according to traditional TailwindCSS media query breakpoints.

[main 75e7ff4] Updates to design and amplify our service displays on the homepage. Added framer-motion to the hover state of the images used. Added in description to the service data model. Have not refactored for mobile view for the following: Navigation, Logo Mark, and Services. I will complete all of the design refactors after the base desktop and tablet view is completed. I want to ensure that I spend enough time on this portion of the website to 'get it right' as it is the first thing our prospective customer will engage with. Need to add more interactivity on the hover state to give our users a clear call to action that engages their desire to learn more. Need to become a bit more post-modern industrial. Background needs either a topographic levels outline like a relief map for something, maybe a machined object in some way OR needs a designers grid area. But both must fade out and be subtle. Having one or the other interact with the mouse on a hover and scroll state would be interesting. I need to talk about and describe the actions desired in more detail as I iterate over this base design.
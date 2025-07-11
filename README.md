# 3D MACHINE AND TOOL LLC
---
The official website will now be developed using NextJS and TailwindCSS for the best experience.
We will continue to use an ORM to interface with a PostgreSQL database. But, for free with Neon.tech.
Prisma will then be used as the ORM to interface between our app and SaaS solution for database activity.

## DESIGN PROCESS, IMPORTANT CHANGES AND ADDITIONS
---
- [ ] Recreate the animation set for the <Hero/> component.
  - [ ] The logo should hover, isolating slowly "in place" with framer motion.

## CHECKOUT PROCESS

- [X] Ability to completely checkout with multiple products and quantities
  - [ ] Checkout Form and all of its intricacies
    - [ ] Before final purchase is completed, ensure that the Address for Shipment is Accurate BY CUSTOMER!
    - [X] Addresses will NOT be verified with USPS official addresses for flexibility and new business centers, etc.
    - [ ] Provide a customer acknowledgement tangent to the purchase order which states that the customer takes
          on all shippinng errors and costs incurred from entering incorrect address to ship to. Additional handling
          and shipping costs may be incurred if items are returned via the shipping process
  - [ ] Acceptance of valid Exemption Certificates in PDF format
    - [ ] PDF, PNG, or JPG accepted file formats.

  - [ ] Customers can return to an order to complete their purchase if they abandon their shopping cart
        after they enter in their shipping/billing and contact details.
  - [ ] Try to recapture sales by emailing a reminder with a link to the shopping cart for those who do
        not complete the payment process and provide them an opportunity to respond to us via email
        directly.
  - [ ] Add on a Stripe Payment processor which completes sales
  - [ ] Ensure we are capable to complete these forms in mobile devices


## MOBILE PHONE NAVIGATION
---
- [ ] Create an animated fullscreen menu for desktop (smaller display, user enforced) and primarily for mobile phones.

  - [X] Use the <MobileMenu/> component for displaying the mobile menu.
  - [X] Hide the Desktop navigation on size small.
  - [X] fade in and fade out with close for the fullscreen mobile menu.
  - [ ] MAKE NAV LINKS A BIT BIGGER ON MOBILE FOR VISIBILITY!
  - [ ] link items should be a bit bigger and operate differently (a little) from Desktop views.
    - [ ] Examples:
      - [ ] Framer.com, mobile navigation [https://framer.com]

## RECEIVE RFQ's, PROVIDE QUOTES, REMOVE DATA FROM SERVERS (contact request and design docs in the cloud.)
---
  - [ ] Once quoted, must remove the files and the quotation from the server.
    - [ ] Need a process to speed this up after the quote is received.
    - [ ] Administrative controls to allow for the deletion of these quotes.
- [ ] Data limitations, design doc package limits
  - [ ] Need to figure out what the biggest project in 3d models dad has in size for individual solutions are and x2 the available upload data per quote.

# COMPLETED ITEMS:
---
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
---
The Sales Tax Exemption upload form must be provided in the next
screen, once the 'Continue to Payment' button is pressed we must
allow for STE certificates in PDF format to be uploaded to our
Cloudinary media server. JPG and PNG formatted documents should
also be allowed to make things easier for our clients attempting
to use their STE certificate.

## CREATE ORDERS, GET STE CERTS, AND PROCESS PAYMENTS
---
  [ ] - Enumeration for Sales Status;
      - [ ] - Entered
      - [ ] - Processing
      - [ ] - Purchased
      - [ ] - Shipped
      - [ ] - Delivered
      - [ ] - Returned
  [ ] - Order status fields will be accompanied with
        an updatedAt timestamp, this timestamp will provide
        the time and date of the latest status update to each
        order.
  
  [ ] - Save checkout data and present the payment screen.
  [ ] - Sales Tax Exemption Certificate Uplaod
  [ ] - Remove Sales Tax with STE Cert in PDF, JPG, or PNG format
  [ ] - Recalculate or Remove Sales Tax from Order
  [ ] - Process Stripe API payment after Credit Card information
        is complete.
  [ ] - Send Receipts to Customer and Administration 

# FILES TO CHECK - NOT VALID AND WORKING PROPERLY:
---
** MUST CREATE A CUSTOMER ID NUMBER (LOGIC FOR UUID ON THAT ALPHANUMERIC NUMBER)
** MUST CREATE A UUID FOR ORDER NUMBER AS WELL, BUT SHORT SHORT CODED FOR EASY CONVEYANCE
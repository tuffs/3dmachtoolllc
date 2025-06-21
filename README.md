# 3D MACHINE AND TOOL LLC

The official website will now be developed using NextJS and TailwindCSS for the best experience.
We will continue to use an ORM to interface with a PostgreSQL database. But, for free with Neon.tech.
Prisma will then be used as the ORM to interface between our app and SaaS solution for database activity.

## DESIGN PROCESS, IMPORTANT CHANGES AND ADDITIONS

- [ ] Recreate the animation set for the <Hero/> component.
  - [ ] The logo should hover, isolating slowly "in place" with framer motion.

## CHECKOUT PROCESS

- [ ] Ability to completely checkout with multiple products and quantities
  - [ ] Checkout Form and all of its intricacies
    - [ ] Ensure that the US address provided is recognized by the USPS as a definitive ship to location
    - [ ] Allow override with acknowledgement that any shipping errors are on the customer
    - [ ] Sales Tax Calculation and Final Pricing Provided
    - [ ] Acceptance of valid Exemption Certificates in PDF format
      - [ ] Can we query AI to check if the uploaded PDF appears to be a legitimate copy by US State?
        - [ ] Use ChatGPT or Grok to offload processing power for this
  - [ ] Add on a Stripe Payment processor which completes sales
    - [ ] Ensure we are capable to complete these forms in mobile devices


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


# PROMPT
Ok, before we proceed. You mention that zipCode is an Int in the database. The table we are looking up is purely a reference table at this point, you are correct that we need to match the type before executing a lookup in the server action we are working with at present.

Also, you mention: `here’s no validation to ensure zipCode is a valid US zip code format (e.g., 5 digits or 5+4). Since your form uses validator.isPostalCode(value, 'US'), you should validate similarly in the action.`

While this is great, we will only be looking out for the base 5 digit zip code in the United States as we will ONLY sell inside of the USA via this form. This being said, we may need to look into the validator US zip code validation and make some modifications here. All of the zip codes that we lookup in the reference table are pure 5 digit zip codes, no plus 4 that the USPS tried to get us to use as a quicker and more precise locator. While it is used, I do not use the plus 4 and it is unneeded with the US Postal Service, only allowed. Almost no one knows what their own +4 code is, save attorneys and the post master or employees of the USPS, maybe.

You also mention:

```
Query Return Value:
The query returns an object { rate: Float } (e.g., { rate: 7.5 }), but your action is named getSurtaxPercent, suggesting it should return the rate directly (e.g., 7.5). Returning the object requires the caller to access .rate, which may be less convenient.

Why: Aligning the return type with the function’s purpose improves usability and clarity.
```

Which I agree with, however, I need some clarification on what needs to be changed with your opinions and suggestions.

Also, you stated:

```
No Default Rate Handling:
If no record is found for the zip code, the query returns null, but the action doesn’t explicitly handle this case (beyond the initial !zipCode check). Returning 0.0 for invalid or missing zip codes may not be the desired behavior in all cases.
```

This is correct, we do need to handle errors a bit more cautiously here so that when someone has input `FL` as their desired state and the zip code is not found on my lookup table with a corresponding rate, we need that user to know that the zip code that they are using is not a `FL` zip code and that we have detected a user input error to avoid later confusion over where to ship packages in the real world. We need an error handler here that will pop back into the form and tell our customer what is going on and require that either the state or zip code be changed. We do also want to provide a default value (rate) of `0.0`   in this event or any other event where the Florida zip code is not found. Providing `null` as a return value helps no one here, you are correct.

As well, my Prisma ORM import path is correct based on my setup. I have used this throughout this application and others. It is tried and true at this point. I appreciate your seeking confirmation here.
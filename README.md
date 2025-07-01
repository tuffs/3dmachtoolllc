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



# REWORK THE SERVER ACTIONS AND COMPONENT FOR CHECKOUT
---
```
That's an excellent and highly recommended approach, especially when working with Next.js and its App Router. Here's a breakdown of why your proposed strategy is a solid plan and some considerations to keep in mind:

The "Server-First" Mindset
Your idea of focusing on server actions first and then building the component around them aligns perfectly with the principles of the Next.js App Router and React Server Components. This "server-first" mindset has several significant benefits:

1. Data-Driven Design: By defining your server actions and the database operations they perform, you're essentially building the backend logic first. This forces you to think about the data flow and the required mutations before you even start writing UI code. This is a much more robust approach than trying to retrofit backend logic into an existing frontend component.

2. Progressive Enhancement: When you use a server action with a <form> element, Next.js provides progressive enhancement by default. This means the form will still work and submit data to your server even if JavaScript is disabled in the user's browser. This is a huge win for accessibility and reliability.

3. Separation of Concerns: This approach inherently creates a better separation of concerns. Your server actions will contain all the backend logic for data manipulation (e.g., creating an order, updating a product's quantity, processing a payment). Your React component will then be a thin layer of UI that calls these server actions. This makes your code more modular, easier to test, and more maintainable.

4. Enhanced Performance: By moving data mutations to the server, you reduce the amount of JavaScript that needs to be sent to the client. The server handles the heavy lifting, which improves the application's performance, especially for users on slower networks or less powerful devices. Server actions can also leverage Next.js's caching and revalidation systems to update the UI and data in a single request, avoiding extra roundtrips.

5. Security: Placing your database logic in server actions keeps sensitive information (like API keys and database connection strings) securely on the server, where it belongs. You don't have to worry about exposing these secrets in the client-side bundle.

Is It Worth Scrapping the Existing Code?
Based on your description, yes, it sounds like a good idea to scrap the existing code and start fresh. If the current component and server action setup is causing significant issues, continuing to patch it up could lead to a codebase that is difficult to understand, debug, and maintain.

Think of it as an investment. Taking the time to rebuild the component with a clear, server-action-first design will likely save you a lot of time and frustration in the long run. The result will be a more reliable, performant, and scalable application for your users and a much more enjoyable development experience for you.

Practical Steps for Your Rework
Here's a potential workflow for your new design:

Define your Server Actions: Start by writing the server actions that will handle the core business logic. For a product purchasing component, this might include actions like:

createOrder(formData): To create a new order in the database.

updateProductQuantity(productId, quantity): To decrement the product's stock after a purchase.

processPayment(formData): To handle the payment gateway integration.

Remember to use the "use server" directive at the top of your server action file or function.

Model the Data: Based on the server actions, ensure your database schema is well-designed to support the required operations.

Design the React Component: Now, design your React component (likely a Client Component if it needs interactivity like state or event handlers) to call these server actions. Use the action attribute on your <form> element to invoke the server action.

Handle UI States: Use hooks like useFormStatus to show a pending state (e.g., a loading spinner) while the form is submitting. You can also use useFormState and useOptimistic for more advanced UI updates and optimistic rendering.

Revalidate Data: After a successful server action, use revalidatePath or revalidateTag to tell Next.js to re-fetch the relevant data and update the UI. This ensures the user sees the latest data without a full page refresh.

By following this process, you will create a well-structured and highly efficient component that leverages the full power of Next.js and its server-first architecture.
```


# FILES TO CHECK - NOT VALID AND WORKING PROPERLY:

** MUST CREATE AN CUSTOMER NUMBER LOGIC
** MUST CREATE A UUID FOR ORDER NUMBER, BUT SHORT SHORT CODED

*/actions/createOrder.js
*/actions/getSurtaxPercent.js
*/components/CheckoutForm.js

# FROM GIT STATUS CALL
```
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   README.md
        modified:   actions/getSurtaxPercent.js
        modified:   components/CheckoutForm.js
        modified:   prisma/schema.prisma

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        actions/createOrder.js
        prisma/migrations/20250621112935_add_order_tax_fields_and_fix_relation/
```
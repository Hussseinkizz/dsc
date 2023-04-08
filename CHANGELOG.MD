# dsc-ucu-community v1

## 02-04-2023 - v1.0.0

- Done: Project Planing
- Done: Project Diagrams
- Done: Project Tooling & Setup
- Done: Version Control (Git & Github)
- Done: Merge Into Mono Repo

## Changes, K

- @M, Delete: Node Modules
- @K, Install: React Hands
- rename: all main pages to jsx
- move: all files to sensible folders
- @S, Rename: MyForm to RegisterForEvent
- change: events to be a default export
- move; form to components
- render: form
- add: form css (basic)
- remove: empty submit handler attribute value
- add: placeholder handlers
- @Jy, Fix imports, merge unsuccessful
- @J, rename App.css to Auth.css
- rename: Home to Auth.jsx
- change: line 1 to let declaration in User.js

- Added: carousel about to style it
- Pending Home UI
- Fixed: Pages showing empty!
- Move img folder back to assests to vite compilation waring that tey should actually be there!
- Implemented Hero Carousel Slider
- Todo: More Code Merging,
- Todo: CRUD operations with Json Server
- Todo: User Authentication
- Todo: Deployment
- Done: Setup React Hands To Handle App & User Auth State
- Done: Added User Auth State Persistance Even On Page Reloads
- Done: Added useJsonServer Hook To Simplify Working With Json Server
- Done: Set useJsonServer In Sample Login To Demo User Creation In DB
- Done: Installed Axios And Nanoid


## 06-04-2023 - v1.0.0

- change: Redone project with tailwind!
- Done: Login & Signup Screens UI & Form Validations Using Zod And React Hook Form
- Todo: Login & signup Backend
- Fix: Carousel Not SLiding

## 08-04-2023 - v1.0.0

- Done: Signup page now allows user to signup and get redirected to home screen, afterwards they can access protected routes, their signin or signup state is stored in global state
- Done: Login page now allows users to signin, we check whether the user exists in users object in DB if yes we redirect them to home screen and allow them access protected routes by checkign thier login state in global state else we tell them to signup.
- Done: Now In top app bar header, we show link to user account if they're signed in or join community link if they're not, this is consistent even when they refresh page, only the signed user can access the protected route  of user-account!
- Todo: Provide Log out functionality in user account page!

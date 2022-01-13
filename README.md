Run npm install

Create a .env.local file in parent directory and add below environment variable

GOOGLE_ID=get_it_from_firebase
GOOGLE_SECRET=get_it_from_firebase

STRIPE_SECRET_KEY=get_it_from_stripe_starting_with_"sk"
STRIPE_PUBLIC_KEY=get_it_from_stripe_starting_with_"pk"

HOST=http://localhost:3000
NEXTAUTH_URL=http://localhost:3000

STRIPE_SIGNING_SECRET=use_the_command_below_in_the_terminal

stripe listen --forward-to http://localhost:3000/api/webhook  -> paste the signing secret in STRIPE_SIGNING_SECRET



Change the HOST and NEXTAUTH_URL accordingly

Run npm run dev


This clone is just for educational and learning purposes and I do not mean to use it for my own purpose.
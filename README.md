# [Just Education Tenders](https://justeducationtenders.co.uk)
Live link ☝️

## Description

This app displays UK Education tenders sourced from official sources and updated in near-real time.

This full stack app comprises two main components at present:

- An API crawler built in Node.JS and running 24/7 on an AWS Lightsail VM (hooray for three-month free trials!)
The crawler filters out education tenders and processes them into an object containing only the info we need for the front end. It then saves the tenders
to MongoDB using Mongoose. At this time, this is the only piece of code from the old project which is running in production!

- A Next.JS frontend app hosted with Vercel which uses getServerSideProps to render the page server-side with some caching using Cloudflare's free tier to reduce load on the server.

- ~~A Node.JS/Express app which presents a RESTful API with a single GET route which the client can use to get tenders from the database.~~ This is now deprecated. The code is in the old [repo](https://github.com/therealseanwallace/freeEducationTenders) for posterity, but I'm instead using Next.JS' getServerSideProps to fetch data directly from MongoDB using Mongoose.


## Motivation

I built this app for a few reasons:

- I saw problems with several of the other places people go to find tenders in my industry, such as complex interfaces, signups required, and sometimes even payment.

- I was ready to flex my muscles building a full-stack app with some more complex functionality

- I'm a strong believer in the principles of free and open tendering AND the free software movement so this combination presented a golden opportunity to develop my skills in full-stack development.

## Key Learning

- Develop further my skills in Node JS, Express, and Next.JS and how to apply the same skills to solving real-world problems

- Gained proficiency in the full workflow of deploying and releasing an app in the wild including:
    * Domain registration
    * DNS config and configuring GitHub pages to use custom domain
    * Deployment to Heroku
    * Creation and config via SSH of a AWS Lightsail VM to run my API crawler service

## Technology

- Built using a MERN stack featuring:
   * A RESTful API built using Express
   * A discrete crawler service which gets tenders from UK government APIs
   * A single-page React / Next.JS app which gets tenders from our API and displays them to users

## Roadmap

~~- Consider getting rid of the Express API and taking advantage of Next.JS's ability to get info directly from the database.~~ DONE!

## Acknowledgements

- Contains public sector information licensed under the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/").

- Loading gif by Nevit Dilmen at [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Lightness_rotate_36f_cw.gif), licensed under [GNU Free Documentation License, version 1.2]()

## License

This is free software available under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).

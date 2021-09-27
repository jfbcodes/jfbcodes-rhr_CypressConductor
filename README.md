

Tab (1)

Run Rails

- `cd AcmeAPI/`
- `rails s -p 8000`



Tab (2)

Run React 

- `cd acme-app/`
- `yarn start`


Tab (3) 
Launch Cypress
- From the root of this repo
- `yarn run --cwd='acme-app/' cypress open`
 

Your spec will interact with a React app running at :3000

Your React app will then interact with Rails at :8000

TODO:

- [ ] finish the React app interaction
- [ ] can cypress start up the two component servers and/or Redis
- [ ] load factory users
- [ ] transactional rollback


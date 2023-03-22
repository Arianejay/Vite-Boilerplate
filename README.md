# vite-redux-sass-socket.io-boilerplate

## Getting Started

A simple typescript template together with socket io for websocket, sass for styling, and redux toolkit for state management.

### Clone repository

To clone the repository, use the following commands:

```sh
git https://github.com/Arianejay/Vite-Boilerplate.git
npm install
```

### Available Scripts

-   `dev` - run app

### Directories

```sh
├── public  
├── src
    ├── assets                      # Used for medias (images, videos, files).
    ├── components                  # React components
    ├── features                    # Redux Slice
    ├── globals                     # Global configurations contains env files, routes
        ├── `axios.ts`                  # Axios routes
        ├── `config.ts`                 # env files
        ├── `store.ts`                  # Redux config store
    ├── pages                       # React pages
    ├── services                    # Services - most of the business logic must be here
    ├── socket.io                   # Socket io initialization
        ├── `socket.io.tsx`             
    ├── stylesheets                 # Stylings (SCSS)
    ├── types                       # Typescript interfaces
    ├── `App.tsx`                   # `App.tsx`
    ├── `main.tsx`                  # Main file
├── `.gitignore`                
├── `index.html`                    
├── `README.md`                     
├── `tsconfig.json`                    
├── `tsconfig.node.json`                   
└── `vite.config.ts`          
```

### Dependencies

-   [axios][axios] - HTTP client for our browser 
-   [dotenv][dotenv] - loads environment variables
-   [moment][moment] - date parser
-   [react-router-dom][react-router-dom] - router
-   [react-toastify][react-toastify] - real time notifications
-   [socket.io-client][socket.io-client] - our web socket used for real-time communication with the server, paired together with [socket.io-][socket.io].
-   [uuid][uuid] - used for unique id creation

### env

```sh
SERVER_PORT="http://localhost:XXXX"
SOCKET_PORT="http://localhost:XXXX"
```

[axios]: https://www.npmjs.com/package/axios
[dotenv]: https://www.npmjs.com/package/dotenv
[moment]: https://www.npmjs.com/package/moment
[react-router-dom]: https://www.npmjs.com/package/moment
[react-toastify]: https://www.npmjs.com/package/react-toastify
[socket.io]: https://www.npmjs.com/package/socket.io
[socket.io-client]: https://www.npmjs.com/package/socket.io-client
[uuid]: https://www.npmjs.com/package/uuid

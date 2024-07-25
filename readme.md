1. generate token and send http only cookies
2. these cookies are not send to the browser not accessible using cookies.
3. frontend cannot access http cookies
4. browser send back cookies to the backend

Centralized Connection.
By adding the database connection setup in index.js, you centralize your configuration, making it easier to manage and modify. This ensures that your database connection is established before the application starts, preventing any potential issues where parts of the application might try to interact with the database before the connection is ready.


Axios interceptor are the functions that Axios call for every project

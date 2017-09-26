# UCSD Rooms

A tool to find empty classrooms at UCSD. This is the repository for the web app that contains the API and UI.
The repository for seeding the database is available at: [github.com/joelseq/ucsd-rooms-seed](https://github.com/joelseq/ucsd-rooms-seed)

## Feature requests or bugs

If you would like to request a feature or report a bug please [create a new Issue](https://github.com/joelseq/ucsd-rooms/issues/new) 

## Install and run locally

To install and run this on your local machine you need [MongoDB](https://www.mongodb.com/)

1. Clone this repository
2. Run `npm install`
3. Start MongoDB
4. Create a `.env` file in the main directory, providing the environment variable `DB_URI` (url to your MongoDB instance). Example:

```
DB_URI=mongodb://localhost:27017/ucsdrooms
```

5. Run the server `node server.js`

## Development

If you are working on the UI, you can run `webpack -w` to watch for changes to React files and automatically build the bundle. When you are ready to build a production bundle run `webpack -p` (Make sure to do this before committing the `bundle.js` file).

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to your remote: `git push origin my-new-feature`
5. Submit a pull request :D

Contributions are always welcome!

## Credits

[Vincent Liaw](https://github.com/liawesomesaucer) for creating most of the UI.
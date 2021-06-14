1. Created a database moviesDB
2. Created a collection called movies fron given csv file
3. created another collection called genres by extracting the genres from the csv
4. Created an aggregated relationship between the two using : 
    db.movies.aggregate([
... {
... $lookup: {
... from: 'genres',
... localField: 'Genre',
... foreignField: 'Name',
... as: 'Genre'
... }
... }
... ,
... {
... $out: 'movies'
... }
... ])

const express = require('express');

const qs = require('qs');

const app = express();
const parser = require('body-parser');

const axios = require('axios');

// const router = require('./routes.js');

// app.use('/hotels', router);

app.use(express.static(__dirname + '/client'));
// app.use("/:id/", express.static(__dirname + '/client'));
app.use(parser.urlencoded({ extended: true }));

app.get('/hotels/:id', (req, res) => {
	axios.get(`http://localhost:1128/hotels/${req.params.id}`)
		.then((response) => {
			res.send(response.data);
		})
		.catch((err) => {
			console.error(err);
			res.sendStatus(400);
		});
});

// Partner prices
app.get('/hotels/:id/prices/room?', (req, res) => {
	axios.get(`http://localhost:1128/hotels/${req.params.id}/prices/room?type=${req.query.type}`)
		.then((response) => {
			res.json(response.data);
		})
		.catch((err) => {
			console.error(err);
			res.sendStatus(400);
		});
});

app.put('/hotels/:id/prices/room?', (req, res) => {
	axios.put(`http://localhost:1128/hotels/${req.params.id}/prices/room?type=${req.query.type}`, qs.stringify(req.body))
		.then((response) => {
			console.log(response);
			res.sendStatus(200);
		})
		.catch((err) => {
			console.error(err);
			res.sendStatus(400);
		});
});

// Bookings
app.get('/hotels/:id/bookings/', (req, res) => {
	axios.get(`http://localhost:1128/hotels/${req.params.id}/bookings`)
		.then((response) => {
			res.json(response.data);
		})
		.catch((err) => {
			console.error(err);
			res.sendStatus(400);
		});
});

app.get('/hotels/:id/bookings/room?', (req, res) => {
	axios.get(`http://localhost:1128/hotels/${req.params.id}/bookings/room?type=${req.query.type}`)
		.then((response) => {
			res.json(response.data);
		})
		.catch((err) => {
			console.error(err);
			res.sendStatus(400);
		});
});

app.post('/hotels/:id/bookings/', (req, res) => {
	axios.post(`http://localhost:1128/hotels/${req.params.id}/bookings`, qs.stringify(req.body))
		.then((response) => {
			console.log(response);
			res.sendStatus(200);
		})
		.catch((err) => {
			console.error(err);
			res.sendStatus(400);
		});
});

app.delete('/hotels/:id/bookings/:bookID', (req, res) => {
	axios.delete(`http://localhost:1128/hotels/${req.params.id}/bookings/${req.params.bookID}`)
		.then((response) => {
			console.log(response);
			res.sendStatus(200);
		})
		.catch((err) => {
			console.error(err);
			res.sendStatus(400);
		});
});

// app.get('/calendar/:type/', (req, res) => {
//     let type = req.params.type;
//     axios(`http://3.20.164.242:1128/${type}`)
//       .then((response) => {
//           res.send(response.data);
//       })
// })

// app.get('/reviews/:type/', (req, res) => {
//     let type = req.params.type;
//     axios(`http://3.17.98.112:3001/${type}`)
//       .then((response) => {
//           res.send(response.data);
//       })
// })

// app.get('/gallery/file/:type/', (req, res) => {
//     let type = req.params.type;
//     axios(`http://52.15.185.43:6969/${type}`)
//       .then((response) => {
//           res.send(response.data);
//       })
// })

// app.get('/hotels/:id/', (req, res) => {
//     let hotelId = req.params.id;
//     axios(`http://3.20.164.242:1128/hotels/${hotelId}/`)
//       .then((response) => {
//           res.send(response.data);
//       })
// })

// app.get('/reviews/hotels/:id/', (req, res) => {
//     let hotelId = req.params.id;
//     axios(`http://3.17.98.112:3001/reviews/hotels/${hotelId}`)
//       .then((response) => {
//           res.send(response.data);
//       })
// })

// app.get('/gallery/:id/', (req, res) => {
//     let hotelId =req.params.id;
//     axios(`http://52.15.185.43:6969/gallery/${hotelId}`)
//       .then((response) => {
//           res.send(response.data);
//       })
// })

app.listen(1345, () => {
	console.log('App listening on port 1345');
})
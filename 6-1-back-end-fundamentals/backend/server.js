// Task 1: Import Express
import express from 'express';



// Task 2: Create the Express app and store it in a variable named app
const app = express();



// Task 3: Allow React to access the server
import cors from 'cors';
app.use(cors());



// Task 5: Create the home route "/"
app.get('/', (req, res) => {
	res.send('Hello from the back-end server');
});



// Task 6: Create the "/about" route
app.get('/about', (req, res) => {
	res.send('This is the about route');
});



// Task 7: Create the "/student" route
app.get('/student', (req, res) => {
	res.json({
		name: 'Aisha',
		major: 'Computer Science'
	});
});



// Task 4: Start the server on port 3000
app.listen(3000, () => {
	console.log('Server is running on http://localhost:3000');
});

const express = require('express')
const app = express()
app.use(express.static('public'))

app.set('view engine', 'pug')


app.get('/', function (req, res) {
  res.render('index');
})

app.get('/about', function (req, res) {
  res.render('about');
})

app.get('/projects', function (req, res) {
  res.render('projects');
})

app.get('/contact', function (req, res) {
  res.render('contact');
})

app.get('/projects/kash', function (req, res) {
  var kashTitle = "KA$H";
  var kashSubtitle = "Node.js • Express • Javascript • MongoDB • Chart.js • jQuery • HTML/CSS";
  var kashDescrip = "KA$H is a stock handling system that allows users to trade various stocks based on prediction data that is gathered from sentiment and statistical trends."
  res.render('kash',{
    kashTitle: kashTitle,
    kashSubtitle: kashSubtitle,
    kashDescrip: kashDescrip
  });
})

app.get('/projects/cosmic', function (req, res) {
  var cosmicTitle = "COSMIC";
  var cosmicSubtitle = "Javascript • jQuery • HTML/CSS";
  var cosmicDescrip = "CryoEm science gateway";
  res.render('cosmic',{
    cosmicTitle: cosmicTitle,
    cosmicSubtitle: cosmicSubtitle,
    cosmicDescrip: cosmicDescrip
  });
})

app.get('/projects/pdb', function (req, res) {
  var pdbTitle = "PDB101 Reports";
  var pdbSubtitle = "Node.js • Express • Javascript • MongoDB • Chart.js • jQuery • HTML/CSS";
  var pdbDescrip = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  res.render('pdb',{
    pdbTitle,
    pdbSubtitle,
    pdbDescrip
  });
})

app.listen(3000, function () {
  console.log('Test-app listening on port 3000!')
})


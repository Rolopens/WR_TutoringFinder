const path = require("path");

module.exports.controller = function (app) {

    // app.get('/login', function(req, res) {
    //     // if (!req.session.uid) res.redirect("/");
    //     // else res.redirect("/preacts");
    // })

    app.post('/login', function(req, res) {
    	// put logic here on how to login

    	res.render('homepage')


        // if(req.session.uid != null) {
        //     return res.redirect('/')
        // }

        // var email = req.body.email;
        // var password = req.body.password;

        // if (email == "" || email == undefined || password == "" || password == undefined)
        //     return res.redirect("/login?error=badCredentials")
        // else {
        //     authService.checkUser(email, password).then((result)=>{
        //         req.session.uid = result._id;
        //         //console.log(req.session.uid);
        //         return res.redirect('/home');
        //     }).catch((err)=>{
        //         return res.redirect("/login?error=BadCredentials");
        //     })
        // }
    })

    app.get('/login', function(req, res) {
    	// put logic here on how to login
    	res.render('homepage')
    })

    app.get('/profile', function(req, res) {
        // put logic here on how to login
        res.render('profile')
    })

    app.get('/inbox', function(req, res) {
        // put logic here on how to login
        res.render('inbox')
    })

    app.get('/search', function(req, res) {
        // put logic here on how to login
        res.render('search')
    })

    app.get('/logout', function(req, res) {
        // put logic here on how to login
        res.render('index')
    })

    app.get('/signup', function(req, res) {
    	// put logic here on how to login
    	res.render('signup')
    })

    app.get('/signupTutee', function(req, res) {
        // put logic here on how to login
        res.render('signupTutee')
    })

    
   
}

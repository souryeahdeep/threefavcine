import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const cineJSON='[{"id":"1980","type":"movie","name":"Raging Bull","members":{"cast":["Robert De Niro","Joe Pesci"],"crew":["Martin Scorcese","Robert Chartoff","Irwin Winkler","Paul Scrader"]},"Quotes":["He ain_t pretty no more.","Jake is never gonna be champ. Too many people hate him.","If you win, you win. If you lose, you still win."],"img":"https:\/\/cdn2.hubspot.net\/hubfs\/6155957\/Imported_Blog_Media\/89c9479592f41e71b2bc77e8af4661cc-1.jpg"},{"id":"1972","type":"movie","name":"The Godfather","members":{"cast":["Al Pacino","Marlon Brando","Diane Keaton"],"crew":["Franic Ford Coppola","Mario Puzo","Albert S Ruddy","Fred Roos"]},"Quotes":["I\u2019m gonna make him an offer he can\u2019t refuse.","A man who doesn\u2019t spend time with his family can never be a real man.","Women and children can be careless, but not men.","In Sicily, women are more dangerous than shotguns."],"img":"https:\/\/rukminim2.flixcart.com\/image\/850\/1000\/l2tcfbk0\/poster\/s\/i\/u\/small-poster-movie-the-godfather-sla822-wall-poster-13x19-inches-original-imaek7mxguwkxftz.jpeg?q=90&crop=false"},{"id":"1976","type":"movie","name":"Taxi Driver","members":{"cast":["Robert De Niro","Harvey Keitel","Jodie Foster"],"crew":["Martin Scorcese","Paul Scrader","Michael Chapman"]},"Quotes":["You talkin to me? ","Twelve hours of work and I still can\u2019t sleep. Damn. Days go on and on. They don\u2019t end.","I Saw In Your Eyes And I Say In How You Carried Yourself That You_re Not A Happy Person."],"img":"https:\/\/encrypted-tbn0.gstatic.com\/images?q=tbn:ANd9GcQPdK-Uajg1z-UhXPw57UCtZJIk_-8yJ8o6MA&s"}]';
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", { cinemas: data });
});
let data;
app.post("/cinemas", (req, res) => {
    switch (req.body.film) {
        case "Raging Bull":
            data = JSON.parse(cineJSON)[0];
            break;
        case "The Godfather":
            data = JSON.parse(cineJSON)[1];
            break;
        case "Taxi Driver":
                data = JSON.parse(cineJSON)[2];
                break;
        default:
            break;
    }
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
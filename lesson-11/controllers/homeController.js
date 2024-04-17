// homeController.js
"use strict";

/**
 * Listing 10.2
 */
exports.respondWithName1 = (req, res) => {
    res.render('index');
}

/**
 * Listing 10.3
 */
exports.getHome = (req, res) => { res.render('index'); } // "/" index
// exports.getContact = (req, res) => {} // "/contact" GET index
// exports.postContact = (req, res) => {} // "/contact" POST index

exports.respondWithName = (req, res) => {
    let paramsName = req.params.myName; // 라우트의 매개변수 /name/수:myName
    res.render('index', { 
        name: paramsName,
        people: {
            usa: {
                einstein: "Albert Einstein",
                musk: "Elon Musk",
                jobs: "Steve Jobs"
            },
            korea: {
                psy: "싸이다!",
                kim: "김민수",
            },
            mexico: {
                jesus: "Jesus Alvarez"
            }
        }
    });
};
const request = require("request");
const {expect} = require("chai");
let cat = {name: "test cat"};
let url = "http://localhost:3000/api/cat"


describe('descript name', function(){
    it('test GET', function(done){
        request(url, function(a,b,c){
            console.log(arguments);
            //assert statement
            // i know c is the result of url, i went to make sure it is
            console.log(c);
            let responseObj = JSON.parse(c);
            expect(responseObj).to.be.an("array");
            done();
        }) 
    });
});


describe('descript name', function(){
    it('test POST', function(done){
        request.post({url:url,form:cat}, function(a,b,c){
            console.log(arguments);
            //assert statement
            // i know c is the response from endpoint, how can we verify this
            let responseObj = JSON.parse(c);
            expect(responseObj).to.be.an('array');
            done();
        }) 
    });
});

const request = require("supertest")("https://reqres.in")
const expect = require("chai").expect;


describe('Post User', function() {
    it("Success Register", async function() {
        const response = await request
            .post("/api/users")
            .send({name: "Abdul Alim",
                    job: "QA Engineer"})

         expect(response.body.name).to.eql('Abdul Alim')
         expect(response.body.job).to.eql('QA Engineer')           
    })
  
})

describe('Get All User /', function() {
    it('Success Get User', async function(){
        const response = request
        .get(" /api/users?page=2");
        expect(response)
        expect(200)
    });

    it('Success GET Single User', async function(){
        const id = 140
        await request
        .get(`/api/users/${id}`);
        expect(200)
    })

    it('Single User NOT FOUND'), async function(){
        const id = 23
        await request
        .get(`/api/users/${id}`);
        expect(404)
    }
})

describe('PUT User/', function(){
    it('Succes Update User' , async function(){
      const response = await request
        .put("/api/users/2")
        .send({name: "Alim Update",
                job : "QA Update"})
        expect(response.body.name).to.eql("Alim Update")
        expect(response.body.job).to.eql("QA Update")
        expect(200);
    })
})

describe('Delete User', function(){
    it('Deleted User', async function(){
        const id = 2
        await request
        .delete(`/api/users/${id}`)
        expect(204)
    })
})



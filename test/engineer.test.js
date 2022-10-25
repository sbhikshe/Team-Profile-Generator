const Engineer = require('../lib/engineer')
describe("engineer", () => {
  it("Construct an Engineer object, check that properties are initialized", () => {
    let name = "Chris";
    let id = "003";
    let email = "chris@teams.com";
    let github = "chrisH";

    let engineer = new Engineer(name, id, email, github);

    expect(engineer.name).toEqual(name);
    expect(engineer.id).toEqual(id);
    expect(engineer.email).toEqual(email);
    expect(engineer.githubUsername).toEqual(github);
  });
  it("Construct an Employee object, check the role is set to 'Engineer' ", () => {
    let name = "Richard";
    let id = "001";
    let email = "richard@teams.com";
    let github = "chrisH";

    let engineer = new Engineer(name, id, email, github);

    expect(engineer.getRole()).toEqual("Engineer");
  });
  it("Construct an Employee object, check getGithub() ", () => {
    let name = "Richard";
    let id = "001";
    let email = "richard@teams.com";
    let github = "chrisH";

    let engineer = new Engineer(name, id, email, github);

    expect(engineer.getGithub()).toEqual(github);
  });
});
const Intern = require('../lib/intern')
describe("Intern", () => {
  it("Construct a Intern object, check that properties are initialized", () => {
    let name = "Rob";
    let id = "005";
    let email = "rob@teams.com";
    let school = "UCLA";

    let intern = new Intern(name, id, email, school);

    expect(intern.name).toEqual(name);
    expect(intern.id).toEqual(id);
    expect(intern.email).toEqual(email);
    expect(intern.school).toEqual(school);
  });
  it("Construct an Intern object, check the role is set to 'Intern' ", () => {
    let name = "Rob";
    let id = "001";
    let email = "rob@teams.com";
    let school = "UCLA";

    let intern = new Intern(name, id, email, school);

    expect(intern.getRole()).toEqual("Intern");
  });
  it("Construct an Intern object, check getSchool() ", () => {
    let name = "Rob";
    let id = "001";
    let email = "rob@teams.com";
    let school = "UCLA";

    let intern = new Intern(name, id, email, school);

    expect(intern.getSchool()).toEqual(school);
  });
});
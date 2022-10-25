const Manager = require('../lib/manager')
describe("manager", () => {
  it("Construct a Manager object, check that properties are initialized", () => {
    let name = "Richard";
    let id = "001";
    let email = "richard@teams.com";
    let officeNumber = "408-555-6000";

    let manager = new Manager(name, id, email, officeNumber);

    expect(manager.name).toEqual(name);
    expect(manager.id).toEqual(id);
    expect(manager.email).toEqual(email);
    expect(manager.officeNumber).toEqual(officeNumber);
  });
  it("Construct an Manager object, check the role is set to 'Manager' ", () => {
    let name = "Richard";
    let id = "001";
    let email = "richard@teams.com";
    let officeNumber = "408-555-6000";

    let manager = new Manager(name, id, email, officeNumber);

    expect(manager.getRole()).toEqual("Manager");
  });
  it("Construct an Manager object, check getNumber() returns the officeNumer ", () => {
    let name = "Richard";
    let id = "001";
    let email = "richard@teams.com";
    let officeNumber = "408-555-6000";

    let manager = new Manager(name, id, email, officeNumber);

    expect(manager.getNumber()).toEqual(officeNumber);
  });
});
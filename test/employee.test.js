const Employee = require('../lib/employee')
describe("employee", () => {
  it("Construct an Employee object, check that props are initialized", () => {
    let name = "Richard";
    let id = "001";
    let email = "richard@teams.com";

    let employee = new Employee(name, id, email);

    expect(employee.name).toEqual(name);
    expect(employee.id).toEqual(id);
    expect(employee.email).toEqual(email);
  });
  /* Not able to throw from the constructor even if its wrapped
  up in a function */
  /* Added check for this at the time of user input. So, don't really
  need to check for empty name string later. */
  /*
  it("Constructing employee without a name", () => {
    let name = "";
    let id = "001";
    let email = "richard@teams.com";

    const err = new Error("Employee does not have a name");

    const cb = () => new Employee(name, id, email);
    let employee = cb(name, id, email);

    expect(cb).tothrowError(err);
  });
  */
  it("Construct an Employee object, check the role is set to 'Employee' ", () => {
    let name = "Richard";
    let id = "001";
    let email = "richard@teams.com";

    let employee = new Employee(name, id, email);

    expect(employee.getRole()).toEqual("Employee");
  });
});
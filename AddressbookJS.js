class Contact {
    //property
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    //constructor
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email
    }

    //method
    toString() {
        return "Firstname: " + this.firstName + " Lastname: " + this.lastName + " Address: " + this.address + " City: " + this.city +
            " State: " + this.state + " Zip: " + this.zip + " Phone Number: " + this.phoneNumber + " Email: " + this.email;
    }
}

let person = new Contact("Abhishek", "Kumar", "Punjabi Bagh", "New Delhi", "Delhi", 110033, 9009009034, "abhi@gmail.com");
console.log(person.toString());
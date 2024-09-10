// Person class
class Person {
  constructor(name, mobile) {
    this.name = name;
    this.mobile = mobile;
  }

  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Mobile: ${this.mobile}`);
  }
}

// Student class inheriting from Person
class Student extends Person {
  constructor(name, mobile, rollNo) {
    super(name, mobile);
    this.rollNo = rollNo;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Roll No: ${this.rollNo}`);
  }
}

// Order processing function
function processOrder() {
  const name = document.getElementById("name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const message = document.getElementById("message").value.trim();

  try {
    validateForm(name, mobile, message);
    const student = new Student(name, mobile, generateRollNo());
    student.displayInfo();

    const receiptDate = new Date();
    const receipt = `
          <h2>Order Receipt</h2>
          <p><strong>Name:</strong> ${student.name}</p>
          <p><strong>Mobile:</strong> ${student.mobile}</p>
          <p><strong>Message:</strong> ${message}</p>
          <p><strong>Order Date:</strong> ${receiptDate.toLocaleDateString()}</p>
          <p><strong>Order Time:</strong> ${receiptDate.toLocaleTimeString()}</p>
      `;
    document.getElementById("receipt").innerHTML = receipt;
    document.getElementById("receipt").style.display = "block";
  } catch (error) {
    alert(error.message);
  }
}

// Validation function
function validateForm(name, mobile, message) {
  if (name.length === 0) {
    throw new Error("Name is required.");
  }

  if (!/^\d{10}$/.test(mobile)) {
    throw new Error("Mobile number must be 10 digits.");
  }

  if (message.length > 50) {
    throw new Error("Message cannot exceed 50 characters.");
  }
}

// Generate a dummy roll number (for demonstration purposes)
function generateRollNo() {
  const rollNo = Math.floor(Math.random() * 1000);
  if (rollNo === 0) {
    throw new Error("Roll number cannot be zero.");
  }
  return rollNo;
}

import { useState } from 'react'; // Here we import the useState Hook from React
import './style.css';

function Form() {
    // Here we set two state variables for firstName and lastName using `useState`
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;

        // Ternary statement that will call either setFirstName, setLastName or email based on what field the user is typing in
        if (name === 'firstName') {
            return setFirstName(value);
        } else if (name === 'lastName') {
            return setLastName(value);
        } else {
            return setEmail(value);
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // Alert the user their first and last name, clear the inputs
        alert(`Hello ${firstName} ${lastName} ${email}`);
        setFirstName('');
        setLastName('');
        setEmail('');
    };

    return (
        <div className="container text-center">
            <h1>
                Hello {firstName} {lastName} {email}
            </h1>
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                    value={firstName} // this is the value of the input, which will be set to the state variable firstName
                    name="firstName" // This is the name of the input, which is used to identify it in the handleInputChange function
                    onChange={handleInputChange} // This is the event listener that will call the handleInputChange function
                    type="text"
                    placeholder="First Name"
                />
                <input
                    value={lastName}
                    name="lastName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Last Name"
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Email"
                />
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Form;

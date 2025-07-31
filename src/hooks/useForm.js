import { useState } from "react";
import { Form } from "../components/contact/form";
 
export function useForm() {

      const [form, setForm] = useState({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
        });
        
        const { firstName, lastName, email, message } = form;
        const [error, setError] = useState(false);

        const handleSubmit = (e) => {
            e.preventDefault();
            // console.log("submit click ");
            // fast validation
            if (
            !firstName.trim() ||
            !lastName.trim() ||
            !email.trim() ||
            !message.trim()
            ) {
            // console.log("campos vacíos");
            setError(true);
            return;
            } else {
            setError(false);
            }

            console.log(firstName, lastName, email, message);
            setForm({ firstName: "", lastName: "", email: "", message: "" });
        };

        const handleChange = (e) => {
            setForm({
            ...form,
            [e.target.name]: e.target.value,
            });
        };

        const ShowError = () => (
            <div className="mx-6 text-red-600 dark:text-orange-500 font-semibold my-2">All fields are mandatory.</div>
        );


    return ( <Form handleSubmit={handleSubmit} handleChange={handleChange}  
                    firstName={firstName} lastName={lastName} email={email}
                    message={message} error={error}  ShowError={ShowError} /> );

}
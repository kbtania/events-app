import { useRef, useState } from 'react';

import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');
    const emailInputRef = useRef();
    // console.log(enteredEmail);
    function registrationHandler(event) {
        event.preventDefault();
        let enteredEmail = emailInputRef.current.value;
        if (enteredEmail.length !== 0 && enteredEmail.includes('@')) {
            setError(false);
            fetch('/api/newsletter', {
                method: 'POST',
                body: JSON.stringify({ email: enteredEmail }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then((response) => response.json())
                .then((data) => setMessage(data.message));
            emailInputRef.current.value = ''

        } else {
            setError(true);
        }

    }


    return (
        <section className={classes.newsletter}>
            <h2>Sign up to stay updated!</h2>
            <form onSubmit={registrationHandler}>
                <div className={classes.control}>
                    <input
                        type='email'
                        id='email'
                        placeholder='Your email'
                        aria-label='Your email'
                        ref={emailInputRef}
                    />
                    <button>Register</button>
                </div>
            </form>
            {message && <p className={classes.message}>{message}</p>}
            {error && <p className={classes.messageError}>Invalid email</p>}
        </section>
    );
}

export default NewsletterRegistration;
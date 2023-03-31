import { ValidationError, useForm } from "@formspree/react";

export default function ContactForm() {
    const [state, handleSubmit] = useForm('mayzpqzn');
    if (state.succeeded) {
        return <div className="text-center text-lg mb-5">Thank you for sending me an email!</div>;
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="mb-5">
                <div className="flex md:flex-row flex-col">
                    <label htmlFor="name" className="m-1">Name:&nbsp;</label>
                    <input type="text"
                        className="m-1 border-slate-800 border-1"
                        placeholder="Name"
                        name='name'
                        id='name'
                        required
                        autoComplete="off" />
                    <label htmlFor="email" className="m-1">Email Id:&nbsp;</label>
                    <input type="email"
                        name='email'
                        id='email'
                        className="m-1 border-slate-800 border-1"
                        required
                        placeholder="Email Id"
                        autoComplete="off" />
                </div>
                <ValidationError field="email" prefix="Email" errors={state.errors} />
                <ValidationError field="name" prefix="Name" errors={state.errors} />
                <ValidationError field="message" prefix="Message" errors={state.errors} />
                <div className="flex flex-col">
                    <label htmlFor="message" className="m-1 visible md:hidden">Message:</label>
                    <textarea name='message'
                        required
                        className="m-1 border-slate-800 border-1"
                        placeholder="Message"
                        id='message'
                        autoComplete="off" />
                    <input type="submit" id="submit" name="submit" placeholder="Submit"
                        disabled={state.submitting}
                        className="m-2 bg-slate-800 text-slate-200 font-md w-fit p-2 self-center border-none rounded-md" />
                </div>
            </form>
        </div>
    )
}
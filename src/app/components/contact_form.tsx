export default function ContactForm() {
    return (
        <form action="https://formspree.io/f/mayzpqzn" method="post">

            <div className="flex md:flex-row flex-col">
                <label htmlFor="name" className="m-1">Name:&nbsp;</label>
                <input type="text"
                    className="m-1 border-slate-800 border-1"
                    placeholder="Name"
                    name='name'
                    id='name'
                    autoComplete="off" />
                <label htmlFor="email" className="m-1">Email Id:&nbsp;</label>
                <input type="email"
                    name='email'
                    id='email'
                    className="m-1 border-slate-800 border-1"
                    placeholder="Email Id"
                    autoComplete="off" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="message" className="m-1 visible md:hidden">Message:</label>
                <textarea name='message'
                    className="m-1 border-slate-800 border-1"
                    placeholder="Message"
                    id='message'
                    autoComplete="off" />
                <input type="submit" id="submit" name="submit" placeholder="Submit"
                    className="m-2 bg-slate-800 text-slate-200 font-md w-fit p-2 self-center border-none rounded-md" />
            </div>
        </form>
    )
}
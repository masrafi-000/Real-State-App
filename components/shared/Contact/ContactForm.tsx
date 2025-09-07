import ContactInput from "./ContactInput";


export default function ContactForm() {
    return (
        <div className="my-[40px] container mx-auto text-white">
            <div className="flex flex-col space-y-4">
                <h1 className="text-5xl font-semibold leading-[150%]">Let&apos;s Connect</h1>
                <p className="text-lg font-medium leading-[150%]">We&apos;re excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you&apos;re a prospective client, partner, or simply curious about our services, we&apos;re here to answer your questions and provide the assistance you need.</p>
            </div>
            <ContactInput />
        </div>
    )
}
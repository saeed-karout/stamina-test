import '../assets/contact.css'
function Contact() {
   
    const handleClick = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(event.target); // Get the form data
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('_subject');
    const message = formData.get('message');

    // You can now use the form data to send an email or perform any other action
    console.log(`Name: ${name}, Email: ${email}, Subject: ${subject}, Message: ${message}`);
  };

   return (
    <div>
        <div className="min-h-screen  py-20 flex flex-col justify-center ">
            <div className="py-28 sm:w-[70vw]   mx-auto">

            <div className="relative pt-3 sm:w-[70vw] sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl bg-[#F6B451]"
                   
                >
                </div>
                <div className="text-white relative px-4 py-10  shadow-lg sm:rounded-3xl sm:p-20" 
                 style={{background: 'linear-gradient(to right, #686260,  #C0C0C0)'}}
                >

                    <div className="text-center pb-6">
                        <h1 className="text-4xl py-3">Contact Us</h1>

                        <p className="text-gray-300 text-xl">
                            Fill up the form below to send us a message.
                        </p>
                    </div>

                    <form onSubmit={handleClick} method="post">

                        <input
                            className="shadow mb-4 appearance-none border rounded-lg w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Name" name="name" />

                        <input
                            className="shadow mb-4 appearance-none border rounded-lg w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
                            type="email" placeholder="Email" name="email" />

                        <input
                            className="shadow mb-4 appearance-none border rounded-lg w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Subject" name="_subject" />

                        <textarea
                            className="shadow mb-4 min-h-0 appearance-none border rounded-lg h-64 w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
                            type="text" placeholder="Type your message here..." name="message" style={{height: '121px'}}></textarea>

                        <div className="flex justify-between">
                            <input
                                className="shadow-lg bg-indigo-600 hover:bg-indigo text-white hover:cursor-pointer font-bold py-2 px-4 rounded focus:outline-none "
                                type="submit" value="Send " />
                            <input
                                className="shadow-lg  hover:duration-200 hover:scale-125 text-white font-bold py-2 px-4 rounded  hover:cursor-pointer hover:text-red"
                                type="reset" />
                        </div>


                   

                    </form>
                </div>
                    
            </div>
            </div>
        </div>
    </div>
)
}

export default Contact;

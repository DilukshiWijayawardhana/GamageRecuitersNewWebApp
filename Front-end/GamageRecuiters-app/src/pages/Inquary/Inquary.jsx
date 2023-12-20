// import{ FaUserGraduate ,FaTimes} from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaFacebook  } from "react-icons/fa";
import { FaWhatsapp  } from "react-icons/fa";
import { FaPhoneAlt  } from "react-icons/fa";
import { FaYoutube  } from "react-icons/fa";
import { FaLinkedin  } from "react-icons/fa";

export default function Inquary() {
    return ( 
      <>
         <div className=" mb-10 bg-[url(./img/re4.jpg)] contrast-100 max-w-[1400px] m-auto py-4 px-2 grid lg:grid-cols-2 gap-4 " >

         <div className=" block grid-cols-1 gap-4">
           <div className="  m-10  text-slate-900 ">
            <h1>GET IN TOUCH</h1>
            
              <div className=" rounded-lg bg-slate-100 p-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-100">
                    

                    <p className=" text-neutral-800 dark:text-neutral-800 m-8 text-lg flex flex-row lg:justify-start gap-2 ">
                        <FaEnvelopeOpenText/> gamage@gmail.com
                    </p>

                    <p className=" text-neutral-800 dark:text-neutral-800 m-8 text-lg flex flex-row  lg:justify-start gap-2">
                        <FaPhoneAlt/> 0114567894
                    </p>

                    <p className=" text-neutral-800 dark:text-neutral-800 m-8 text-lg flex flex-row lg:justify-start gap-2">
                        <FaWhatsapp /> 0774567894
                    </p>

                    <div className="  flex flex-row justify-start lg:justify-start gap-4 m-8 text-indigo-900  ">
                       
                         <FaFacebook/>  
        
                      <FaYoutube/> 
                    
                        
                      <FaLinkedin /> 
                      
                    </div>
                   

                    </div>
                 
            </div>
        </div>
            <div className=" m-auto py-4 px-4 grid lg:grid-cols-1 gap-4 b bg-slate-100 rounded shadow text-center  text-slate-900">
                <h1>Send your Inqueries</h1>
                <form>
                    <div className="grid grid-cols-2 gap-4">
                  
                    <div className="relative mb-6  bg-slate-400 rounded" data-te-input-wrapper-init>
                        <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleInput123"
                        aria-describedby="emailHelp123"
                        placeholder="First name" />
                        <label
                        htmlFor="emailHelp123"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Name
                        </label>
                    </div>

                  
                    <div className="relative mb-6  bg-slate-400 rounded" data-te-input-wrapper-init>
                        <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleInput124"
                        aria-describedby="emailHelp124"
                        placeholder="Last name" />
                        <label
                        htmlFor="exampleInput124"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Destination
                        </label>
                    </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        

                    <div className="relative mb-6  bg-slate-400 rounded" data-te-input-wrapper-init>
                    <input
                        type="country"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleInput125"
                        placeholder="country" />
                    <label
                        htmlFor="exampleInput125"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                        >country
                    </label>
                    </div>

                    <div className="relative mb-6  bg-slate-400 rounded" data-te-input-wrapper-init>
                    <input
                        type="Company name"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleInput125"
                        placeholder="Company name" />
                    <label
                        htmlFor="exampleInput125"
                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                        >Company name
                    </label>
                    </div>

                    
                    </div>
                
                    <div className="grid grid-cols-2 gap-4">
                        

                        <div className="relative mb-6  bg-slate-400 rounded" data-te-input-wrapper-init>
                        <input
                            type="email"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInput125"
                            placeholder="email" />
                        <label
                            htmlFor="exampleInput125"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                            >email
                        </label>
                        </div>
    
                        <div className="relative mb-6  bg-slate-400 rounded" data-te-input-wrapper-init>
                        <input
                            type="Phone number"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInput125"
                            placeholder="Phone number" />
                        <label
                            htmlFor="exampleInput125"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                            >Phone number
                        </label>
                        </div>
    
                        
                        </div>
                    
                        <div className="relative mb-6  bg-slate-400 rounded" data-te-input-wrapper-init>
                        <input
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-500 motion-reduce:transition-none dark:text-neutral-800 dark:placeholder:text-neutral-800 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-10"
                            id="exampleInput126"
                            placeholder="Message" />
                        <label
                            htmlFor="exampleInput126"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                            >Message
                        </label>
                        </div>
    
        
                 
                    <button
                    type="submit"
                    className="inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Submit
                    </button>
                </form>
                </div>
                </div>
                
      
      </>

     );
}


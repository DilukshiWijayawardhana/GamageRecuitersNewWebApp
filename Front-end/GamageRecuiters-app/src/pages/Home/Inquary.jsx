import{ FaUserGraduate ,FaTimes} from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaFacebook  } from "react-icons/fa";
import { FaWhatsapp  } from "react-icons/fa";
import { FaPhoneAlt  } from "react-icons/fa";
import { FaYoutube  } from "react-icons/fa";
import { FaLinkedin  } from "react-icons/fa";
FaWhatsapp
export default function Inquary() {
    return ( 
      <>
         <div class=" mb-10 bg-[url(./img/re4.jpg)] contrast-100 max-w-[1400px] m-auto py-4 px-2 grid lg:grid-cols-2 gap-4 " >

         <div class=" block grid grid-cols-1 gap-4">
           <div class="  m-10  text-slate-900 ">
            <h1>GET IN TOUCH</h1>
            
              <div class=" rounded-lg bg-slate-100 p-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-100">
                    

                    <p class=" text-neutral-800 dark:text-neutral-800 m-8 text-lg flex flex-row lg:justify-start gap-2 ">
                        <FaEnvelopeOpenText/> gamage@gmail.com
                    </p>

                    <p class=" text-neutral-800 dark:text-neutral-800 m-8 text-lg flex flex-row  lg:justify-start gap-2">
                        <FaPhoneAlt/> 0114567894
                    </p>

                    <p class=" text-neutral-800 dark:text-neutral-800 m-8 text-lg flex flex-row lg:justify-start gap-2">
                        <FaWhatsapp /> 0774567894
                    </p>

                    <div class="  flex flex-row justify-start lg:justify-start gap-4 m-8 text-indigo-900  ">
                       
                         <FaFacebook/>  
        
                      <FaYoutube/> 
                    
                        
                      <FaLinkedin /> 
                      
                    </div>
                   

                    </div>
                 
            </div>
        </div>
            <div class=" m-auto py-4 px-4 grid lg:grid-cols-1 gap-4 b bg-slate-100 rounded shadow text-center  text-slate-900">
                <h1>Send your Inqueries</h1>
                <form>
                    <div class="grid grid-cols-2 gap-4">
                  
                    <div class="relative mb-6  bg-slate-400 rounded" data-te-input-wrapper-init>
                        <input
                        type="text"
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleInput123"
                        aria-describedby="emailHelp123"
                        placeholder="First name" />
                        <label
                        for="emailHelp123"
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Name
                        </label>
                    </div>

                  
                    <div class="relative mb-6  bg-slate-400 rounded" data-te-input-wrapper-init>
                        <input
                        type="text"
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleInput124"
                        aria-describedby="emailHelp124"
                        placeholder="Last name" />
                        <label
                        for="exampleInput124"
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Destination
                        </label>
                    </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        

                    <div class="relative mb-6  bg-slate-400 rounded" data-te-input-wrapper-init>
                    <input
                        type="country"
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleInput125"
                        placeholder="country" />
                    <label
                        for="exampleInput125"
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                        >country
                    </label>
                    </div>

                    <div class="relative mb-6  bg-slate-400 rounded" data-te-input-wrapper-init>
                    <input
                        type="Company name"
                        class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleInput125"
                        placeholder="Company name" />
                    <label
                        for="exampleInput125"
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                        >Company name
                    </label>
                    </div>

                    
                    </div>
                
                    <div class="grid grid-cols-2 gap-4">
                        

                        <div class="relative mb-6  bg-slate-400 rounded" data-te-input-wrapper-init>
                        <input
                            type="email"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInput125"
                            placeholder="email" />
                        <label
                            for="exampleInput125"
                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                            >email
                        </label>
                        </div>
    
                        <div class="relative mb-6  bg-slate-400 rounded" data-te-input-wrapper-init>
                        <input
                            type="Phone number"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleInput125"
                            placeholder="Phone number" />
                        <label
                            for="exampleInput125"
                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                            >Phone number
                        </label>
                        </div>
    
                        
                        </div>
                    
                        <div class="relative mb-6  bg-slate-400 rounded" data-te-input-wrapper-init>
                        <input
                            type="text"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-500 motion-reduce:transition-none dark:text-neutral-800 dark:placeholder:text-neutral-800 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-10"
                            id="exampleInput126"
                            placeholder="Message" />
                        <label
                            for="exampleInput126"
                            class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                            >Message
                        </label>
                        </div>
    
        
                 
                    <button
                    type="submit"
                    class="inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
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


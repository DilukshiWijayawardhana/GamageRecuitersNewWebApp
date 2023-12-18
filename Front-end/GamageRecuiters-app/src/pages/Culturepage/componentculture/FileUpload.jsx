import React from 'react'
import { TEInput } from "tw-elements-react";

export default function FileUpload () {
    return ( 
        <div className='p-10 m-5 shadow bg-cyan-500'>
             <h1 className='text-center text-slate-800'>Apply</h1>

              <form className='bg-cyan-500' >
                  
                <div className='max-w-[1400px] m-auto py-2 px-2 grid lg:grid-cols-2 gap-4'>

                   

                <div className='max-w-[1400px] m-auto  px-2 grid lg:grid-cols-1 gap-4 bg-slate-200'>
                <TEInput className=''
                    type="text"
                    id="exampleFormControlInputText"
                    label="Text input"
                    ></TEInput>
                   </div>
                <div className='m-10 ptl-5 bg-slate-200 max-w-[1400px] m-auto  px-2 grid lg:grid-cols-1 gap-4 bg-slate-200'>
                    <TEInput
                        type="email"
                        id="exampleFormControlInputEmail"
                        label="Email input"
                        ></TEInput>
                 </div>
               
            </div>
             

        <div className="grid justify-center gap-4 px-2 py-2 m-auto lg:grid-cols-1">
                        <label
                        htmlFor="formFile"
                        className="inline-block mb-2 text-center text-neutral-700 dark:text-neutral-200"
                        >
                        Upload your Cv
                        </label>
                        <input
                        className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                        type="file"
                        id="formFile"
                        />
    </div>

                        <div className='items-center m-auto'>
                        <button className='p-2 text-black rounded-lg ring animate-pulse '>Send</button>
                        </div>
                        
    
    </form>
    </div>
     );
}




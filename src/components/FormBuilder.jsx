import { useState } from "react"

const FormBuilder = ({ selectedApi, setSelectedApi, searchKeyword, setSearchKeyword, searchCategory,
    setSearchCategory, searchDate,
    setSearchDate }) => {




    return (
        <section className='flex justify-center mx-auto mt-[30px] mb-[20px] '>
            <div className='flex gap-[60px]'>
                <select className='w-[200px] h-[40px] border border-gray-300 p-2 rounded-md' value={selectedApi} onChange={(e) => setSelectedApi(e.target.value)}>
                    <option>Select</option>
                    <option>The Guardian</option>
                    <option>NewsHub</option>
                    <option>Newscred</option>
                </select>
                <div className='flex gap-4'>

                    <input className="rounded-md w-[200px] border border-gray-300 p-2 h-[40px]" type='text'
                        placeholder='search Keyword'
                        autoComplete='off'
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}

                    />
                    <input className="rounded-md w-[200px] border border-gray-300 p-2  h-[40px]" type='text'
                        placeholder='Category'
                        autoComplete='off'
                        value={searchCategory}
                        onChange={(e) => setSearchCategory(e.target.value)}

                    />
                    <input className="rounded-md w-[200px] border border-gray-300 p-2  h-[40px]"
                        type="date"
                        id="date"
                        name="date"
                        value={searchDate}
                        onChange={(e) => setSearchDate(e.target.value)}
                    />
                </div>

            </div>


        </section>
    )
}

export default FormBuilder

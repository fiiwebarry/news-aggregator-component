import { useState } from "react"

const FormBuilder = ({ selectedApi, setSelectedApi, searchKeyword, setSearchKeyword, searchCategory,
    setSearchCategory, searchDate,
    setSearchDate, handleSubmit }) => {




    return (
        <form onSubmit={handleSubmit} className=' lg:flex lg:flex-row flex flex-col justify-center mx-auto mt-[30px] mb-[20px] '>
            <div className='lg:flex lg:flex-row flex flex-col lg:gap-[60px] lg:mx-0 mx-auto'>
                <select className=' flex  lg:mx-0 mx-auto w-[200px] h-[40px] border border-gray-300 p-2 rounded-md' value={selectedApi} onChange={(e) => setSelectedApi(e.target.value)}>
                    <option>Source</option>
                    <option>The Guardian</option>
                    <option>NewsHub</option>
                    <option>NewYorkTimes</option>
                </select>
                <div className=' lg:flex  lg:flex-row md:flex md:flex-row flex flex-col lg:p-0  p-7 lg:mx-0 mx-auto gap-4'>

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

            <button className="lg:mx-0  mx-auto bg-[blue] p-2 lg:w-[100px] w-[200px] text-[white] rounded-md" type="submit">Search</button>
        </form>
    )
}

export default FormBuilder

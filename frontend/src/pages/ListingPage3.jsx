import React, { useContext } from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { listingDataContext } from '../Context/ListingContext';

function ListingPage3() {
    let navigate = useNavigate()
    let {title,setTitle,
            description,setDescription,
            frontEndImage1,setFrontEndImage1,
            frontEndImage2,setFrontEndImage2,
            frontEndImage3,setFrontEndImage3,
            backEndImage1,setBackEndImage1,
            backEndImage2,setBackEndImage2,
            backEndImage3,setBackEndImage3,
            rent,setRent,
            city,setCity,
            landmark,setLandmark,
            category,setCategory,
        handleAddListing,
    adding,setAdding} = useContext(listingDataContext)
  return (
    <div className='w-[100%] h-[100vh] bg-[white] flex items-center justify-center gap-[10px] flex-col overflow-auto relative'>
        <div className='w-[40px] h-[40px] cursor-pointer absolute top-[1%] md:top-[5%] left-[20px] rounded-[50%] flex items-center justify-center bg-[red]' onClick={()=>navigate("/listingpage2")}>
            <FaArrowLeftLong className='w-[25px] h-[25px] text-[white]' />
        </div>

        <div className='w-[80%] flex items-start justify-start text-[25px]'>
            <h1 className='text-[20px] text-[#272727] md:text-[30px] text-ellipsis text-nowrap overflow-hidden'>
                {`In ${landmark.toUpperCase()},${city.toUpperCase()}`}
            </h1>
        </div>

        <div className='w-[80%] h-[300px] flex items-center justify-center flex-col md:flex-row'>
            <div className='w-[100%] h-[65%] md:w-[70%] md:h-[100%] overflow-hidden flex items-center justify-center border-[2px] border-[white]'>
                <img src={frontEndImage1} alt="" className='w-[100%]'/>
            </div>
            <div className='w-[100%] h-[30%] flex items-center justify-center md:w-[30%] md:h-[100%] md:flex-col'>
                <div className='w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-[2px]'>
                    <img src={frontEndImage2} alt="" className='w-[100%]'/>
                </div>
                <div className='w-[100%] h-[100%] overflow-hidden flex items-center justify-center border-[2px]'>
                    <img src={frontEndImage3} alt="" className='w-[100%]'/>
                </div>
            </div>
            
        </div>
        <div className='w-[80%] flex items-start justify-start text-[18px] md:text-[25px]'>
                {`${title.toUpperCase()} ${category.toUpperCase()}, ${landmark.toUpperCase()}`}
            </div>
            <div className='w-[80%] flex items-start justify-start text-[18px] md:text-[25px] text-gray-800'>
                {description}
            </div>
            <div className='w-[80%] flex items-start justify-start text-[18px] md:text-[25px]'>
                {`Rs.${rent}/day`}
            </div>

            <div className='w-[90%] h-[50px] flex items-center justify-center md:justify-start px-[70px]'>
                <button className='px-[30px] py-[10px] bg-[red] text-[white] text-[18px] md:px-[100px] rounded-lg text-nowrap' onClick={handleAddListing} disabled={adding}>
                    {adding? "adding...":"Add Listing"}
                </button>
            </div>
    </div>
  )
}

export default ListingPage3

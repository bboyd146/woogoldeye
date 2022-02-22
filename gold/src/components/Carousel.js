import React from "react"
import img1 from "../images/Item1.jpeg"
import img2 from "../images/Item2.jpeg"
import img3 from "../images/Item3.jpeg"
import img4 from "../images/Item4.jpeg"
import { useState } from "react"


// export default function Carousel () {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const featuredImages = [img1, { img2 }, { img3 }, { img4 }];
//     let count = 0;

//     const handleOnNextClick = () => {
//         count = (count + 1) % featuredImages.length;
//         setCurrentIndex(count);
//     };

//     const handleOnPrevClick = () => {
//         const productsLength = featuredImages.length;
//         count = (currentIndex + productsLength - 1) % productsLength;
//         setCurrentIndex(count);
//     };
    
//     return (
//         <div className="max-w-screen-xl m-auto">
//             <div className="w-full relative select-none">
//                 <div className="aspect-w-16 aspect-h-9">
//                     <img src={featuredImages[currentIndex]} alt="carousel" />
//                     <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
//                         <button onClick={handleOnPrevClick}>Previous</button>
//                         <button onClick={handleOnNextClick}>Next</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
import React from "react"
import img1 from "../images/Item1.jpeg"
import img2 from "../images/Item2.jpeg"
import img3 from "../images/Item3.jpeg"
import img4 from "../images/Item4.jpeg"
const featuredImages = [{ img1 }, { img2 }, { img3 }, { img4 }];



export default Carousel = () => {
    return (
        <div className="max-w-screen-xl m-auto">
            <div className="w-full relative select-none">
                <div className="aspect-w-16 aspect-h-9">
                    <img src={featuredImgs[0]} alt="carousel" />
                    <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-3">
                        <button>Previous</button>
                        <button>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
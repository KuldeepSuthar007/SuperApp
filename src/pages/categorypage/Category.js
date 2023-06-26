import React from 'react'
import catstyle from './Category.module.css';
import vector from '../../assets/Vector (1).png';
import image1 from '../../assets/image 1.png';
import image2 from '../../assets/image 2.png';
import image3 from '../../assets/image 3.png';
import image4 from '../../assets/image 4.png';
import image5 from '../../assets/image 5.png';
import image6 from '../../assets/image 6.png';
import image7 from '../../assets/image 7.png';
import image8 from '../../assets/image 8.png';
import image9 from '../../assets/image 9.png';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import { Link } from 'react-router-dom';
function Category() {

    const ProductArr = [

        { id: 1, title: "Action", img: image1, color: "#FF5209" },
        { id: 2, title: "Drama", img: image2, color: "#D7A4FF" },
        { id: 3, title: "Romance", img: image3, color: "#148A08" },
        { id: 4, title: "Thriller", img: image4, color: "#84C2FF" },
        { id: 5, title: "Western", img: image5, color: "#902500" },
        { id: 6, title: "Horror", img: image6, color: "#7358FF" },
        { id: 7, title: "Fantasy", img: image7, color: "#FF4ADE" },
        { id: 8, title: "Music", img: image8, color: "#E61E32" },
        { id: 9, title: "Fiction", img: image9, color: "#6CD061" }

    ]
    return (
        <>
            <div className={catstyle.catepage}>
                <div className={catstyle.cat_text}>
                    <p className={catstyle.h1}>Super app</p>
                    <p className={catstyle.h2}>Choose your <br /> entertainment <br />category</p>
                    <div className={catstyle.selectbtn}>
                        <button>Action X</button>
                        <button>Action X</button>
                        <button>Action X</button>
                        <button>Action X</button>
                        <button>Action X</button>
                        <button>Action X</button>
                    </div>
                    <img src={vector} alt="" />
                    <p className={catstyle.p}>Minimum 3 category required</p>
                </div>
                <div className={catstyle.cards}>{ProductArr.map((item, index) => {
                    return <CategoryCard key={item.id} title={item.title} img={item.img} color={item.color} />
                })}
                </div>
            </div>
            <div className={catstyle.nextbtn}> <Link to='/dashboard'><button >Next Page</button></Link></div>
        </>

    )
}

export default Category
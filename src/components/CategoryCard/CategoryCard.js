import React from 'react'
import catstyle from '../../pages/categorypage/Category.module.css';
function CategoryCard({ title, img, color }) {

    const handleClick = () => {
        console.log(title)
    }
    return (
        <>
            <div className={catstyle.cat_card} style={{ backgroundColor: color }} onClick={handleClick}>
                <p className={catstyle.title}>{title}</p>
                <div className={catstyle.insidecat_card}><img src={img} alt="" /></div>
            </div>
        </>
    )
}

export default CategoryCard
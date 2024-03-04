import React from 'react'
import { brands } from '../../../components/navbar/utils'
import { Link } from 'react-router-dom'
import categoryImg from '../../../assets/image-category-1.png'

const Category = () => {
    return (
        <div className='max-w-screen-2xl mx-auto py-28 px-4 xl:px-28 container'>
            <div className='flex items-center justify-around flex-wrap gap-4 py-5'>
                {brands.map((brand) => (
                    <div key={brand.id} >
                        <img src={brand.image} alt="" />
                    </div>
                ))}
            </div>
            <div className='mt-8 flex flex-col md:flex-row items-center gap-4 '>
                <p className='text-xl font-semibold bg-black text-white text-center uppercase rounded-sm inline-flex p-2 md:p-1.5 md:-rotate-90'>Explore new and popular styles</p>
                <div className=''>
                    <Link>
                        <img  src={categoryImg} className='w-full hover:scale-105 transition-all duration-200' alt="" />
                    </Link>
                </div>
                <div className='md:w-1/2'>
                    <div className=' grid grid-cols-2 gap-2'>
                        <Link>
                            <img  className='w-full hover:scale-105 transition-all duration-200' src="https://s3-alpha-sig.figma.com/img/6f41/b41b/8da33a22ac4df682e8611d37c589aa8d?Expires=1701043200&Signature=ThHybesEeTJfM18z67qpRl9XLvmSyAD1heyYDruwNbdad0pRjBVlK0-Sbad7KhGVMhTjvJxQxRV3luCsCofvo9oqznkb~4f3V041lB89oqjcOMCP0nVOSOgcDsEu59N103~sZJLlW-k3FlG9xu5bgjHAuC3m4EhwpgxUsy-uIiupMejb9hAnSU1opgctE-mR5-fJKc9zfzsdDQ31As27rpyGPrJxMB5GO~Wckc4N~~Rtq9FEuwBZuzuiEa-utKbKjEFQaQqUSGPHv028Le4CJuktnndnqZdLVNUel0RUKhkXjNwL4tflN-iO9nu2bMVCjKtSVzBo38FvLNEtym3J8Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                        </Link>
                        <Link>
                            <img  className='w-full hover:scale-105 transition-all duration-200' src="https://s3-alpha-sig.figma.com/img/00ad/aefd/de3bf7c31966e6491968c6624691f180?Expires=1701043200&Signature=fAMrJuI6L~suliDfks38WK4nRlBJBbKCYMgET3hs~ddVPYDVWLvnETqUuAGtJHDEpMoh6smxBpfZtLRRWgn1bxAh2hED50DwvZdCio9SH6zVuRZh7482mvLDK11kFNuS1r7H1q8k9Rr6CzqXX9JIBf8rKFwkXx6089k9U4WavZpt4~om-0aXKwQGIBHzT8ElOuFowXEvPkqxIWo8UMxXnwkE8CtHeqlBspTMSkSnsVM6z6~Vo1npo3YolrrsgNvvUDffk2hxIt-1VfAUUZIXkdhkWBEXZ3LCcKGtDsXxDIGrmRdwXbYdD4zqrjZzeX60c9d3fdNpJ3X5XdW8FZHaqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                        </Link>
                        <Link>
                            <img  className='w-full hover:scale-105 transition-all duration-200' src="https://s3-alpha-sig.figma.com/img/545f/95cd/165a3345c9f91c12ab6be7a972cffd73?Expires=1701043200&Signature=Y4Jm-Lej~cTd1v~mpNaNI4fORw1WlzvElyWV0NKE6pSHNwYJU-BeXQrErNUVE7Md0o69ubQVxwcDn8gAlqOi~cOv2c1G0BUrv5mmlUtAXUw7rLBlm5gpvZpMMzgxzz~xxI55HO1gtNVRILVCQRsCfZEtLcARP7p1a7jg59wF6mwd-1AzHM9fUWOMjfdNwjuEdy23jCt6~fNnIf0kSeghHDx5uD9hir4nO~XrrU3Esx-YHU-eI~sDLO2UUV0l7suUUnflrMSMGCGGEj6c8IS5H-5fnr7TopeY~v9jy3XMLKUqfBBEE4rrcOVEWrwLwg5qVu38IQcfzENNkV2kNXr7Yw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                        </Link>
                        <Link>
                            <img  className='w-full hover:scale-105 transition-all duration-200' src="https://s3-alpha-sig.figma.com/img/aeed/7dfe/519adf0ed7e906616bd8e64b644cd5d0?Expires=1701043200&Signature=l3jR02i7A1HT0Q~FN8Zh0LRDFNBhy5~~1vI9ANgJm8yfPbwoBnlpBSH7An0tIXbHzxZAZ-n1QkbRjFJA-F58zZ2I5XNjDTuWV5mFIgTg9noMQ1l1xuD4ZncWDkR6pcv2XgXxpfYXgkKI4WzALt3ndRA9v~DkFiSpEWEZF8y7cfEyi~vbyJp56-Vp2pC1fTRlXyOUp5eAzwfTIsD2ht6gBgAs6skebbBZbSWe6rjoMgq3as3DaDDFHumCqyJCiE~VYrT4jnm8~BBXZmryGzFJpe8ruhHW94~qgbD4eFwCWVd7kZa2t5Vi7APLP2zovG0o4VawCX8-W382IxUu3A~69g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category

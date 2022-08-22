import React from 'react'
import { Link } from 'gatsby'
import { StaticImage, getImage, GatsbyImage } from "gatsby-plugin-image";
import Button from './Button';

const NewsItemMiniV2 = ({ slug, title, description, imageData }) => {
    const link = `/news/${slug}`
    const image = getImage(imageData)
    return (
        <div className="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md">
            <GatsbyImage className="object-cover w-full h-40" image={image} alt="News Image" />

            <div className="p-6">
                <div>
                    <Link to={link} className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform hover:text-gray-600 hover:underline">{title}</Link>
                    <p className="mt-2 text-sm text-gray-600 line-clamp-3">{description}</p>
                    <div className="flex justify-between mt-3 item-center">
                        <Button className="px-2 py-1 text-xs font-bold uppercase">Read more</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsItemMiniV2
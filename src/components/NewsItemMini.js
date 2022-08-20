import React from 'react'
import { Link } from 'gatsby'
import { StaticImage, getImage, GatsbyImage } from "gatsby-plugin-image";
import Button from './Button';

const NewsItemMini = ({ slug, title, description, imageData }) => {
    const link = `/news/${slug}`
    const image = getImage(imageData)
    return (
        <div className="flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
            <div className="w-1/3 bg-cover">
                <GatsbyImage className="object-cover w-full h-64" image={image} alt="News Image" />
            </div>

            <div className="w-2/3 p-4 md:p-4">
                <h1 className="text-2xl font-bold text-gray-800">{title}</h1>

                <p className="mt-2 text-sm text-gray-600">{description}</p>

                <div className="flex justify-between mt-3 item-center">
                    <Button className="px-2 py-1 text-xs font-bold uppercase">Read more</Button>
                </div>
            </div>
        </div>
    )
}

export default NewsItemMini
import React from 'react'
import { Link } from 'gatsby'
import { StaticImage, getImage, GatsbyImage } from "gatsby-plugin-image";

const NewsItemMini = ({ slug, title, description, imageData }) => {
    const link = `/news/${slug}`
    const image = getImage(imageData)
    return (
        <div class="flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
            <div class="w-1/3 bg-cover">
                <GatsbyImage className="object-cover w-full h-64" image={image} alt="News Image" />
            </div>

            <div class="w-2/3 p-4 md:p-4">
                <h1 class="text-2xl font-bold text-gray-800">{title}</h1>

                <p class="mt-2 text-sm text-gray-600">{description}</p>

                <div class="flex justify-between mt-3 item-center">
                    <button class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Read more</button>
                </div>
            </div>
        </div>
    )
}

export default NewsItemMini
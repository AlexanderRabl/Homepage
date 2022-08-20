import React from 'react'
import { Link } from 'gatsby'
import { StaticImage, getImage, GatsbyImage } from "gatsby-plugin-image";

const NewsItem = ({ slug, title, description, author, publishedDate, imageData, tags }) => {
    const link = `/news/${slug}`
    const image = getImage(imageData)
    return (
        <div className="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md">
            <GatsbyImage className="object-cover w-full h-64" image={image} alt="News Image" />

            <div className="p-6">
                <div>
                    {tags.map((tag) => (
                        <span className="text-xs font-medium text-primary uppercase mr-3">{tag}</span>
                    ))}
                    <Link to={link} className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform hover:text-gray-600 hover:underline">{title}</Link>
                    <p className="mt-2 text-sm text-gray-600">{description}</p>
                </div>

                <div className="mt-4">
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <StaticImage className="object-cover w-10 h-10 rounded-full" src="./../images/PortraitfotoMini.jpg" alt="Avatar" />
                            <Link to="/about" className="mx-2 font-semibold text-gray-700">{author}</Link>
                        </div>
                        <span className="mx-1 text-xs text-gray-600">{publishedDate}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsItem

{/* <Card className="mb-8">

            {/* <GatsbyImage image={image}
                        alt={alt} className="max-h-[200px]"
                        /> */}
{/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains">
            <p className="text-xl font-semibold">{title}</p>
            <p className="mt-6">An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.</p>
            <div className="flex items-center mt-8">
                <div>
                    <p className="text-sm text-gray-600">{publishedDate}</p>
                </div>
            </div>

        </Card> */}
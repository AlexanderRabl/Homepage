import React from 'react'
import { Link } from "gatsby"
import Card from './Card';
import { GatsbyImage } from "gatsby-plugin-image";

const NewsItem = ({ alt, slug, title, publishedDate }) => {
    return (

        <Card className="mb-8">

            {/* <GatsbyImage image={image}
                        alt={alt} className="max-h-[200px]"
                        /> */}
            {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
            <p className="text-xl font-semibold">{title}</p>
            <p className="mt-6">An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.</p>
            <div className="flex items-center mt-8">
                <div>
                    <p className="text-sm text-gray-600">{publishedDate}</p>
                </div>
            </div>

        </Card>
    )
}

export default NewsItem
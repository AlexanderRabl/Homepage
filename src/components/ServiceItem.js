import React from 'react';

const ServiceItem = ({ title, content, url }) => (
    <div className="p-8 space-y-3 border-2 border-primary-300 rounded-xl">
        <span className="inline-block text-primary-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        </span>

        <h1 className="text-2xl font-semibold text-gray-800 capitalize">{title}</h1>

        <p className="text-gray-500">
            {content}
        </p>

        <a href="#" className="inline-flex p-2 text-white capitalize transition-colors duration-200 transform bg-primary-300 rounded-full hover:underline hover:bg-primary-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </a>
    </div>
);

export default ServiceItem;
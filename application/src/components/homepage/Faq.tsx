'use client';

import { useState } from 'react';
import { IDataFaqSection } from '@/data/homepage/FaqSection';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

interface IFaqProps {
    data: IDataFaqSection;
    className?: string;
}

export default function CardsAboutSection({ className, data }: IFaqProps): JSX.Element {
    const { id, question, answer } = data;
    const [clickArrow, setClickArrow] = useState<boolean>(true);

    return (
        <div className={"lg:max-w-4xl lg:mx-auto border-solid border-b-2 border-gray-900 text-gray-50 p-4 rounded-md shadow-md " + className}>
            <button className="w-full flex items-center justify-between" onClick={() => setClickArrow(!clickArrow)}>
                <h3 className="w-full text-base lg:text-xl text-left font-semibold py-2">{id} - {question}</h3>
                {clickArrow ? (
                    <BiChevronDown className="h-12 w-12 text-gray-50 text-right" />
                ) : (
                    <BiChevronUp className="h-12 w-12 text-gray-50" />
                )}
            </button>
            <p className={`text-base lg:text-lg text-left lg:py-4 lg:px-8 ${clickArrow ? "hidden" : "block"}`}>{answer}</p>
        </div>
    );
}
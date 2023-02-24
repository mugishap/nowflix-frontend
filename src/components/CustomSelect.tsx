import React from "react";

interface Props {
    options: {
        name: string,
        value: string
    }[],
    selectedValue: string,
    setSelectedValue: Function
}

const Select: React.FC<Props> = ({ options, selectedValue, setSelectedValue }) => {



    return (
        <div className="relative">
            <select
                className="block appearance-none w-full bg-black border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
            >
                <option value="" disabled hidden>
                    Select an option
                </option>
                {
                    options.map((option, index) => (
                        <option key={index} value={option.value}>{option.name}</option>
                    ))
                }
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path
                        d="M14.707,7.293c0.391,0.391,0.391,1.023,0,1.414l-4.586,4.586c-0.391,0.391-1.023,0.391-1.414,0l-4.586-4.586 c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L10,10.586l4.293-4.293C13.684,6.902,14.316,6.902,14.707,7.293z"
                    />
                </svg>
            </div>
        </div >
    );
};

export default Select;

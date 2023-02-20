import React from 'react'

function Results() {
    return (
        <div className="p-[30px] bg-slate-100 h-screen">
            <div className="flex flex-row">
                <div className="flex flex-row justify-end">
                    <p>Close Button</p>
                </div>
            </div>

            <div className="mt-[40px]">
                <p>Image Here</p>
                <p>Results of Fantasy Quiz #156</p>
            </div>

            <div className="shadow border bg-white">
                <div className="flex flex-row justify-between">
                    <p>Icon here</p>
                    <p>Correct Predictions</p>
                    <p>120</p>
                </div>
            </div>

            <div className="shadow border bg-white">
                <div className="flex flex-row justify-between">
                    <p>Icon here</p>
                    <p>Correct Predictions</p>
                    <p>120</p>
                </div>
            </div>
        </div>
    )
}

export default Results
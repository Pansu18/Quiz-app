import React, { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import data from "./data";

function Quiz() {
  const questionList = data[0];
  const [valueInitial, setInitialValue] = useState(0);

  const handleChange = (value) => {
    console.log("value", value);
  };

  useEffect(() => {
    console.log(questionList.option);
  }, []);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="p-[30px] bg-slate-100 h-screen">
      {/*Upper Section  */}
      <div className="flex flex-row justify-between">
        <div className="flex flex-row">
          <span>Icon</span>
          <p>200</p>
        </div>
        <div className="flex flex-row">
          <p>Fantasy Quiz #156</p>
        </div>
        <div className="flex flex-row">
          <p>Close Button</p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="text-center mt-[80px]">
          <h1>{questionList.question}</h1>
        </div>

        <RadioGroup
          className="mt-[50px] mx-auto"
          value={valueInitial}
          onChange={handleChange}
        >
          <div>
            {questionList.option.map((item) => (
              <RadioGroup.Option
                key={item.value}
                value={item}
                // disabled={!size.inStock}
                className={({ active }) =>
                  classNames(
                    item
                      ? "bg-white shadow-sm text-gray-900 cursor-pointer"
                      : "bg-gray-50 text-gray-200 cursor-not-allowed",
                    active ? "ring-2 ring-indigo-500" : "",
                    "group border rounded-md py-3 px-4 flex items-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 mt-[20px] mb-[20px] w-[100%]"
                  )
                }
              >
                {({ active, checked }) => (
                  <>
                    <RadioGroup.Label
                      as="div"
                      className="flex flex-row items-center"
                    >
                      <p className="flex mr-[20px] bg-slate-200 rounded-full w-[30px] h-[30px] justify-center items-center">
                        <span className="text-[14px]">{item.letter}</span>
                      </p>
                      <p>{item.value}</p>
                    </RadioGroup.Label>
                    {item ? (
                      <span
                        className={classNames(
                          active ? "border" : "border-2",
                          checked ? "border-indigo-500" : "border-transparent",
                          "pointer-events-none absolute -inset-px rounded-md"
                        )}
                        aria-hidden="true"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                      >
                        <svg
                          className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                          stroke="currentColor"
                        >
                          <line
                            x1={0}
                            y1={100}
                            x2={100}
                            y2={0}
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                      </span>
                    )}
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>

        <div className="flex flex-row justify-center w-[50%] absolute bottom-5">
          <div className="w-full flex flex-row items-center">
            <div className="w-[60%] bg-gray-200 h-3 mb rounded-md">
              <div className="bg-blue-600 h-3 w-[50%] rounded-md"></div>
            </div>
            <p className="ml-[10px]">1 / 5</p>
          </div>
          <button
            type="submit"
            className="group relative flex w-[60%] justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-400 disabled:cursor-wait"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;

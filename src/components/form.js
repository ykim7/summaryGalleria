import React, { useState } from "react";
import moment from "moment";
import "moment/locale/ko";

const FormComponent = () => {
    const [parkingCount, setParkingCount] = useState("");
    const [breakCount, setBreakCount] = useState("");
    const [mealCount, setMealCount] = useState("");
    const [callCount, setCallCount] = useState("");
    const [temperature, setTemperature] = useState("");
    const [membershipCount, setMembershipCount] = useState("");
    const [result, setResult] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        moment.locale("ko");

        const resultString = `${moment().format("MMMM Do dddd")}
주차지원 ${parkingCount || "0"}건
테이블 ${parseInt(breakCount || 0) + parseInt(mealCount || 0)}건(휴식${
            breakCount || "0"
        }, 식사${mealCount || "0"})
전화 ${callCount || "0"}건
아트리움 온도 ${temperature || "0"}°C
신규 멤버십 ${membershipCount || "0"}`;

        setResult(resultString);
    };

    return (
        <div className="container mx-auto mt-10">
            <div className="flex justify-center">
                <div className="w-full max-w-md">
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h5 className="block text-cyan-600 text-3xl text-center font-bold mb-2 bebas-neue-regular">
                            Summary of the day
                        </h5>
                        <br />
                        <form onSubmit={handleSubmit}>
                            <FormInput
                                label="주차 건수"
                                value={parkingCount}
                                onChange={setParkingCount}
                            />
                            <FormInput
                                label="휴식 수"
                                value={breakCount}
                                onChange={setBreakCount}
                            />
                            <FormInput
                                label="식사 수"
                                value={mealCount}
                                onChange={setMealCount}
                            />
                            <FormInput
                                label="전화 수"
                                value={callCount}
                                onChange={setCallCount}
                            />
                            <FormInput
                                label="현재 온도"
                                value={temperature}
                                onChange={setTemperature}
                                type="text"
                            />
                            <FormInput
                                label="금일의 멤버십 가입 수"
                                value={membershipCount}
                                onChange={setMembershipCount}
                            />

                            <div className="mt-4 flex justify-end">
                                <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                                    SUBMIT
                                </button>
                            </div>
                        </form>
                        {result && (
                            <div className="mt-4 bg-gray-100 p-4 rounded">
                                <pre className="text-sm">{result}</pre>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const FormInput = ({ label, value, onChange, type = "number" }) => (
    <div className="mb-4">
        <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor={`form${label}`}
        >
            {label}
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={`form${label}`}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
);

export default FormComponent;

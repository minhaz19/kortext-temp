import React, {useState} from 'react';
import Switch from "react-switch";

const Customizations = props => {
    //input
    const [inputData, setInputData] = useState({
        question1: '',
        isCusAnswerRequired: false,
    });
    const switchChange = input => e => {
        setInputData({...inputData, [input]: e});
      }
    
    const handleChange = input => e => {
        setInputData({...inputData, [input]: e.target.value});
    };
    const { id, removeCus } = props;
    return (
        <div className="border p-5 border-gray-400 rounded mt-5">
                    {/* 1 Quesyion 1 */}
                    <div className="flex flex-row">
                        <p className=" text-sm w-full">Question 1</p>
                    </div>
                    <input
                        type="text"
                        name="question1"
                        className="border-b ml-4 pt-1 sm:w-96 w-9/12"
                        placeholder=""
                        value={inputData.question1}
                        onChange={handleChange('question1')}
                    />

                    {/* answer req*/}
                    <div className="flex flex-row pt-4">
                        <p className="text-sm w-full">Answer Required</p>
                        <div className="grid justify-end w-full">
                            <Switch 
                                id="isCusAnswerRequired"
                                onChange={switchChange("isCusAnswerRequired")} 
                                checked={inputData.isCusAnswerRequired} 
                                checkedIcon={false}
                                uncheckedIcon={false}
                                offColor="#e8e9ec"
                                offHandleColor="#a4a4a4"
                                onHandleColor="#e8e9e7"
                                height={12}
                                width={32}
                                handleDiameter={16}
                            />
                        </div>
                    </div>
                    {inputData.isCusAnswerRequired ? (
                        <div id="cusChoices" onChange={handleChange("cusChoices")} >
                            <div className="pt-2 text-sm">
                                <input 
                                    type="radio" 
                                    value="provideChoices"
                                    name="cusChoices" 
                                /> Provide choices
                            </div>
                            <div className="pt-2 text-sm">
                                <input 
                                    type="radio" 
                                    value="allowTextInput"
                                    name="cusChoices" 
                                /> Allow text input
                            </div>
                        </div>
                    ) : null}
                    {/* 5 delete*/}
                    <div className="flex flex-row pt-4" onClick={() => removeCus(id)}>
                        <img src="/assets/svgs/dashboard/material-delete.svg" alt="" className="h-4 pt-1"/>
                        <p className="pl-4 text-sm">REMOVE</p>
                    </div>
                </div>
    )
}

export default Customizations

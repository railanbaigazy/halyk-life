'use client'

import DragAndDropFileUpload from "@components/med/DragDrop";
import { useEffect, useState } from "react";

const UploadForm = ({ submitting }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://164.92.228.128:4444/api/v1/customers/");
            const data = await response.json();
            setData(data);
        };

        fetchData();
        console.log(data)

    }, []);
    const [pinField, setPinField] = useState('');

    const [searchedPosts, setSearchedPosts] = useState([]);
    const [searchTimeout, setSearchTimeout] = useState(null);

    const filterPrompts = (filterText) => {
        // const regex = new RegExp(filterText, "i");
        // return posts.filter(p => (
        //     regex.test(p.)
        // ));
    };

    const handleSearchChange = (e) => {
        clearTimeout(searchTimeout);
        setSearchText(e.target.value);
        setSearchTimeout(
            setTimeout(() => {
                const searchResult = filterPrompts(e.target.value);
                setSearchedPosts(searchResult);
            }, 500)
        );

    };

    useEffect(() => {

    }, [pinField]);

    const handlePinChange = (e) => {
        const changedPinField = e.target.value
        if (pinField.length < 13 && changedPinField.length < 13) {
            setPinField(changedPinField)
        }
    }
    return (
        <form
            name="upload-form"
            className="flex w-full gap-[20px]"
        >
            <div className="flex flex-col flex-1 bg-white h-[480px] p-[40px] rounded-[10px]">
                <label className="flex-1">
                    <span>ИИН</span>
                    <textarea
                        className="form_input"
                        required
                        value={pinField}
                        onChange={handlePinChange}
                    />
                </label>
                <label className="flex-1">
                    <span>ФИО</span>
                    <textarea className="form_input" disabled />
                </label>
                <label className="flex-1">
                    <span>Дата рождения</span>
                    <textarea className="form_input" disabled />
                </label>
                <label className="flex-col">
                    <span>Пол</span>
                    <div className="flex-1 flex gap-[20px] mt-2.5">
                        <div className="flex-1 std_button green_button">Мужчина</div>
                        <div className="flex-1 std_button">Женщина</div>
                    </div>
                </label>

            </div>
            <div className="flex flex-col flex-1 bg-white rounded-[10px] p-[40px]">
                <span className="mb-1.5">Прикрепление данных пациента</span>
                <DragAndDropFileUpload />
                <p className="text-[#8E8E8E] text-center text-xs mt-4">Нажимая кнопку отправить, вы подтверждаете, что вся информация о пациенте верна и все необходимые данные были прикреплены</p>
                <button
                    type="submit"
                    disabled={submitting}
                    className="std_button green_button w-1/2 mx-auto mt-4"
                >
                    {submitting ? "Отправляется..." : "Отправить"}
                </button>
            </div>
        </form>
    );
};

export default UploadForm;
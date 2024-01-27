import DragAndDropFileUpload from "@components/med/DragDrop";

const UploadForm = ({ submitting }) => {
    return (
        <form
            name="upload-form"
            className="flex w-full gap-[20px]"
        >
            <div className="flex flex-col flex-1 bg-white h-[480px] p-[40px] rounded-[10px]">
                <label className="flex-1">
                    <span>ИИН</span>
                    <textarea className="form_input" required />
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
                <button
                    type="submit"
                    disabled={submitting}
                    className="std_button green_button"
                >
                    {submitting ? "Отправляется..." : "Отправить"}
                </button>
            </div>
        </form>
    );
};

export default UploadForm;
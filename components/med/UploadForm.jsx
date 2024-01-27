import DragAndDropFileUpload from "@components/med/DragDrop";

const UploadForm = () => {
    return (
        <form
            name="upload-form"
            className="flex"
        >
            <div className="flex flex-col w-1/2 bg-white p-[40px]">
                <label>
                    <span>ИИН</span>
                    <textarea className="form_input" required />
                </label>
                <label>
                    <span>ФИО</span>
                    <textarea disabled />
                </label>
                <label>
                    <span>Дата рождения</span>
                    <textarea disabled />
                </label>
                <div>
                    <div>Мужчина</div>
                    <div>Женщина</div>
                </div>

            </div>
            <div className="flex flex-col w-1/2 bg-white">
                <span>Прикрепление данных пациента</span>
                <DragAndDropFileUpload />
            </div>
        </form>
    );
};

export default UploadForm;
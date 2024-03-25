import { toast } from "react-toastify";

export const saveToLocalStorage = (data) => {

    const savedData = JSON.parse(localStorage.getItem('book')) || [];
    const existData = savedData.find(item => item.id == data.id);
    if (!existData) {
        savedData.push(data);
        localStorage.setItem('book', JSON.stringify(savedData));
        toast.success('Successfully Added!')
    } else {
        toast.warning('Already Added')
    }

}
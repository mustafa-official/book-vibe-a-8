import { toast } from "react-toastify";

export const saveToLocalStorage = (data) => {

    const savedData = JSON.parse(localStorage.getItem('book')) || [];
    const existData = savedData.find(item => item.id == data.id);
    if (!existData) {
        savedData.push(data);
        localStorage.setItem('book', JSON.stringify(savedData));
        toast.success('Book Added to Read List')
    } else {
        toast.warning('You have Already Read this Book')
    }

}

export const getFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem('book')) || [];
    return data
}
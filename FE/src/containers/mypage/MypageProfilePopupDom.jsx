import ReactDom from 'react-dom';
 
const PopupDom = ({ children }) => {
    const element = document.getElementById('popupDom');
    return ReactDom.createPortal(children, element);
};
 
export default PopupDom;
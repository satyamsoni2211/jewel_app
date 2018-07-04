import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Aux = props => props.children;

const VALID_IMAGE_EXTENSION = ['jpeg', 'jpg', 'png', 'gif'];

export const imageHandler = (event, save) => {
    let base64 = '';
    if (event.target.files && event.target.files[0]) {
        const {files} = event.target;
        const extension = files[0].type.split('/')[1];

        if (!VALID_IMAGE_EXTENSION.includes(extension)) {
            alert('file is not valid');
            return;
        }
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        console.log('converting image');
        reader.onload = (e) => {
            // this.props.handler(e.target.result, 'imgUrl');
            console.log(e);
             save(e.target.result);
        };
        console.log(base64);
        return base64;
    }
}

export const notify= (msg,type) => toast[type](msg, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 100
});
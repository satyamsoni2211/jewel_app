export const Aux = props => props.children;

const VALID_IMAGE_EXTENSION = ['jpeg', 'jpg', 'png', 'gif'];

export const imageHandler = (event) => {
    let base64 = '';
    if (event.target.files && event.target.files[0]) {
        const {files} = event.target;
        const extension = files[0].type.split('/')[1];

        if (!VALID_IMAGE_EXTENSION.includes(extension)) {
            alert('file is not valid');
            return;
        }

        // if (files[0].size > (800 * 1024)) {
        //     alert('file should not greater then 800KB');
        //     this.props.handler('', 'imgUrl');

        //     return;
        // }
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        console.log('converting image');
        reader.onload = (e) => {
            // this.props.handler(e.target.result, 'imgUrl');
            console.log(e);
             base64 = e.target.result;
        };
        console.log(base64);
        return base64;
    }
}
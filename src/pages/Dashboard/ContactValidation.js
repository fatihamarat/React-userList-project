import { object, string } from 'yup';

const requiredMessage="Bu alan zorunludur..."
const contactSchema = object({
    firstName: string().required(requiredMessage),
    lastName: string().required(requiredMessage),
    email: string().email("Geçerli bir e-mail adresi giriniz...").required(requiredMessage),
    message: string().min(5,"Min.5 karakter giriniz...").required(requiredMessage),

});

export default contactSchema;
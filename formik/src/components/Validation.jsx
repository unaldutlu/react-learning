import { object, string, number, date, InferType, ref } from "yup";

const Validation = object({
  email: string()
    .email("Lütfen E-posta adresnizi giriniz...")
    .required("Boş bırakılamaz...."),
  password: string()
    .min(5, "En az 5 karakter gitilmelidir... ")
    .required("Boş bırakılamaz...."),
  passwordConfirm: string()
    .oneOf([ref("password")], "Girmiş olduğunuz paralolar uyuşmuyor...")
    .required("Boş bırakılamaz...."),
});

export default Validation;
